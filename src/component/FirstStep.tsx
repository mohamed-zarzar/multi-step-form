import InputFirstStep ,{ InputProps } from "./InputFirstStep";


const allInput : InputProps[] = [
    {
        lable:"Name",
        placeholder:"e.g.Stephen King",
        type:"text",
        name:"name",
    },
    {
        lable:"Email Address",
        placeholder:"e.g.StephenKing@lorem.com",
        type:"email",
        name:"email",
    },
    {
        lable:"Phone Number",
        placeholder:"e.g.+1 234 567 890",
        type:"number",
        name:"phone",
    },
]





function FirstStep () {
    return (
        <div className="">
            <h2 className="text-indigo-900 text-2xl font-bold">Personal info</h2>
            <p className="text-gray-400 font-normal text-md max-w-full ">Please provide your name,email address,and phone number</p>
            {
                allInput.map((input,index)=>(
                    <InputFirstStep key={index} input={input} index={index}/>
                ))
            }
        </div>
    );
}




export default FirstStep;