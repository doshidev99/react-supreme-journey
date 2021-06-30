
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import UserApi from 'api/UserApi';

export const register = createAsyncThunk('user/register', async (payload) => {
	const data = await UserApi.register(payload);
	return data

})
const userSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 1
	},
	reducers: {
	},
	extraReducer: {
		[register.fulfilled]: (state, action) => {
			console.log(state)
			return state;
		}
	}
})

export const { reducer } = userSlice
export default reducer;