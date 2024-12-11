import { InputAdornment, TextField } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"

interface FormTextFieldProps {
	name: string
	id: string
	required: boolean
	type: "text" | "number"
	inputAdornmentValue?: string
}

function FormTextField({
	name,
	id,
	required,
	type,
	inputAdornmentValue,
}: FormTextFieldProps) {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextField
					required={required}
					{...field}
					id={id}
					type={type}
					error={!!error}
					helperText={error?.message}
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position="end">
									{inputAdornmentValue}
								</InputAdornment>
							),
						},
					}}
				/>
			)}
		/>
	)
}

export default FormTextField
