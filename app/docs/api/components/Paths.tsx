// Dependencies.
import { useOpenApiData, Oas_3_1_0_Type } from "openapi-hook"

// Component.
export default function Paths() {
	// Get the OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()

	// If null, return a loading message.
	if (openApiData === null) return <span>Loading…</span>
	
	// TSX.
	return (
		<section className="p-2 mt-2 border rounded-lg">
			<h2 className="text-2xl font-extralight pb-2">Paths</h2>

			<section className="text-sm font-extralight">
				{Object.entries(openApiData.paths).map(([path, pathObject]) => {
					return (
						<section key={path} className="text-xs font-extralight pb-2">
							<span className="font-normal">{path}:</span> {pathObject.summary}
						</section>
					)
				})}
			</section>
		</section>
	)
}
