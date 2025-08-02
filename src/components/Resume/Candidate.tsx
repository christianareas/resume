// Dependencies.
import Link from "next/link"
import { resume } from "@/data/resume"
import { formatPhoneNumber, formatUrl } from "@/util/candidate"

// Component.
export default function Candidate() {
	// Candidate.
	const candidate = resume.candidate

	// Render.
	return (
		<section className="flex flex-col justify-center space-y-5 lg:flex-row lg:items-center lg:space-x-20 lg:space-y-0">
			<section className="text-center lg:text-left">
				{/*
					*******************
					First and last name
					*******************
				*/}
				<h1 className="font-medium text-5xl uppercase">
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
				<ul>
					{/*
						*****
						Email
						*****
					*/}
					{candidate?.email && (
						<li className="text-blue-400">
							<Link href={`mailto:${candidate.email}`}>{candidate.email}</Link>
						</li>
					)}

					{/*
						************
						Phone number
						************
					*/}
					{candidate?.phoneNumber && (
						<li>
							{formatPhoneNumber(
								candidate.phoneCountryCode,
								candidate.phoneNumber,
							)}
						</li>
					)}

					{/*
						********
						LinkedIn
						********
					*/}
					{candidate?.linkedIn && (
						<li className="text-blue-400">
							<Link href={candidate.linkedIn}>
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
							<Link href={candidate.gitHub}>{formatUrl(candidate.gitHub)}</Link>
						</li>
					)}
				</ul>
			</section>
		</section>
	)
}
