// License component’s type definition.
type ApiLicenseProps = {
	license: {
		name: string
		identifier: string
	}
}

// License component.
const ApiLicense: React.FC<ApiLicenseProps> = ({ license }) => (
	<p>
		License: {license.name} ({license.identifier})
	</p>
)

export default ApiLicense