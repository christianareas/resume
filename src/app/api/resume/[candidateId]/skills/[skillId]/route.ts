// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"
import { validateCandidateId, validateResumeItem } from "@/lib/api/resume"

// GET request.
export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ candidateId: string; skillId: string }> },
) {
	// Candidate and skill IDs.
	const { candidateId, skillId } = await params

	// Validate candidate ID.
	const candidateIdError = validateCandidateId(candidateId)
	if (candidateIdError) return candidateIdError

	// Skill.
	const skill = resume.skills?.find((skill) => skill.skillId === skillId)

	// Validate skill.
	const skillError = validateResumeItem(skill, "skill", skillId, "skillId")
	if (skillError) return skillError

	return NextResponse.json({ skill }, { status: 200 })
}
