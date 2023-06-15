// Contact component’s type definition.
type ApiContactProps = {
	contact: {
		name: string
		email: string
	}
}

// Contact component.
const ApiContact: React.FC<ApiContactProps> = ({ contact }) => (
	<p>
		Contact: {contact.name} ({contact.email})
	</p>
)

export default ApiContact