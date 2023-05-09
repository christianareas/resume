import { NextResponse } from "next/server"

// GET /api/candidate/{candidateId}/who
export async function GET(request: Request) {
	// Mock data.
	const who: Who = {
		userId: "1",
		whoId: "1",
		whoSummary: "A writer who loves language and technology. Honest, transparent, and easy to work with. Runs marathons and builds mechanical keyboards during off hours.",
	}
	
	// Return mock data.
	return NextResponse.json(who, { status: 200 })
}

// POST /api/who
export async function POST(request: Request) {
	const {
		userId,
		whoSummary,
	} = await request.json()

	if (!userId) {
		return new NextResponse("You must send a userId.", { status: 400 })
	}

	if (!whoSummary) {
		return new NextResponse("You must send a whoSummary.", { status: 400 })
	}

	const who: Who = {
		userId,
		whoId: "2",
		whoSummary,
	}

	return NextResponse.json(who, { status: 201 })
}

// PUT /api/who
export async function DELETE(request: Request) {
}

// DELETE /api/who
export async function PATCH(request: Request) {
}
