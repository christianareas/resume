// Dependencies.
import { resume } from "@/data/resume"

// Component.
export default function Education() {
	// Education.
	const education = resume.education
	console.log(education) // **

	// Render.
	return (
		<section className="text-center">
			<h3 className="font-bold text-xl uppercase">Education</h3>
		</section>
	)
}
