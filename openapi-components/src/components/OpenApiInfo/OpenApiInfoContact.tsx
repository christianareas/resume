// OpenAPI Info › Contact component’s type definition.
type OpenApiInfoContactProps = {
	contact: {
		name: string
		email: string
	}
}

// OpenAPI Info › Contact component.
const OpenApiInfoContact: React.FC<OpenApiInfoContactProps> = ({ contact }) => (
	<p>
		Contact: {contact.name} ({contact.email})
	</p>
)

export default OpenApiInfoContact