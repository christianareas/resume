// Description component’s type definition.
type ApiDescriptionProps = {
	description: string
}

// Description component.
const ApiDescription: React.FC<ApiDescriptionProps> = ({ description }) => (
	<p>{description}</p>
)

export default ApiDescription
