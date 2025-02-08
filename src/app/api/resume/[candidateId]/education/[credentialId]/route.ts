// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"

// GET request.
export async function GET(
	request: NextRequest,
	{
		params,
	}: { params: Promise<{ candidateId: string; credentialId: string }> },
) {
	// Candidate and credential IDs.
	const { candidateId, credentialId } = await params

	// If there's no candidateId match, return a 404 error.
	if (resume.candidate.candidateId !== candidateId) {
		return NextResponse.json(
			{
				error: `Couldn’t find the candidate by the candidateId (${candidateId}).`,
			},
			{ status: 404 },
		)
	}

	// Credential.
	const credential = resume.education.find(
		(credential) => credential.credentialId === credentialId,
	)

	// If there's no credentialId match, return a 404 error.
	if (!credential) {
		return NextResponse.json(
			{
				error: `Couldn’t find the credential by the credentialId (${credentialId}).`,
			},
			{ status: 404 },
		)
	}

	return NextResponse.json({ credential }, { status: 200 })
}
