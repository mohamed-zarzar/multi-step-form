import "../component-style/bgImage.css"
import { useAppSelector } from "../rtk/hook";


function BgImage () {
    const activeStep  = useAppSelector(state => state.stepState.avtiveStep);
    const activeStyle ="text-indigo-950 border-blue-200 bg-blue-200";;
    
    return(
        <div className="header-of-form w-full sm:w-72 sm:max-w-1/4 h-40 sm:h-128 sm:rounded flex sm:flex-col justify-center sm:justify-start md:items-start md:px-4 space-x-4 sm:space-x-0 sm:space-y-6 items-center sm:py-10">
            <div className="flex space-x-2 justify-center items-center">
                <div className={`border-solid border-2 w-10 h-10 rounded-full flex justify-center items-center font-semibold
                ${activeStep === 1 ? activeStyle : "bg-transparent text-white border-white"}`}>1</div>
                <div className="hidden md:block">
                    <span className="text-gray-400">Step 1</span>
                    <div className="text-sm text-white font-semibold">YOUR INFO</div>
                </div>
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <div className={`border-solid border-2 w-10 h-10 rounded-full flex justify-center items-center font-semibold
                ${activeStep === 2 ? activeStyle : "bg-transparent text-white border-white"}`}>2</div>
                <div className="hidden md:block">
                    <span className="text-gray-400">Step 2</span>
                    <div className="text-sm text-white font-semibold">SELECT YOUR PLAN</div>
                </div>
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <div className={`border-solid border-2 w-10 h-10 rounded-full flex justify-center items-center font-semibold
                ${activeStep === 3 ? activeStyle : "bg-transparent text-white border-white"}`}>3</div>
                <div className="hidden md:block">
                    <span className="text-gray-400">Step 3</span>
                    <div className="text-sm text-white font-semibold">ADD-ONS</div>
                </div>
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <div className={`border-solid border-2 w-10 h-10 rounded-full flex justify-center items-center
                ${activeStep === 4 ? activeStyle : "bg-transparent text-white border-white"}`}>4</div>
                <div className="hidden md:block">
                    <span className="text-gray-400">Step 4</span>
                    <div className="text-sm text-white font-semibold">YSUMMARY</div>
                </div>
            </div>
        </div>
    );
}
export default BgImage;