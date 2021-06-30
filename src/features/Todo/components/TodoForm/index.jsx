import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { InputField } from '../../../../components/form-control/InputField'

const schema = yup.object().shape({
	title: yup.string().required('title is required!'),
});

export const TodoForm = () => {
	const {
		handleSubmit,
		formState: { touchedFields, errors },
		control } = useForm({
			defaultValues: {
				title: 'truong',
			},
			resolver: yupResolver(schema)
		});

	const onSubmit = (data, e) => console.log({ data, e });
	const onError = (errors, e) => console.log(errors, e);
	return (
		<div>
			<h3>
				TODO FORM
			</h3>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<InputField
					control={control}
					errors={errors}
					name='title'
					label="Title"
				/>
				{/* <input
					{...register("title", { required: true, maxLength: 20 })}
					required /> */}
			</form>

		</div>
	)
}
