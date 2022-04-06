import {createSlice} from '@reduxjs/toolkit'


	const initialState=[{id: "0", name: "User"},{id: "1", name: "Vanya"}]
    
    const usersSlice = createSlice({
    	name: "users",
    	initialState,
    	reducers: {}
    })
export default usersSlice.reducer
