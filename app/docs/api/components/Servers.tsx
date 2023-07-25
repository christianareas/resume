// Dependencies.
import { OpenApiServers } from "openapi-components"

// Component.
export default function Servers() {
	// TSX.
	return (
		<OpenApiServers className="Servers">
			<OpenApiServers.Server className="Server">
				<OpenApiServers.Server.Url className="URL" />
				<OpenApiServers.Server.Description className="Description" />
			</OpenApiServers.Server>
		</OpenApiServers>
	)
}
