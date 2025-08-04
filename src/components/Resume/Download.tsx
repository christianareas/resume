"use client"

// Dependencies.
import { LuCloudDownload } from "react-icons/lu"
import { resume } from "@/data/resume"

// Component.
export default function Download() {
	// Candidate.
	const candidateId = resume.candidate?.candidateId

	// Download.
	const download = () => {
		if (!candidateId) return
		window.location.href = `/api/resume/${candidateId}/pdf`
	}

	// Render.
	return (
		<section id="download-button" className="flex justify-center">
			<button
				type="button"
				onClick={download}
				disabled={!candidateId}
				className="flex justify-center gap-2 rounded border-1 border-neutral-500 bg-neutral-200 px-4 py-2 text-neutral-950 transition hover:bg-neutral-50 disabled:opacity-50 dark:border-neutral-200 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-800"
			>
				<LuCloudDownload size={16} className="mt-1" strokeWidth={2} />
				Download
			</button>
		</section>
	)
}
