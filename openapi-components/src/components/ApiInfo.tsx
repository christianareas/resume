// Info component’s children.
import ApiTitle from "./ApiInfo/ApiTitle"
import ApiSummary from "./ApiInfo/ApiSummary"
import ApiDescription from "./ApiInfo/ApiDescription"
import ApiContact from "./ApiInfo/ApiContact"
import ApiLicense from "./ApiInfo/ApiLicense"
import ApiVersion from "./ApiInfo/ApiVersion"

// Info object’s type definition.
type ApiInfoProps = {
	title: string
	summary: string
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

// Info component.
const ApiInfo: React.FC<ApiInfoProps> = ({
	title,
	summary,
	description,
	contact,
	license,
	version,
}) => (
	<div>
		<ApiTitle title={title} />
		<ApiSummary summary={summary} />
		<ApiDescription description={description} />
		<ApiContact contact={contact} />
		<ApiLicense license={license} />
		<ApiVersion version={version} />
	</div>
)

export default ApiInfo
