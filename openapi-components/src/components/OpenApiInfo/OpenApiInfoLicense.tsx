// OpenAPI Info › License component’s type definition.
type OpenApiInfoLicenseProps = {
	license: {
		name: string
		identifier: string
	}
}

// OpenAPI Info › License component.
const OpenApiInfoLicense: React.FC<OpenApiInfoLicenseProps> = ({ license }) => (
	<p>
		License: {license.name} ({license.identifier})
	</p>
)

export default OpenApiInfoLicense