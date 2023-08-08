// Child components.
import Info from "./Info"
import Servers from "./Servers"
import Paths from "./Paths"

// Component.
export default function OpenApiDoc() {
	// TSX.
	return (
		<div className="p-5">
			<Info />
			<Servers />
			<Paths />
		</div>
	)
}
