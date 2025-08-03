// Dependencies.
import { resume } from "@/data/resume"

// Component.
export default function Experience() {
	// Experience.
	const experience = (resume.experience ?? [])
		.slice()
		.sort((a, b) => b.startDate.localeCompare(a.startDate))

	// Render.
	return (
		<section className="mx-auto flex max-w-4xl flex-col justify-center text-center">
			<h3 className="font-bold text-xl uppercase">Experience</h3>

			<section className="space-y-5">
				{experience.map((role, index) => {
					const accomplishments = (role.accomplishments ?? [])
						.slice()
						.sort((a, b) => a.sortOrder - b.sortOrder)

					const previousRole = index > 0 ? experience[index - 1] : null
					const displayCompany =
						!previousRole || previousRole.company !== role.company

					return (
						<section key={role.roleId}>
							{/*
								********
								Company
								********
							*/}
							{displayCompany && (
								<h4 className="font-bold text-xl">{role.company}</h4>
							)}

							{/*
								****
								Role
								****
							*/}
							{role.role && (
								<h5 className="font-semibold text-base">{role.role}</h5>
							)}

							{/*
								*****
								Dates
								*****
							*/}
							<h6 className="font-light text-sm italic">
								{role.startDate} – {role.endDate || "Present"}
							</h6>

							{/*
								***************
								Accomplishments
								***************
							*/}
							{accomplishments.length > 0 && (
								<ul className="list-disc space-y-2 text-left font-extralight text-sm">
									{accomplishments.map((ac) => (
										<li key={ac.accomplishmentId}>{ac.accomplishment}</li>
									))}
								</ul>
							)}
						</section>
					)
				})}
			</section>
		</section>
	)
}
