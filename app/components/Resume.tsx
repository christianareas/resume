// Dependencies.
import { Who } from "./Who"
import { Experience } from "./Experience"
import { Skills } from "./Skills"
import { Education } from "./Education"

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
