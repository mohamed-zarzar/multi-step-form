import {useState} from "react";
import { useAppSelector ,useAppDispatch} from "../rtk/hook"
import { setAdvantges,setTotal } from "../rtk/feature/stepTherdSlice";

export type one = {
    title:string,
    explain:string,
    price:number,
    name:"service"|"storage"|"customize",
}




function OneAdvantage (props:one) {
    const dispatch =useAppDispatch();
    const {title,explain,price,name} =props;
    const advanteg = useAppSelector(state=> state.stepTherdSlice[`${name}`]);
    const isMonthly = useAppSelector(state=> state.stateSecoundStep.isMonthly);
    const [isActive,setIsActive] =useState<boolean>(advanteg);
    const onClick = () => {
        dispatch(setTotal({state:!advanteg,mount:price}));
        dispatch(setAdvantges({state:!advanteg,name:name}));
        setIsActive(!isActive);
    };
    return (
        <div className={`flex border-2 border-solid rounded my-2  px-4 py-2 justify-between items-center h-22 cursor-pointer
        ${isActive ? "bg-indigo-50 border-indigo-400" : "border-gray-200"}`}
        onClick={onClick}>
            <div className="flex space-x-6">
                <div className={`w-6 h-6 my-auto border-solid border-2  relative
                ${isActive ? "border-indigo-700": "border-gray-200"}`}>
                    <div className={`absolute w-full h-full text-xl flex justify-center items-center text-center text-white bg-indigo-700
                    ${isActive ? "" : "hidden"}`}>
                    &#x2713; 
                    </div>
                </div>
                <div className="flex flex-col" >
                    <span className="text-lg text-indigo-900 font-bold">{title}</span>
                    <span className="hidden xs:block text-sm text-gray-400 font-semibold">{explain}</span>
                </div>
            </div>
            <div className="text-indigo-700"> {isMonthly? `+$${price}/mo` : `+$${price*10}/yr`}</div>
        </div>
    );
}

export default OneAdvantage;