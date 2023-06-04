import { configureStore } from '@reduxjs/toolkit';
import stepFirstSlice from "./feature/stepFirstSlice"
import stepSlice from './feature/stepSlice';
import stepSecoundSlice from './feature/stepSecoundSlice';
import stepTherdSlice from './feature/stepTherdSlice';


const store = configureStore({
    reducer: {
        stepState: stepSlice,
        stateFirstStep : stepFirstSlice,
        stateSecoundStep : stepSecoundSlice,
        stepTherdSlice : stepTherdSlice,
    }
})


export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch