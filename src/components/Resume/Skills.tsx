// Dependencies.
import { resume } from "@/data/resume"

// Component.
export default function Skills() {
	// Skills.
	const skills = resume.skills
	console.log(skills) // **

	// Render.
	return (
		<section className="text-center">
			<h3 className="font-bold text-xl uppercase">Skills</h3>
		</section>
	)
}
