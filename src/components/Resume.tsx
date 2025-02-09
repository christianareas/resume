// Dependencies.
import Candidate from "@/components/Resume/Candidate"
import Experience from "@/components/Resume/Experience"
import Skills from "@/components/Resume/Skills"
import Education from "@/components/Resume/Education"

// Component.
export default function Resume() {
	// Render.
	return (
		<main className="space-y-10 bg-neutral-50 p-10 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
			<Candidate />
			<Experience />
			<Skills />
			<Education />
		</main>
	)
}
