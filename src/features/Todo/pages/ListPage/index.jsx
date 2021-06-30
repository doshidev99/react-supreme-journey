import Album from 'components/Album'
import React from 'react'
import { Counter } from '../../../Counter'
import { TodoForm } from '../../components/TodoForm'

export const ListPage = () => {
	return (
		<div>
			<TodoForm />
			<Counter />
			<Album />
		</div>
	)
}
