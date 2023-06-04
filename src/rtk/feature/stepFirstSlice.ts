import {createSlice, PayloadAction } from '@reduxjs/toolkit'



type formInfo ={
    name:string,
    email:string,
    phone:number,
}

type initialStateType = {
    isAllInputValid: boolean[],
    isFirstStepValid : boolean,
    isFirstClicked: boolean,
    formInfo : formInfo,
}
const initialState : initialStateType = {
    isAllInputValid: [false,false,false],
    isFirstStepValid : false,
    isFirstClicked: false,
    formInfo : {
        name:"",
        email:"",
        phone:0,
    }
};

const equalsCheck = (a:boolean[], b:boolean[]) => {
    return JSON.stringify(a) === JSON.stringify(b);
};

const stepFirstSlice = createSlice({
    name: 'activeStepSlice',
    initialState,
    reducers: {
        setIfFirstCLicked : (state:initialStateType, action : PayloadAction<boolean>) => {
            state.isFirstClicked =action.payload;
        },
        setFormInfo : (state:initialStateType, action : PayloadAction<formInfo>) => {
            state.formInfo =action.payload;
        },
        setIsAllInputValid : (state:initialStateType,action :PayloadAction<{index:number,state:boolean}>) => {
            state.isAllInputValid[action.payload.index]= action.payload.state; 
            if(equalsCheck(state.isAllInputValid,[true,true,true])) {
                state.isFirstStepValid =true;
            } else {
                state.isFirstStepValid =false;
            }
        },
    },
})





export default stepFirstSlice.reducer;
export const { setIfFirstCLicked,setFormInfo,setIsAllInputValid } = stepFirstSlice.actions
