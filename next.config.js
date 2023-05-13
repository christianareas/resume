// Next.
/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

// Markdoc.
const withMarkdoc = require("@markdoc/next.js")

module.exports = withMarkdoc({ schemaPath: "./pages/docs/schema" })({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"]
})
