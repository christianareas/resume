"use client"

// Dependencies.
import { LuCloudDownload } from "react-icons/lu"

// Component.
export default function Download() {
	// PDF.
	const pdf = "/resume/Christian%20Areas.pdf"

	// Render.
	return (
		<section id="download-button" className="flex justify-center">
			<a href={pdf} download="Christian Areas.pdf">
				<button
					type="button"
					className="flex justify-center gap-2 rounded border-1 border-neutral-500 bg-neutral-200 px-4 py-2 text-neutral-950 transition hover:bg-neutral-50 disabled:opacity-50 dark:border-neutral-200 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-950"
				>
					<LuCloudDownload size={16} className="mt-1" strokeWidth={2} />
					Download
				</button>
			</a>
		</section>
	)
}
