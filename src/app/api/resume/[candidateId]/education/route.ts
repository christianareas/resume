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

	// Education.
	const education = resume.education

	// If there's no education, return a 404 error.
	if (!education) {
		return NextResponse.json(
			{
				error: "Couldn’t find the education.",
			},
			{ status: 404 },
		)
	}

	return NextResponse.json({ education }, { status: 200 })
}
