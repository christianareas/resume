// Dependencies.
import { resume } from "@/data/resume"

// Component.
export default function Experience() {
	// Experience.
	const experience = resume.experience

	// Render.
	return (
		<section className="text-center">
			<h3 className="font-bold text-xl uppercase">Experience</h3>
			<section className="space-y-5">
				{experience?.map((role) => (
					<section key={role.roleId}>
						<h4 className="font-bold text-xl">{role.company}</h4>
						<h5 className="font-medium">{role.role}</h5>
						<h6 className="text-sm italic">
							{role.startDate} – {role.endDate ? role.endDate : "Present"}
						</h6>
					</section>
				))}
			</section>
		</section>
	)
}
