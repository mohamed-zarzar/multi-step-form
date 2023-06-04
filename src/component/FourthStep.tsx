import { useAppSelector} from "../rtk/hook"
import { ons } from "./TherdStep";

const advantgeis =ons;

function FourthStep () {
    const stateSecound = useAppSelector(state => state.stateSecoundStep);
    const stateTherd = useAppSelector(state => state.stepTherdSlice);

    return (
        <div>
            <h2 className="text-indigo-900 text-2xl font-bold">Finishing up</h2>
            <p className="text-gray-400 font-normal text-md max-w-full ">Double-check evertything looks OK before confirm</p>
            <div className="bg-gray-50 rounded p-4  my-6">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-indigo-900 text-lg font-bold">{`${stateSecound.plan.name}(${stateSecound.isMonthly ? "Monthly" : "Yearly"})`}</span>
                        <span className="text-gray-400  text-md font-semibold">Change</span>
                    </div>
                    <span className=" text-xl text-indigo-900 font-bold">{stateSecound.isMonthly? `$${stateSecound.plan.salary}/mo` : `$${stateSecound.plan.salary}/yr`}</span>
                </div>
                <div className="bg-gray-300 w-8/10 h-px mx-auto my-4"></div>
                <div className="flex flex-col space-y-4">
                    {stateTherd.service 
                    ? <div className="flex justify-between">
                            <div className="text-md text-gray-300 font-semibold">
                                {advantgeis[0].title}
                            </div>
                            <div className="text-md text-indigo-800">
                                {stateSecound.isMonthly ?
                                `+$${advantgeis[0].price}/mo` 
                                : 
                                `+$${advantgeis[0].price * 10}/yr` }
                            </div>
                        </div>
                    : <div></div>}
                    {stateTherd.storage 
                    ? <div className="flex justify-between">
                            <div className="text-md text-gray-300 font-semibold">
                                {advantgeis[1].title}
                            </div>
                            <div className="text-md text-indigo-800">
                                {stateSecound.isMonthly ?
                                `+$${advantgeis[1].price}/mo` 
                                : 
                                `+$${advantgeis[1].price * 10}/yr` }
                            </div>
                        </div>
                    : <div></div>}
                    {stateTherd.customize 
                    ? <div className="flex justify-between">
                            <div className="text-md text-gray-300 font-semibold">
                                {advantgeis[2].title}
                            </div>
                            <div className="text-md text-indigo-800">
                                {stateSecound.isMonthly ?
                                `+$${advantgeis[2].price}/mo` 
                                : 
                                `+$${advantgeis[2].price * 10}/yr` }
                            </div>
                        </div>
                    : <div></div>}
                </div>
            </div>
            <div className="flex justify-between w-full p-4">
                <div className="text-md text-gray-300 font-semibold">
                    Total {`(per ${stateSecound.isMonthly ? "month": "year"})`}
                </div>
                <div className="text-xl text-indigo-600 font-bold">
                    {`+$${stateSecound.plan.salary + stateTherd.total}/${stateSecound.isMonthly ? "mo" : "yr"}`}
                </div>
            </div>
        </div>
    );
}





export default FourthStep;