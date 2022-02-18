import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openstatus: false,
}

export const modalSlice = createSlice({
    name: 'opener',
    initialState,
    reducers: {
        opener: (state, dispatch) => {
            // typeof (dispatch.payload) != 'undefined' ? state.openStatus = dispatch.payload :
            (!state.openstatus) ? state.openstatus = true : state.openstatus = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { opener } = modalSlice.actions

export default modalSlice.reducer