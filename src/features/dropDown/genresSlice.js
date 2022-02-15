import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const genresFetchingReduser = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        linksGetting: (state, action) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { linksGetting } = genresFetchingReduser.actions

export default genresFetchingReduser.reducer