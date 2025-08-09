// Dependencies.
import { createMcpHandler } from "mcp-handler"
import { resume } from "@/data/resume"

// Candidate
const candidate = resume.candidate ?? {}

// MCP server.
const mcp = createMcpHandler((server) => {
	// Resource.
	server.resource(
		"candidate",
		"resume://candidate",
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
})

export { mcp as GET, mcp as POST }
