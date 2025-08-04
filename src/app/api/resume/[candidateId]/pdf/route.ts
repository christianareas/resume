// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer"

// Runtime.
export const runtime = "nodejs"

// GET request.
export async function GET(request: NextRequest) {
	// Create a headless browser.
	const browser = await puppeteer.launch({
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
		headless: true,
	})

	// Open the resume page.
	const resumePage = await browser.newPage()
	await resumePage.setViewport({ width: 1280, height: 900 })
	await resumePage.emulateMediaType("screen")
	const resumeUrl = new URL("/", request.url).toString()
	await resumePage.goto(resumeUrl, { waitUntil: "networkidle0" })
	await resumePage.evaluate(() => {
		document.getElementById("download-button")?.remove()
	})

	// Render to PDF.
	const pdfBuffer = await resumePage.pdf({
		format: "A3",
		printBackground: true,
		margin: { top: "0", bottom: "0", left: "0", right: "0" },
		scale: 0.9,
	})

	// Close the browser.
	await browser.close()

	// Return the PDF.
	return new NextResponse(new Uint8Array(pdfBuffer), {
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition": `attachment; filename="Christian Areas.pdf"`,
		},
	})
}
