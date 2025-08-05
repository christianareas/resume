// Dependencies.
import fs from "node:fs/promises"
import path from "node:path"
import { type NextRequest, NextResponse } from "next/server"
import { chromium } from "playwright-chromium"

// Runtime.
export const runtime = "nodejs"

// GET request.
export async function GET(request: NextRequest) {
	// Create a headless browser.
	const browser = await chromium.launch({
		headless: true,
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	})
	const browserContext = await browser.newContext({
		viewport: { width: 1280, height: 900 },
	})

	// Open the resume page.
	const resumePage = await browserContext.newPage()
	await resumePage.emulateMedia({ media: "screen" })
	const resumeUrl = new URL("/", request.url).toString()
	await resumePage.goto(resumeUrl, { waitUntil: "networkidle" })
	await resumePage.evaluate(() => {
		const downloadButton = document.getElementById("download-button")
		if (downloadButton) downloadButton.remove()
	})

	// Generate the PDF.
	const pdfBuffer = await resumePage.pdf({
		format: "A3",
		margin: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
		scale: 0.9,
		printBackground: true,
	})
	const pdf = new Uint8Array(pdfBuffer)

	// Close the browser.
	await browser.close()

	// Save the PDF to public/resume/.
	const publicPath = path.join(
		process.cwd(),
		"public",
		"resume",
		"Christian Areas.pdf",
	)
	await fs.mkdir(path.dirname(publicPath), { recursive: true })
	await fs.writeFile(publicPath, pdf)

	// Return the PDF.
	return new NextResponse(pdf, {
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition": 'attachment; filename="Christian Areas.pdf"',
		},
	})
}
