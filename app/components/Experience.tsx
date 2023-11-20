 // Experience component.
export const Experience = () => {
	return (
		<section className="mb-4">
			<h2 className="uppercase text-2xl mb-3 text-center">
				Experience
			</h2>

			<article className="mb-4 text-center">
				<h3 className="text-xl mb-2">
					Sabbatical
				</h3>
				<p className="font-thin text-sm mb-4">
					2022 to 2023
				</p>
				<p className="font-thin text-sm">
					Traveled and learned to code.
				</p>
			</article>

			<article className="mb-4">
				<h3 className="text-xl mb-2 text-center">
					Apple
				</h3>
				<p className="font-extralight text-sm text-center">
					Senior Technical Writer, Apple Pay
				</p>
				<p className="font-thin text-sm mb-4 text-center">
					2019 to 2022
				</p>
				<ul className="font-thin text-sm space-y-2 text-justify">
					<li className="grid grid-cols-[min-content,1fr] gap-2 items-start">
						<span>
							•
						</span>	
						<span>
							Functioned as Apple Pay’s sole technical writer.
						</span>
					</li>
					<li className="grid grid-cols-[min-content,1fr] gap-2 items-start">
						<span>
							•
						</span>	
						<span>
							Wrote several docs from scratch, including one that explains the system behind Apple Pay Later.
						</span>
					</li>
					<li className="grid grid-cols-[min-content,1fr] gap-2 items-start">
						<span>
							•
						</span>	
						<span>
							Worked with engineering managers and engineers across Apple Pay to gather requirements for a new docs-as-code solution to centralize Apple Pay’s API specifications.
						</span>
					</li>
					<li className="grid grid-cols-[min-content,1fr] gap-2 items-start">
						<span>
							•
						</span>	
						<span>
							Designed the docs-as-code solution. It sourced Markdown and OpenAPI files from multiple GitHub repos, and used web hooks and a CI/CD service to publish the latest updates to teams across Apple. The solution supported fine-grained permissions, and gave users an easy way to create text-based message sequence diagrams (with mermaid.js).
						</span>
					</li>
					<li className="grid grid-cols-[min-content,1fr] gap-2 items-start">
						<span>
							•
						</span>	
						<span>
							Interviewed nearly 50 candidates to hire Apple Pay’s second technical writer.
						</span>
					</li>
				</ul>
			</article>
		</section>
	)
}
