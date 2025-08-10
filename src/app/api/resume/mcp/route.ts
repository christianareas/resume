// Dependencies.
import { createMcpHandler } from "mcp-handler"
import { resume } from "@/data/resume"

// MCP server.
const mcpServer = createMcpHandler(
	(server) => {
		// Candidate, experience, skill sets, and education.
		const { candidate, experience, skillSets, education } = resume

		//
		const resourcesAndTools = [
			// Resume.
			{
				title: "Resume",
				name: "resume",
				description:
					"The candidate’s resume, including their who, contact details, experience, skill sets, and education.",
				uri: `resume://${candidate?.candidateId}`,
				get: () => resume,
			},

			// Candidate.
			{
				title: "Candidate",
				name: "candidate",
				description:
					"The candidate’s details, including first and last name, email, phone number, LinkedIn, and GitHub.",
				uri: `resume://${candidate?.candidateId}/candidate`,
				get: () => candidate,
			},

			// Experience.
			{
				title: "Experience",
				name: "experience",
				description: "The candidate’s experience, including....",
				uri: `resume://${candidate?.candidateId}/experience`,
				get: () => experience,
			},

			// Skill Sets.
			{
				title: "Skill Sets",
				name: "skillSets",
				description: "The candidate’s skill sets, including....",
				uri: `resume://${candidate?.candidateId}/skillSets`,
				get: () => skillSets,
			},

			// Education.
			{
				title: "Education",
				name: "education",
				description: "The candidate’s education, including....",
				uri: `resume://${candidate?.candidateId}/education`,
				get: () => education,
			},
		]

		for (const resourceAndTool of resourcesAndTools) {
			// Resources.
			server.resource(
				resourceAndTool.name,
				resourceAndTool.uri,
				{
					title: resourceAndTool.title,
					description: resourceAndTool.description,
					mimeType: "application/json",
				},
				async (uri) => ({
					contents: [
						{
							uri: uri.href,
							text: JSON.stringify(resourceAndTool.get(), null, 2),
							mimeType: "application/json",
						},
					],
				}),
			)

			// Tools.
			server.tool(
				resourceAndTool.name,
				resourceAndTool.description,
				{},
				{
					title: resourceAndTool.title,
					idempotentHint: true,
				},
				async () => ({
					content: [
						{
							type: "text",
							text: JSON.stringify(resourceAndTool.get(), null, 2),
						},
					],
				}),
			)
		}
	},
	{},
	{
		basePath: "/api/resume",
		streamableHttpEndpoint: "/mcp",
	},
)

export { mcpServer as GET, mcpServer as POST }
