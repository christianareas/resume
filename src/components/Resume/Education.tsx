// Dependencies.
import { resume } from "@/data/resume"

// Component.
export default function Education() {
	// Education.
	const education = resume.education ?? []

	// Render.
	return (
		<section className="text-center">
			<h3 className="font-bold text-xl uppercase">Education</h3>

			<section className="space-y-2 text-sm">
				{education?.map((credential) => (
					<ul key={credential.credentialId}>
						<li className="font-thin text-sm">
							{credential.credential} | {credential.institution}
						</li>
					</ul>
				))}
			</section>
		</section>
	)
}
