//
export default function isVercel() {
	const vercelEnvironment = process.env.VERCEL_ENV
	console.log(vercelEnvironment) // **

	let vercel = false
	if (vercelEnvironment !== undefined) {
		vercel = true
	}

	return vercel
}
