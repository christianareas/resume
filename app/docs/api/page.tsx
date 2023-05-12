"use client"

// Stoplight Elements
import { API } from "@stoplight/elements"
// import "@stoplight/elements/styles.min.css"

export default function ApiReference() {
	return (
		<div className="App">
			<API
				basePath="/docs/api"
				apiDescriptionUrl="https://raw.githubusercontent.com/areas-apis/resume-api/main/docs/spec/_versions/resume-api-0.1.0.yaml"
			/>
		</div>
	)
}
