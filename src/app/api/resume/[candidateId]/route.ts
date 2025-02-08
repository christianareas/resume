// Dependencies.
import { NextResponse } from "next/server"
import { resume } from "@/data/resume"

// Types.
import type { NextRequest } from "next/server"

// GET request.
export async function GET(
	request: NextRequest,
	{ params }: { params: { candidateId: string } },
) {
	// Candidate ID.
	const { candidateId } = params

	// If there's no candidateId match, return a 404 error.
	if (resume.candidate.candidateId !== candidateId) {
		return NextResponse.json(
			{
				error: `Couldn’t find the candidate’s resume by the candidateId (${candidateId}).`,
			},
			{ status: 404 },
		)
	}

	return NextResponse.json({ resume }, { status: 200 })
}
