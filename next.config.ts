import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	async rewrites() {
		return [{ source: "/mcp", destination: "/api/mcp" }]
	},
}

export default nextConfig
