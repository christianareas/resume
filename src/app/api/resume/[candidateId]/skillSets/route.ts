// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"
import { validateCandidateId, validateResumeSection } from "@/lib/api/resume"

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

	// Skills.
	const skillSets = resume.skillSets

	// Validate skills.
	const skillsError = validateResumeSection(skillSets, "skillSets")
	if (skillsError) return skillsError

	return NextResponse.json({ skillSets }, { status: 200 })
}
