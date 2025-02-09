// Format a phone number.
export function formatPhoneNumber(
	phoneCountryCode: number,
	phoneNumber: number,
) {
	if (phoneCountryCode === 1) {
		const areaCode = phoneNumber.toString().slice(0, 3)
		const exchangeCode = phoneNumber.toString().slice(3, 6)
		const lineNumber = phoneNumber.toString().slice(6)

		return `(${areaCode}) ${exchangeCode}-${lineNumber}`
	}

	return phoneNumber
}

// Format a URL.
export function formatUrl(url: string) {
	try {
		const parsedUrl = new URL(url)
		const hostname = parsedUrl.hostname.replace(/^www\./, "")
		let pathname = parsedUrl.pathname
		if (pathname.endsWith("/")) {
			pathname = pathname.slice(0, -1)
		}

		return hostname + pathname
	} catch (error) {
		return url
	}
}
