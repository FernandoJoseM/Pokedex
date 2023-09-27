import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
    name: 'trainerSlice',
    initialState: '',
    reducers: {
       setTrainerSlice:(state,action)=>action.payload
    }
})

export const { setTrainerSlice } = mySlice.actions;

export default mySlice.reducer;
