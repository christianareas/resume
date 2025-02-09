// Dependencies.
import { NextResponse } from "next/server"
import {
	resume,
	type Candidate,
	type Role,
	type Skill,
	type Credential,
} from "@/data/resume"

// Validate the candidate ID.
export function validateCandidateId(candidateId: string): NextResponse | null {
	// If there's no candidateId match, return a 404 error.
	if (resume.candidate?.candidateId !== candidateId) {
		return NextResponse.json(
			{
				error: `Couldn’t find the candidate’s resume by the candidateId (${candidateId}).`,
			},
			{ status: 404 },
		)
	}

	// Otherwise, return null.
	return null
}

// Validate the candidate, experience, skills, or education section.
export function validateCandidateExperienceSkillsOrEducation(
	resumeSection: Candidate | Role[] | Skill[] | Credential[] | undefined,
	resumeSectionName: "candidate" | "experience" | "skills" | "education",
): NextResponse | null {
	// If there's no resume section, return a 404 error.
	if (!resumeSection) {
		return NextResponse.json(
			{
				error: `Couldn’t find the candidate’s ${resumeSectionName}.`,
			},
			{ status: 404 },
		)
	}

	// Otherwise, return null.
	return null
}

// Validate the role, skill, or credential.
export function validateRoleSkillOrCredential(
	resumeItem: Role | Skill | Credential | undefined,
	resumeItemName: "role" | "skill" | "credential",
	resumeItemId: string | undefined,
	resumeItemIdName: "roleId" | "skillId" | "credentialId",
): NextResponse | null {
	// If there's no roleId match, return a 404 error.
	if (!resumeItem) {
		return NextResponse.json(
			{
				error: `Couldn’t find the ${resumeItemName} by the ${resumeItemIdName} (${resumeItemId}).`,
			},
			{ status: 404 },
		)
	}

	// Otherwise, return null.
	return null
}
