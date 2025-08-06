import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	env: {
		VERCEL_ENV: process.env.VERCEL_ENV,
	},
}

export default nextConfig
