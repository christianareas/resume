// Dependencies.
import { Who } from "./resume/Who"
import { Experience } from "./resume/Experience"
import { Skills } from "./resume/Skills"
import { Education } from "./resume/Education"

// Resume component.
export const Resume = () => {
	return (
		<div className="p-4">
			<Who />
			<Experience />
			<Skills />
			<Education />
		</div>
	)
}
