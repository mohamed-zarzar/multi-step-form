import imgArcade from "../images/icon-arcade.svg"
import imgAdvanced from "../images/icon-advanced.svg"
import imgPro from "../images/icon-pro.svg"
import OnePlane ,{PlansType} from "./OnePlan";
import { useState } from "react";
import { setIsMonthly,setCuurentPlan} from "../rtk/feature/stepSecoundSlice";
import { useAppSelector ,useAppDispatch} from "../rtk/hook"


const plansMonsth: PlansType[] = [
    {
        name:"Arcade",
        salary:9,
        isOffer:false,
        offer:"",
        img:imgArcade,
        index:0,
    },
    {
        name:"Advanced",
        salary:12,
        isOffer:false,
        offer:"",
        img:imgAdvanced,
        index:1,
    },
    {
        name:"Pro",
        salary:15,
        isOffer:false,
        offer:"",
        img:imgPro,
        index:2,
    },
];
const plansYear: PlansType[] = [
    {
        name:"Arcade",
        salary:90,
        isOffer:true,
        offer:"2 month free",
        img:imgArcade,
        index:0,
    },
    {
        name:"Advanced",
        salary:120,
        isOffer:true,
        offer:"2 month free",
        img:imgAdvanced,
        index:1,
    },
    {
        name:"Pro",
        salary:150,
        isOffer:true,
        offer:"2 month free",
        img:imgPro,
        index:2,
    },
];





function SecoundStep () {
    const activePlan = useAppSelector(state => state.stateSecoundStep.plan);
    const isMonthly = useAppSelector(state => state.stateSecoundStep.isMonthly);
    const [isClick,setIsClick] =useState<boolean>(!isMonthly);
    const dispatch = useAppDispatch();
    return(
        <div className="max-w-full">
            <h2 className="text-indigo-900 text-2xl font-bold">Select your plan</h2>
            <p className="text-gray-400 font-normal text-md max-w-full">You have the option of monthly or yearly billing</p>
            <div className="flex flex-col sm:flex-row max-w-full justify-between my-6">
                {isClick
                ?
                plansYear.map((plan,index)=>(<OnePlane key={index} {...plan} />)) 
                :
                plansMonsth.map((plan,index)=>(<OnePlane key={index} {...plan} />))}
            </div>
            <div className="flex flex-row justify-center items-center space-x-4 mx-auto">
                    <div className={`${!isClick ? "text-indigo-950" : "text-gray-300"} font-bold text-md transition-all`}>Monthly</div>
                    <div className="relative cursor-pointer w-12 h-6 bg-indigo-950 rounded-full my-2 "
                    onClick={()=>{
                        console.log(activePlan);
                        if(!isClick) {
                            dispatch(setCuurentPlan(plansYear[activePlan.index]));
                        } else {
                            dispatch(setCuurentPlan(plansMonsth[activePlan.index]));
                        }
                        setIsClick(!isClick);
                        dispatch(setIsMonthly(!isMonthly));
                    }}>
                        <div className={`bg-white h-4 w-4 rounded-full absolute top-1/2 left-1 -translate-y-1/2 transition duration-500                            
                        ${isClick ? "translate-x-6" :""}`
                        }
                        ></div>
                    </div>
                    <div className={`${isClick ? "text-indigo-950" : "text-gray-300"} font-bold text-md transition-all`}>Yearly</div>
                </div>
        </div>
    );
}

export default SecoundStep;