import React, { useRef, useState } from "react";
import {useAppSelector , useAppDispatch} from "../rtk/hook"
import { setFormInfo,setIsAllInputValid} from "../rtk/feature/stepFirstSlice";



export type InputProps = {
    lable: string,
    placeholder: string,
    type: string,
    name:"name" | "phone" | "email",
}

type allInptProps = {
    input:InputProps,
    index:number,
}




function InputFirstStep (props:allInptProps) {
    const {index,input} =props;
    const {lable,...inputDet} = input;
    const isEmptyStartValue =useAppSelector(state => state.stateFirstStep.isAllInputValid);
    const [isEmpty,setIsEmpty] = useState<boolean>(!isEmptyStartValue[index]);
    const isClicked =useAppSelector(state => state.stateFirstStep.isFirstClicked);
    const formInfo =useAppSelector(state => state.stateFirstStep.formInfo);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLInputElement>(null);
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormInfo({...formInfo,[e.target.name]:e.target.value,}));
        if(ref.current?.value === "") {
            dispatch(setIsAllInputValid({index:index,state:false}));
            setIsEmpty(true);
        } else {
            dispatch(setIsAllInputValid({index:index,state:true}));
            setIsEmpty(false);
        }
    };
    const onFocus = (e : React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    }
    return (
        <div className="flex flex-col my-4 ">
            <div className="flex justify-between py-1">
                <span className="text-indigo-900 font-semibold">{lable}</span>
                <span className={`${isClicked && isEmpty ? "" : "hidden"}
                text-red-700 font-semibold`}>This field is required</span>
            </div>
            <input {...inputDet}
            ref={ref}
            onFocus={onFocus}
            value={formInfo[`${inputDet.name}`]}
            onChange={onChange}
            className="border-2 border-solid border-gray-200 px-4 py-2 mb-2 font-semibold rounded outline-purple-800"/>    
        </div>
    );
}



export default InputFirstStep;