"use client"

import { MenuItem, Select } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"

interface FormSelectFieldProps {
	name: string
	id: string
	label: string
	options: string[] | number[]
}

function FormSelectField({ name, id, label, options }: FormSelectFieldProps) {
	const { control } = useFormContext()

	function generateOptions() {
		return options.map((option) => (
			<MenuItem
				key={option}
				value={option}
			>
				{option}
			</MenuItem>
		))
	}

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value } }) => (
				<Select
					onChange={onChange}
					value={value}
					id={id}
					label={label}
				>
					{generateOptions()}
				</Select>
			)}
		/>
	)
}

export default FormSelectField
