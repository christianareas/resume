//
export default function isVercel() {
	const vercelEnvironment = process.env.VERCEL_ENV

	let vercel = false
	if (vercelEnvironment !== undefined) {
		vercel = true
	}

	return vercel
}
