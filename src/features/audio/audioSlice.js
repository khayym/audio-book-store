import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    audioStatus: ''
}

export const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setAudioUrl: (state, dispatch) => {
            // typeof (dispatch.payload) != 'undefined' ? state.openStatus = dispatch.payload :
            // (!state.openstatus) ? state.openstatus = true : state.openstatus = false;
            state.audioStatus = dispatch.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAudioUrl } = audioSlice.actions

export default audioSlice.reducer