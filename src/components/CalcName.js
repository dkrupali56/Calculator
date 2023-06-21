import { useDispatch } from "react-redux"
import { addCalc } from "../features/calcSlice";
import { useState } from "react";

export const CalcName= ({display, calc, resetDisplay}) =>{

    //this sends the details of the calculation when Save button is clicked 
    const dispatch= useDispatch();
    const [name, setName]= useState("");

    //contains logic for POST request to the express server
    const handlePost= async (data) =>{
        const response=  await fetch("https://calculator-backend-hcvr.onrender.com/api/history", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const details= await response.json();
        //console.log(details)
        dispatch(addCalc({history: details}))
    }

    //this function runs when Save button is clicked
    let onSave= async () => {
        if(name.length === 0){
            alert("Enter the name")
            return
        }
        let calc_details= {
            name: name,
            calculation: calc,
            result: display,
        }
        handlePost(calc_details);
        setName("");
        resetDisplay("00")
    }
    return (
        <div>
            <div className="text-3xl font-bold py-5 text-center md:text-left">Calculation Name</div>
            <div className="flex justify-center md:flex">
                <div className="pr-3">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Name" value={name} onChange={(e) =>setName(e.target.value)}/>
                </div>
                <button 
                    onClick={onSave}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                    Save
                </button>
            </div>   
        </div>
    )
}
