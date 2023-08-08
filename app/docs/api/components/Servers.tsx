// Dependencies.
import { useOpenApiData, Oas_3_1_0_Type } from "openapi-hook"

// Component.
export default function Servers() {
	// OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()

	// If null, return a loading message.
	if (openApiData === null) return <span>Loading…</span>
	
	// TSX.
	return (
		<></>
	)
}
