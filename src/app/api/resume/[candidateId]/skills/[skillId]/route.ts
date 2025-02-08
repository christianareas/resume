// Dependencies.
import { type NextRequest, NextResponse } from "next/server"
import { resume } from "@/data/resume"

// GET request.
export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ candidateId: string; skillId: string }> },
) {
	// Candidate and skill IDs.
	const { candidateId, skillId } = await params

	// If there's no candidateId match, return a 404 error.
	if (resume.candidate.candidateId !== candidateId) {
		return NextResponse.json(
			{
				error: `Couldn’t find the candidate by the candidateId (${candidateId}).`,
			},
			{ status: 404 },
		)
	}

	// Skill.
	const skill = resume.skills.find((skill) => skill.skillId === skillId)

	// If there's no skillId match, return a 404 error.
	if (!skill) {
		return NextResponse.json(
			{
				error: `Couldn’t find the skill by the skillId (${skillId}).`,
			},
			{ status: 404 },
		)
	}

	return NextResponse.json({ skill }, { status: 200 })
}
