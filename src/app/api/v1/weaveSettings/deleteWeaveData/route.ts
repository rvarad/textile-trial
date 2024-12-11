import { dataArray } from "../sampleData"

async function DELETE(req: Request) {
	const { searchParams } = new URL(req.url)
	const id = searchParams.get("id")

	try {
		let db = dataArray

		if (!id) {
			return new Response(
				JSON.stringify({ error: "Error, noo such Id exists" })
			)
		}

		console.log(id)

		db = db.filter((item) => item.id === parseInt(id))

		return new Response(
			JSON.stringify({
				message: "Weave deletion successful",
				data: db,
			})
		)
	} catch (error) {
		return new Response(
			JSON.stringify({ message: "Oops, there was an error", error })
		)
	}
}

export { DELETE }
