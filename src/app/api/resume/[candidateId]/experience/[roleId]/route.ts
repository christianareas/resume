// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"

// GET request.
export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ candidateId: string; roleId: string }> },
) {
	// Candidate and role IDs.
	const { candidateId, roleId } = await params

	// If there's no candidateId match, return a 404 error.
	if (resume.candidate.candidateId !== candidateId) {
		return NextResponse.json(
			{
				error: `Couldn’t find the candidate by the candidateId (${candidateId}).`,
			},
			{ status: 404 },
		)
	}

	// Role.
	const role = resume.experience.find((role) => role.roleId === roleId)

	// If there's no roleId match, return a 404 error.
	if (!role) {
		return NextResponse.json(
			{
				error: `Couldn’t find the role by the roleId (${roleId}).`,
			},
			{ status: 404 },
		)
	}

	return NextResponse.json({ role }, { status: 200 })
}
