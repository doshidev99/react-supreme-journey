import { Button } from '@material-ui/core'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from './counterSlice'

// import styles from './style.module.css'

export const Counter = () => {
	const dispatch = useDispatch()

	const { countState } = useSelector(state => state)
	const onIncrement = () => {
		dispatch(increase())
	}
	const onDecrement = () => {
		dispatch(decrease())
	}
	return (
		<>
			<h1>Count: {countState.value}</h1>
			<Button variant="contained" color="primary" onClick={onIncrement}>Increment</Button>
			{" "}
			{" "}
			<Button variant="contained" color="secondary" onClick={onDecrement}>Decrement</Button>
		</>
	)
}
