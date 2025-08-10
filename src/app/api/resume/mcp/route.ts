// Dependencies.
import { createMcpHandler } from "mcp-handler"
import { resume } from "@/data/resume"

// MCP server.
const mcpServer = createMcpHandler(
	(server) => {
		// Candidate.
		const { candidate } = resume

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
		]

		// Resources and tools.
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
				{},
				{
					title: resourceAndTool.title,
					description: resourceAndTool.description,
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

			// Prompts.
			server.prompt(
				"anthropic_fit",
				"Ask if Christian’s a good fit for Anthropic’s “Technical Documentation & Content Engineer, Model Context Protocol” role.",
				{},
				() => ({
					messages: [
						{
							role: "user",
							content: {
								type: "text",
								text: `Is Christian a good fit for Anthropic’s “Technical Documentation & Content Engineer, Model Context Protocol” role (https://job-boards.greenhouse.io/anthropic/jobs/4829365008)?`,
							},
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
