import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/Counter/counterSlice'

const rootReducer = {
	countState: counterReducer
}
const store = configureStore({
	reducer: rootReducer
})


export default store;