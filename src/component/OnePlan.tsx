import {useAppSelector , useAppDispatch} from "../rtk/hook"
import { setCuurentPlan,setActivePlan } from "../rtk/feature/stepSecoundSlice";

export type PlansType = {
    name:string,
    salary:number,
    isOffer:boolean,
    offer:string,
    img:string,
    index:number,
}




function OnePlane (props:PlansType) {
    const dispatch = useAppDispatch();
    const activePlan =useAppSelector(state => state.stateSecoundStep.activePlane);
    const {index,name,salary,isOffer,offer,img} =props;
    const onClick = () => {
        dispatch(setCuurentPlan(props));
        dispatch(setActivePlan(index));
    }
    return (
        <div className={`flex sm:flex-col items-center justify-start sm:justify-between sm:items-start border-2 border-solid px-4 py-2 rounded my-2 sm:my-10 sm:mx-2 sm:px-4 sm:py-6 sm:w-22 md:w-36 sm:max-w-1/3 sm:h-44 cursor-pointer
        ${index === activePlan ? "border-indigo-950" :"border-gray-200"}`}
        onClick={()=>{onClick()}}>
            <img src={img} alt="" />
            <div className="flex flex-col space-y-1 mx-4 sm:mx-0 items-start ">
                <span className="text-lg text-indigo-900 font-semibold">{name}</span>
                <p className="text-gray-400 text-sm">{isOffer ? `$${salary}/yr`: `$${salary}/mo`}</p>
            </div>
            {isOffer && <div className="text-indigo-950 font-medium text-xs ml-auto sm:ml-0 sm:my-2">{offer}</div>}
        </div>
    );
}


export default OnePlane;