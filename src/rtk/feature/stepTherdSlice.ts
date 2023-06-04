import {createSlice, PayloadAction } from '@reduxjs/toolkit'



type initialStateType = {
    service:boolean,
    storage:boolean,
    customize:boolean,
    total:number,
}
const initialState : initialStateType = {
    service:false,
    storage:false,
    customize:false,
    total:0,
};


const stepTherdSlice = createSlice({
    name: 'activeStepSlice',
    initialState,
    reducers: {
        setAdvantges : (state:initialStateType, action : PayloadAction<{
            state:boolean,
            name:"service"|"storage"|"customize"}>) => {
            switch(action.payload.name) {
                case "service" :
                    state.service = action.payload.state;
                    break;
                case "storage" :
                    state.storage = action.payload.state;
                    break;
                case "customize": 
                    state.customize = action.payload.state;
                    break;
            }
        },
        setTotal : (state:initialStateType, action : PayloadAction<{state:boolean,mount:number}>) => {
            if(action.payload.state) {
                state.total += action.payload.mount;
            } else {
                state.total -= action.payload.mount;
            }
        },
    },
})





export default stepTherdSlice.reducer;
export const { setAdvantges , setTotal } = stepTherdSlice.actions
