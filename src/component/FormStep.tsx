import FirstStep from "./FirstStep";
import { useAppSelector} from "../rtk/hook"
import SecoundStep from "./SecoundStep";
import TherdStep from "./TherdStep";
import FourthStep from "./FourthStep";

function FormStep () {
    const activeStep = useAppSelector(state => state.stepState.avtiveStep);
    return(
        <div className="mx-auto sm:mx-0 -translate-y-4 sm:translate-y-0 bg-white w-11/12 sm:w-full p-4 rounded">
            {activeStep === 1 && 
            <FirstStep/>}
            {activeStep === 2 && 
            <SecoundStep/>}
            {activeStep === 3 && 
            <TherdStep/>}
            {activeStep === 4 && 
            <FourthStep/>}
        </div>
    );
}


export default FormStep;