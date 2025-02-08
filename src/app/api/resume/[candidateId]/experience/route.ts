// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"

// GET request.
export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ candidateId: string }> },
) {
	// Candidate ID.
	const { candidateId } = await params

	// If there's no candidateId match, return a 404 error.
	if (resume.candidate.candidateId !== candidateId) {
		return NextResponse.json(
			{
				error: `Couldn’t find the candidate by the candidateId (${candidateId}).`,
			},
			{ status: 404 },
		)
	}

	// Experience.
	const experience = resume.experience

	// If there's no experience, return a 404 error.
	if (!experience) {
		return NextResponse.json(
			{
				error: "Couldn’t find the experience.",
			},
			{ status: 404 },
		)
	}

	return NextResponse.json({ experience }, { status: 200 })
}
