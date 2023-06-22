// Dependencies.
import parseOpenApiFile from "openapi-components"
import { OpenApiInfoContactName } from "openapi-components"

// Test component.
export default function OpenAPIInfo() {
	// Parse the OpenAPI file and get the OpenAPI Info data.
	const pathToOpenApiFile = "./docs/spec/_versions/resume-api-0.1.1.yaml"
	const { openApiInfoData } = parseOpenApiFile(pathToOpenApiFile)
	console.log(openApiInfoData)
	
	// TSX.
	return (
		<div>
			{/* Getting the data directly. */}
			<h1 className="text-lg">OpenAPI Info › Contact › Name</h1>
			<p><span className="font-bold">Contact Name:</span> {openApiInfoData.contact.name}</p>
			
			{/* Getting the data through a component (work in progress). */}
			<OpenApiInfoContactName />
		</div>
	)
}
