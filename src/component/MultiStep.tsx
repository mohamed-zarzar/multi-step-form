import BgImage from "./BgImage";
import FormStep from "./FormStep";
import imgThank from "../images/icon-thank-you.svg"
import { useAppSelector ,useAppDispatch} from "../rtk/hook"
import { setIfFirstCLicked } from "../rtk/feature/stepFirstSlice";
import { plusAvtiveStep,minusAvtiveStep } from "../rtk/feature/stepSlice";
import {useState} from "react";


function MultiStep () {
    const [isFinshed,setIsFinshed] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const activeStep  = useAppSelector(state => state.stepState.avtiveStep);
    const isFirstStepValid  = useAppSelector(state => state.stateFirstStep.isFirstStepValid);
    const nextStep = () => {
        if(activeStep === 1) dispatch(setIfFirstCLicked(true));
        if(!isFirstStepValid) return;
        dispatch(plusAvtiveStep());
    }
    const prevStep = () => {
        dispatch(minusAvtiveStep());
    }
    const confirm = () => {
        setIsFinshed(true);
    }
    return (
        <div className="bg-indigo-100 w-300 max-w-full mx-auto my-30  sm:p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:bg-white sm:p-2">
                <BgImage/>
                <div className="w-full  sm:px-2 flex flex-col justify-between">
                    {isFinshed ? 
                    <div className="flex flex-col justify-center items-center py-16 px-10 bg-white">
                        <img src={imgThank} alt="" className="w-16 h-16"/>
                        <p className="text-gray-400 text-xl my-10 text-center">Thanks For confirm your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                    </div>
                    :
                        <>
                            <FormStep/>
                            <div className="bg-white w-full flex justify-between py-2 px-4 sm:px-4 ">
                            {activeStep !== 1 &&
                            <button className="text-gray-300 hover:text-gray-400"
                            onClick={prevStep}>Go Back</button>}
                                {activeStep === 4 ?  
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg h-12 ml-auto"
                                onClick={confirm}>Confirm</button>
                                :
                                <button className="bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-lg h-12 ml-auto"
                                onClick={nextStep}>Next Step</button>}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
export default MultiStep;