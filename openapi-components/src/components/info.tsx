// Type definition.
type ApiInfoProps = {
	title: string
	description: string
	contact: {
		name: string
		email: string
	}
	license: {
		name: string
		identifier: string
	}
	version: string
}

// Component.
const ApiInfo: React.FC<ApiInfoProps> = ({
	title,
	description,
	contact,
	license,
	version,
}) => (
	<div>
		<h1>{title}</h1>
		<p>{description}</p>
		<p>
			Contact: {contact.name} ({contact.email})
		</p>
		<p>
			License: {license.name} ({license.identifier})
		</p>
		<p>Version: {version}</p>
	</div>
)

export default ApiInfo
