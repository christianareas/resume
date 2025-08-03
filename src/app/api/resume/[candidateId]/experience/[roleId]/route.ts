// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"
import { validateCandidateId, validateResumeItem } from "@/lib/api/resume"

// GET request.
export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ candidateId: string; roleId: string }> },
) {
	// Candidate and role IDs.
	const { candidateId, roleId } = await params

	// Validate candidate ID.
	const candidateIdError = validateCandidateId(candidateId)
	if (candidateIdError) return candidateIdError

	// Role.
	const role = resume.experience?.find((role) => role.roleId === roleId)

	// Validate role.
	const roleError = validateResumeItem(role, "role", roleId, "roleId")
	if (roleError) return roleError

	return NextResponse.json({ role }, { status: 200 })
}
