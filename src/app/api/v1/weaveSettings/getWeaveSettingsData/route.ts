import { dataArray } from "../sampleData"

async function GET() {
	const res = dataArray

	return Response.json({ data: res })
}

export { GET }
