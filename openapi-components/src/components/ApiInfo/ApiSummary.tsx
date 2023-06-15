// Summary component’s type definition.
type ApiSummaryProps = {
	summary: string
}

// Summary component.
const ApiSummary: React.FC<ApiSummaryProps> = ({ summary }) => (
	<h2>{summary}</h2>
)

export default ApiSummary
