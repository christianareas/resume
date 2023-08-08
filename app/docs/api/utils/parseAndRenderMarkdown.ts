// Dependencies.
import { ReactNode } from "react"
import { Parser } from "commonmark"
import ReactRenderer from "commonmark-react-renderer"

// Parse and render Markdown.
export default function parseAndRenderMarkdown(
	markdown: string,
): ReactNode {
	// Instantiate the Markdown parser and renderer.
	const markdownParser = new Parser()
	const markdownRenderer = new ReactRenderer()

	// Parse and render the Markdown.
	const parsedMarkdown = markdownParser.parse(markdown)
	const renderedMarkdown = markdownRenderer.render(parsedMarkdown)

	return renderedMarkdown
}
