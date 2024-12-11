import DataTable from "./DataTable"
import WeaveModal from "./WeaveModal"

async function Page() {
	const res = await fetch(
		"http://localhost:3000/api/v1/weaveSettings/getWeaveSettingsData",
		{ method: "GET" }
	)
	const data = await res.json()

	// console.log(data.data)

	return (
		<div>
			<WeaveModal invocationType="new" />
			<DataTable data={data.data} />
		</div>
	)
}

export default Page
