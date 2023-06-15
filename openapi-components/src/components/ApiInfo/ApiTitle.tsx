// Title component’s type definition.
type ApiTitleProps = {
	title: string
}

// Title component.
const ApiTitle: React.FC<ApiTitleProps> = ({ title }) => (
	<h1>{title}</h1>
)

export default ApiTitle
