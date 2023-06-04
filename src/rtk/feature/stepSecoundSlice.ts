import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PlansType } from '../../component/OnePlan';



type initialStateType = {
    plan:PlansType,
    activePlane: number,
    isMonthly:boolean,
}
const initialState : initialStateType = {
    plan:
    {
        name:"",
        salary:0,
        isOffer:false,
        offer:"",
        img:"",
        index:0,
    },
    activePlane:0,
    isMonthly:true,
};


const stepSecoundSlice = createSlice({
    name: 'activeStepSlice',
    initialState,
    reducers: {
        setCuurentPlan : (state:initialStateType, action : PayloadAction<PlansType>) => {
            state.plan =action.payload;
        },
        setActivePlan : (state:initialStateType, action : PayloadAction<number>) => {
            state.activePlane =action.payload;
        },
        setIsMonthly : (state:initialStateType, action : PayloadAction<boolean>) => {
            state.isMonthly =action.payload;
        },
    },
})





export default stepSecoundSlice.reducer;
export const { setCuurentPlan,setActivePlan ,setIsMonthly} = stepSecoundSlice.actions
