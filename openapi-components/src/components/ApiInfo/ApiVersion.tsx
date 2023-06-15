// Version component’s type definition.
type ApiVersionProps = {
	version: string
}

// Version component.
const ApiVersion: React.FC<ApiVersionProps> = ({ version }) => (
	<p>Version: {version}</p>
)

export default ApiVersion
