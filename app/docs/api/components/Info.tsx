// Dependencies.
import { useOpenApiData, Oas_3_1_0_Type } from "openapi-hook"
import parseAndRenderMarkdown from "../utils/parseAndRenderMarkdown"

// Component.
export default function Info() {
	// Get the OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()

	// If null, return a loading message.
	if (openApiData === null) return <span>Loading…</span>

	// Destructure the OpenAPI data.
	const {
		title,
		version,
		summary,
		description,
		contact,
		license,
	} = openApiData.info

	// Return the component.
	return (
		<section>
			<h1 className="text-3xl">
				{title} <span className="text-xs font-extralight pb-2">({version})</span>
			</h1>
			
			<h2 className="text-base italic pb-2">
				{summary}
			</h2>

			<section className="text-sm font-extralight pb-3 mb-3 border-b border-gray-400">
				{description ? parseAndRenderMarkdown(description) : null}
			</section>

			<section className="text-xs font-extralight pb-2">
				<span className="font-normal">Contact:</span> {contact?.name} (<a className="text-blue-500" href={`mailto:${contact?.email}`}>{contact?.email}</a>)
			</section>

			<section className="text-xs font-extralight pb-2">
				<span className="font-normal">License:</span> {license?.name} ({license?.identifier})
			</section>
		</section>
	)
}
