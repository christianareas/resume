// Dependencies.
import { useOpenApiData, Oas_3_1_0_Type } from "openapi-components"

// Child components.
import Info from "./Info"
import Servers from "./Servers"

// Component.
export default function OpenApiDoc() {
	// OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()

	// If null, return a loading message.
	if (openApiData === null) return <span>Loading…</span>

	// TSX.
	return (
		<div className="p-5">
			<Info />
			<Servers />
		</div>
	)
}
