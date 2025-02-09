// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"
import {
	validateCandidateId,
	validateRoleSkillOrCredential,
} from "@/lib/api/resume"

// GET request.
export async function GET(
	request: NextRequest,
	{
		params,
	}: { params: Promise<{ candidateId: string; credentialId: string }> },
) {
	// Candidate and credential IDs.
	const { candidateId, credentialId } = await params

	// Validate candidate ID.
	const candidateIdError = validateCandidateId(candidateId)
	if (candidateIdError) return candidateIdError

	// Credential.
	const credential = resume.education?.find(
		(credential) => credential.credentialId === credentialId,
	)

	// Validate credential.
	const credentialError = validateRoleSkillOrCredential(
		credential,
		"credential",
		credentialId,
		"credentialId",
	)
	if (credentialError) return credentialError

	return NextResponse.json({ credential }, { status: 200 })
}
