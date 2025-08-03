// Dependencies.
import type { SkillSet } from "@/data/resume"
import { resume } from "@/data/resume"

// Component.
export default function SkillSets() {
	// Skill sets.
	const skillSets = (resume.skillSets ?? [])
		.map((skillSet) => ({
			...skillSet,
			skills: [...skillSet.skills].sort((a, b) => a.sortOrder - b.sortOrder),
		}))
		.sort((a, b) => a.sortOrder - b.sortOrder)

	// Skill set labels.
	const skillSetLabels: Record<SkillSet["skillSetType"], string> = {
		apps: "Apps",
		"command-line-tools": "Command-Line Tools",
		databases: "Databases",
		frameworks: "Frameworks",
		languages: "Languages",
		specifications: "Specifications",
	}

	// Render.
	return (
		<section className="text-center">
			<h3 className="font-bold text-xl uppercase">Skills</h3>

			<section className="space-y-2 text-sm">
				<ul className="list-disc text-left">
					{skillSets.map(({ skillSetId, skillSetType, skills }) => (
						<li key={skillSetId}>
							<span className="font-normal">
								{skillSetLabels[skillSetType] ?? skillSetType}
								{": "}
							</span>
							<span className="font-thin text-sm">
								{skills.map((skill) => skill.skill).join(" / ")}
							</span>
						</li>
					))}
				</ul>
			</section>
		</section>
	)
}
