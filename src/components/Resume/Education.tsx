// Dependencies.
import { resume } from "@/data/resume"

// Component.
export default function Education() {
	// Education.
	const education = resume.education ?? []

	// Render.
	return (
		<section className="mx-auto flex max-w-4xl flex-col justify-center text-center">
			<h3 className="font-bold text-xl uppercase">Education</h3>

			<section className="space-y-2 text-sm">
				{education?.map((credential) => (
					<ul className="list-disc text-left" key={credential.credentialId}>
						<li className="font-extralight text-sm">
							{credential.credential} | {credential.institution}
						</li>
					</ul>
				))}
			</section>
		</section>
	)
}
