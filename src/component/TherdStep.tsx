import OneAdvantage, { one } from "./OneAdvantage";



export const ons: one[] = [
    {   
        title:"Online service",
        explain:"Access to multiplayer games",
        price:1,
        name:"service",
    },
    {   
        title:"Larger storage",
        explain:"Extra 1TB of cloud save",
        price:2,
        name:"storage",
    },
    {   
        title:"Customizable profile",
        explain:"Custom theme on your profile",
        price:2,
        name:"customize",
    },
];





function TherdStep () {
    return (
        <div>
            <h2 className="text-indigo-900 text-2xl font-bold">Pick add-ons</h2>
            <p className="text-gray-400 font-normal text-md max-w-full">Add-ons help enhance your gaming experience</p>
            <div className="flex flex-col my-4">
                {ons.map((one,index)=>(
                    <OneAdvantage key={index} {...one} />
                ))}
            </div>
        </div>
    );
}



export default TherdStep;