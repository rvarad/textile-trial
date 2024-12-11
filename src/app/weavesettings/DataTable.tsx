"use client"

import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import React, { useEffect, useState } from "react"
import WeaveModal from "./WeaveModal"

const columns: readonly string[] = [
	"Weave Name",
	"Warp Weft Width Shrinkage",
	"Additional Fabric Shrinkage Allowance in inches",
	"",
]

async function deleteWeave(id: number) {
	try {
		const res = await fetch(
			`http://localhost:3000/api/v1/weaveSettings/deleteWeaveData?id=${id}`,
			{ method: "DELETE" }
		)

		const data = await res.json()

		console.log(data)
	} catch (error) {
		console.log(error)
	}
}

function DataTable({ data }) {
	return (
		<div>
			<div>search bar</div>
			<div>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column}>{column}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => {
							return (
								<TableRow key={row.id}>
									<TableCell>{row.weaveName}</TableCell>
									<TableCell>
										{row.warpWeftWidthShrinkageType === "Custom"
											? row.warpWeftWidthShrinkage
											: "Use Default"}
									</TableCell>
									<TableCell>
										{row.additionalFabricShrinkageAllowance}
									</TableCell>
									<TableCell>
										<div>
											<WeaveModal
												invocationType="edit"
												weaveName={row.weaveName}
												warpWeftWidthShrinkageType={
													row.warpWeftWidthShrinkageType
												}
												warpWeftWidthShrinkage={row.warpWeftWidthShrinkage}
												additionalFabricShrinkageAllowance={
													row.additionalFabricShrinkageAllowance
												}
											/>
											<button onClick={() => deleteWeave(row.id)}>
												Delete
											</button>
										</div>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}

export default DataTable
