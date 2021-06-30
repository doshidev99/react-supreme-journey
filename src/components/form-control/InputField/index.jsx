import React from 'react'
import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form';

export const InputField = (props) => {
	const { control, label, name, errors } = props;

	return (
		<div style={{ paddingLeft: 20 }}>
			<Controller
				label={label}
				name={name}
				control={control}
				render={({ field }) =>
					<TextField
						{...field}
						error={!!errors[name]}
						helperText={errors && errors[name]?.message}
					/>}
			/>

		</div>
	)
}
