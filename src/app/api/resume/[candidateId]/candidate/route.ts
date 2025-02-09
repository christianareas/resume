// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"
import { validateCandidateId } from "@/lib/api/resume"

// GET request.
export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ candidateId: string }> },
) {
	// Candidate ID.
	const { candidateId } = await params

	// Validate candidate ID.
	const candidateIdError = validateCandidateId(candidateId)
	if (candidateIdError) return candidateIdError

	// Candidate.
	const candidate = resume.candidate

	return NextResponse.json({ candidate }, { status: 200 })
}
