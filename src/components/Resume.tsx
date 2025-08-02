// Dependencies.
import Candidate from "@/components/Resume/Candidate"
import Education from "@/components/Resume/Education"
import Experience from "@/components/Resume/Experience"
import SkillSets from "@/components/Resume/SkillSets"

// Component.
export default function Resume() {
	// Render.
	return (
		<main className="space-y-10 bg-neutral-50 p-10 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
			<Candidate />
			<Experience />
			<SkillSets />
			<Education />
		</main>
	)
}
