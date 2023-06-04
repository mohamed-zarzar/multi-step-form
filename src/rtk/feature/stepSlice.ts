import {createSlice} from '@reduxjs/toolkit'


type TypeSteps = 1 | 2 | 3 | 4;


type initialStateType = {
    avtiveStep : TypeSteps,
}
const initialState : initialStateType = {
    avtiveStep : 1,
};

const stepSlice = createSlice({
    name: 'activeStepSlice',
    initialState,
    reducers: {
        plusAvtiveStep : (state:initialStateType) => {
            if(state.avtiveStep === 4) return;
            state.avtiveStep++;
        },
        minusAvtiveStep : (state:initialStateType) => {
            if(state.avtiveStep === 1) return;
            state.avtiveStep--;
        },
    },
})





export default stepSlice.reducer;
export const { plusAvtiveStep,minusAvtiveStep} = stepSlice.actions
