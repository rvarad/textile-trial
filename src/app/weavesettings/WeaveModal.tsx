"use client"

import FormSelectField from "@/components/FormSelectField"
import { FormControl, FormHelperText, Modal } from "@mui/material"
import React, { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import FormTextField from "@/components/FormTextField"

interface WeaveModalProps {
	invocationType: "new" | "edit"
	weaveName?: string
	warpWeftWidthShrinkageType?: string
	warpWeftWidthShrinkage?: number
	additionalFabricShrinkageAllowance?: number
	// modalState?: boolean
}

async function createNewWeave(newData) {
	try {
		const res = await fetch(
			`http://localhost:3000/api/v1/weaveSettings/createNewWeave`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ data: newData }),
			}
		)

		const data = await res.json()

		console.log(data)
	} catch (error) {
		console.log(error)
	}
}

async function updateWeaveData(updatedData) {
	try {
		const res = await fetch(
			`http://localhost:3000/api/v1/weaveSettings/editWeaveData`,
			{
				method: "PUT",
				body: JSON.stringify({ data: updatedData }),
			}
		)

		const data = await res.json()

		console.log(data)
	} catch (error) {
		console.log(error)
	}
}

// function WeaveModal({
// 	weaveName,
// 	warpWeftWidthShrinkageType,
// 	warpWeftWidthShrinkage,
// 	additionalFabricShrinkageAllowance,
// }: WeaveModalProps) {
// 	const [open, setOpen] = useState(false)
// 	const handleOpen = () => setOpen(true)
// 	const handleClose = () => setOpen(false)

// 	const form = useForm<WeaveModalProps>({
// 		defaultValues: {
// 			weaveName: weaveName || "",
// 			warpWeftWidthShrinkageType: warpWeftWidthShrinkageType || "Default",
// 			warpWeftWidthShrinkage: warpWeftWidthShrinkage || 0,
// 			additionalFabricShrinkageAllowance:
// 				additionalFabricShrinkageAllowance || 0,
// 		},
// 	})

// 	return (
// 		<div>
// 			<button onClick={handleOpen}>Add New Weave Type</button>
// 			<Modal
// 				open={open}
// 				onClose={handleClose}
// 			>
// 				<div style={{ backgroundColor: "blue" }}>
// 					<h1>Add new Cost</h1>
// 					<div>
// 						<form>
// 							<div>
// 								<label htmlFor="weaveName">Weave Name</label>
// 								<Controller
// 									name="weaveName"
// 									control={form.control}
// 									render={({ field }) => (
// 										<Input
// 											id="weaveName"
// 											{...field}
// 										/>
// 									)}
// 								/>
// 							</div>
// 							<div>
// 								<FormControl>
// 									<label htmlFor="warpWeftWidthShrinkageType">
// 										Warp Weft Width Shrinkage Type
// 									</label>
// 									<Controller
// 										name="warpWeftWidthShrinkageType"
// 										control={form.control}
// 										render={({ field: { onChange, value } }) => {
// 											console.log(value)
// 											return (
// 												<Select
// 													id="warpWeftWidthShrinkageType"
// 													onChange={() => onChange()}
// 													value={value}
// 												>
// 													<Option value={"Default"}>Default</Option>
// 													<Option value={"Custom"}>Custom</Option>
// 												</Select>
// 											)
// 										}}
// 									/>
// 								</FormControl>
// 							</div>
// 							{warpWeftWidthShrinkageType === "Default" && (
// 								<div>
// 									<Controller
// 										name="warpWeftWidthShrinkage"
// 										control={form.control}
// 										render={({ field }) => (
// 											<Input
// 												{...field}
// 												type="number"
// 												endAdornment
// 											/>
// 										)}
// 									/>
// 								</div>
// 							)}
// 						</form>
// 					</div>
// 					<button onClick={handleClose}>Close</button>
// 				</div>
// 			</Modal>
// 		</div>
// 	)
// }

function WeaveModal({
	invocationType,
	weaveName,
	warpWeftWidthShrinkageType,
	warpWeftWidthShrinkage,
	additionalFabricShrinkageAllowance,
}: WeaveModalProps) {
	const [modalOpen, setModalOpen] = useState(false)
	const handleOpen = () => setModalOpen(true)
	const handleClose = () => {
		setModalOpen(false)
		form.reset()
	}

	const form = useForm({
		defaultValues: {
			weaveName: weaveName || "",
			warpWeftWidthShrinkageType: warpWeftWidthShrinkageType || "Default",
			warpWeftWidthShrinkage: warpWeftWidthShrinkage || 0,
			additionalFabricShrinkageAllowance:
				additionalFabricShrinkageAllowance || 0,
		},
	})
	const warpWeftWidthShrinkageTypeInputValue = form.watch(
		"warpWeftWidthShrinkageType"
	)

	function onSubmit(data: {
		weaveName: string
		warpWeftWidthShrinkageType: string
		warpWeftWidthShrinkage?: number
		additionalFabricShrinkageAllowance: number
	}) {
		if (invocationType === "new") {
			createNewWeave(data)
		} else {
			updateWeaveData(data)
		}
		handleClose()
	}

	return (
		<div>
			{invocationType === "new" ? (
				<button onClick={handleOpen}>Add New Weave</button>
			) : (
				<button onClick={handleOpen}>edit</button>
			)}
			<Modal
				open={modalOpen}
				onClose={handleClose}
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<div className="modal-box">
					<div className="form-container">
						<FormProvider {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<FormControl>
									<label htmlFor="weaveName">Weave Name</label>
									<FormTextField
										required={true}
										id="weaveName"
										name="weaveName"
										type="text"
									/>
								</FormControl>
								<FormControl>
									<label htmlFor="warpWeftWidthShrinkageType">
										Warp Weft Width Shrinkage Type
									</label>
									<FormSelectField
										name="warpWeftWidthShrinkageType"
										id="warpWeftWidthShrinkageType"
										label="Warp Weft Width Shrinkage Type"
										options={["Default", "Custom"]}
									/>
									<FormHelperText>
										By setting the value to custom fou can overwrite the
										warp/weft width shrinkage for this weave. This will apply to
										all counts
									</FormHelperText>
								</FormControl>
								{warpWeftWidthShrinkageTypeInputValue === "Custom" && (
									<FormControl>
										<label htmlFor="warpWeftWidthShrinkage">
											Warp Weft Width Shrinkage
										</label>
										<FormTextField
											required={true}
											id="warpWeftWidthShrinkage"
											name="warpWeftWidthShrinkage"
											type="number"
											inputAdornmentValue="%"
										/>
									</FormControl>
								)}
								<FormControl>
									<label htmlFor="additionalFabricShrinkageAllowance">
										Additional Fabric Shrinkage Allowance
									</label>
									<FormTextField
										required={true}
										id="additionalFabricShrinkageAllowance"
										name="additionalFabricShrinkageAllowance"
										type="number"
										inputAdornmentValue="inches"
									/>
								</FormControl>
								<button type="submit">Save</button>
								<button onClick={handleClose}>Close</button>
							</form>
							<DevTool control={form.control} />
						</FormProvider>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default WeaveModal
