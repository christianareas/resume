// Dependencies.
import Link from "next/link"
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu"
import { resume } from "@/data/resume"
import { formatUrl } from "@/util/candidate"

// Component.
export default function Candidate() {
	// Candidate.
	const candidate = resume.candidate

	// Render.
	return (
		<section className="mx-auto flex max-w-5xl flex-col justify-center space-y-5 lg:flex-row lg:items-center lg:justify-between lg:space-x-20 lg:space-y-0">
			<section className="text-center lg:text-left">
				{/*
					*******************
					First and last name
					*******************
				*/}
				<h1 className="font-lexend-zetta font-medium text-4xl uppercase lg:text-5xl">
					{candidate?.firstName} {candidate?.lastName}
				</h1>

				{/*
					***
					Who
					***
				*/}
				<h2 className="font-extralight text-sm italic">{candidate?.who}</h2>
			</section>

			<section className="text-center text-sm lg:text-right">
				<ul className="space-y-1">
					{/*
						*****
						Email
						*****
					*/}
					{candidate?.email && (
						<li className="text-blue-400">
							<Link
								className="flex justify-center gap-2 lg:justify-end"
								href={`mailto:${candidate.email}`}
							>
								<LuMail size={16} className="mt-0.5" strokeWidth={1.5} />
								{candidate.email}
							</Link>
						</li>
					)}

					{/*
						********
						LinkedIn
						********
					*/}
					{candidate?.linkedIn && (
						<li className="text-blue-400">
							<Link
								className="flex justify-center gap-2 lg:justify-end"
								href={candidate.linkedIn}
							>
								<LuLinkedin size={16} className="mt-0.5" strokeWidth={1.5} />
								{formatUrl(candidate.linkedIn)}
							</Link>
						</li>
					)}

					{/*
						******
						GitHub
						******
					*/}
					{candidate?.gitHub && (
						<li className="text-blue-400">
							<Link
								className="flex justify-center gap-2 lg:justify-end"
								href={candidate.gitHub}
							>
								<LuGithub size={16} className="mt-0.5" strokeWidth={1.5} />
								{formatUrl(candidate.gitHub)}
							</Link>
						</li>
					)}
				</ul>
			</section>
		</section>
	)
}
