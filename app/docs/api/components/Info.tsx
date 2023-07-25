// Dependencies.
import { OpenApiInfo } from "openapi-components"

// Component.
export default function Info() {
	// TSX.
	return (
		<OpenApiInfo>
			<OpenApiInfo.Title className="text-3xl" />
			<OpenApiInfo.Summary className="text-base italic pb-2" />

			<OpenApiInfo.Description className="text-sm font-extralight pb-3 mb-3 border-b border-gray-400" />

			<OpenApiInfo.Contact className="text-xs font-extralight pb-2">
				<span className="font-normal">Contact:</span> <OpenApiInfo.Contact.Name /> (<OpenApiInfo.Contact.Email className="text-blue-500" />)
			</OpenApiInfo.Contact>

			<OpenApiInfo.License className="text-xs font-extralight pb-2">
				<span className="font-normal">License:</span> <OpenApiInfo.License.Name /> (<OpenApiInfo.License.Identifier />)
			</OpenApiInfo.License>

			<p className="text-xs font-extralight pb-2">
				<span className="font-normal">Version:</span> <OpenApiInfo.Version htmlWrapperElement="span" className="text-xs font-extralight pb-2" />
			</p>
		</OpenApiInfo>
	)
}
