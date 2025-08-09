// Dependencies.
import { createMcpHandler } from "mcp-handler"
import { resume } from "@/data/resume"

// MCP server.
const mcpServer = createMcpHandler((server) => {
	// Candidate, experience, skill sets, and education.
	const { candidate, experience, skillSets, education } = resume

	// Resume.
	server.resource(
		"resume",
		`resume://${candidate?.candidateId}`,
		{
			title: "Resume",
			description:
				"The candidate’s resume, including their who, contact details, experience, skill sets, and education.",
			mimeType: "application/json",
		},
		async (uri) => ({
			contents: [
				{
					uri: uri.href,
					text: JSON.stringify(resume, null, 2),
					mimeType: "application/json",
				},
			],
		}),
	)

	// Candidate.
	server.resource(
		"candidate",
		`resume://${candidate?.candidateId}/candidate`,
		{
			title: "Candidate",
			description:
				"The candidate’s details, including first and last name, email, phone number, LinkedIn, and GitHub.",
			mimeType: "application/json",
		},
		async (uri) => ({
			contents: [
				{
					uri: uri.href,
					text: JSON.stringify(candidate, null, 2),
					mimeType: "application/json",
				},
			],
		}),
	)

	// Experience
	server.resource(
		"experience",
		`resume://${candidate?.candidateId}/experience`,
		{
			title: "Experience",
			description: "The candidate’s experience, including....",
			mimeType: "application/json",
		},
		async (uri) => ({
			contents: [
				{
					uri: uri.href,
					text: JSON.stringify(experience, null, 2),
					mimeType: "application/json",
				},
			],
		}),
	)

	// Skill sets.
	server.resource(
		"skillSets",
		`resume://${candidate?.candidateId}/skillSets`,
		{
			title: "Skill Sets",
			description: "The candidate’s skill sets, including....",
			mimeType: "application/json",
		},
		async (uri) => ({
			contents: [
				{
					uri: uri.href,
					text: JSON.stringify(skillSets, null, 2),
					mimeType: "application/json",
				},
			],
		}),
	)

	// Education
	server.resource(
		"education",
		`resume://${candidate?.candidateId}/education`,
		{
			title: "Education",
			description: "The candidate’s education, including....",
			mimeType: "application/json",
		},
		async (uri) => ({
			contents: [
				{
					uri: uri.href,
					text: JSON.stringify(education, null, 2),
					mimeType: "application/json",
				},
			],
		}),
	)
})

export { mcpServer as GET, mcpServer as POST }
