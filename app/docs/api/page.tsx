"use client"

// Dependencies.
import { OpenApiDataProvider } from "openapi-hook"

// Child components.
import OpenApiDoc from "./components/OpenApiDoc"

// Component.
export default function DocsApiPage() {
	// OpenAPI file.
	const urlToOpenApiFile = "https://raw.githubusercontent.com/christianareas/resume/main/docs/spec/_versions/resume-api-0.1.1.yaml"

	// TSX.
	return (
		<OpenApiDataProvider urlToOpenApiFile={urlToOpenApiFile}>
			<OpenApiDoc />
		</OpenApiDataProvider>
	)
}
