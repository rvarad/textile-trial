import { dataArray } from "../sampleData"

export async function PUT(req: Request) {
	try {
		const incomingData = await req.json()

		if (!incomingData) return new Response("No data")

		console.log(incomingData.data)

		let db = dataArray

		const updatedItem = {
			id: incomingData.data.id,
			weaveName: incomingData.data.weaveName,
			warpWeftWidthShrinkageType: incomingData.data.warpWeftWidthShrinkageType,
			warpWeftWidthShrinkage: incomingData.data.warpWeftWidthShrinkage,
			additionalFabricShrinkageAllowance:
				incomingData.data.additionalFabricShrinkageAllowance,
		}

		db[incomingData.data.id - 1] = updatedItem

		return new Response(
			JSON.stringify({
				message: "Weave updated successfully.",
				data: db,
			})
		)
	} catch (error) {
		return new Response(
			JSON.stringify({ message: "Oops, there was an error.", error })
		)
	}
}
