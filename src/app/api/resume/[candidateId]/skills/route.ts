// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"
import {
	validateCandidateId,
	validateCandidateExperienceSkillsOrEducation,
} from "@/lib/api/resume"

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
	const skills = resume.skills

	// Validate skills.
	const skillsError = validateCandidateExperienceSkillsOrEducation(
		skills,
		"skills",
	)
	if (skillsError) return skillsError

	return NextResponse.json({ skills }, { status: 200 })
}
