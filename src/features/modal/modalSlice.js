import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openStatus: false,



}

export const modalSlice = createSlice({
    name: 'opener',
    initialState,
    reducers: {
        opener: (state) => {
            (!state.openStatus) ? state.openStatus = true : state.openStatus = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { opener } = modalSlice.actions

export default modalSlice.reducer