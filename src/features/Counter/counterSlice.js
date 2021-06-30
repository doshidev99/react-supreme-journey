
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 1
	},
	reducers: {
		increase: state => {
			state.value += 1
		},
		decrease: state => {
			state.value -= 1
		}
	}
})

export const { actions: { increase, decrease }, reducer } = counterSlice
export default reducer;