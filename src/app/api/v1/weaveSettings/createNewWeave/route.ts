import { dataArray } from "../sampleData"

async function POST(req: Request) {
	try {
		const incomingData = await req.json()

		if (!incomingData) return new Response("No data")

		console.log(incomingData.data)

		let db = dataArray

		const newItem = {
			id: dataArray.length + 1,
			weaveName: incomingData.data.weaveName,
			warpWeftWidthShrinkageType: incomingData.data.warpWeftWidthShrinkageType,
			warpWeftWidthShrinkage: incomingData.data.warpWeftWidthShrinkage,
			additionalFabricShrinkageAllowance:
				incomingData.data.additionalFabricShrinkageAllowance,
		}

		db.push(newItem)

		return new Response(
			JSON.stringify({
				message: "New weave added successfully.",
				data: db,
			})
		)
	} catch (error) {
		return new Response(
			JSON.stringify({ message: "Oops, there was an error.", error })
		)
	}
}

export { POST }
