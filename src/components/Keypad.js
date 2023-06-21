//calculator keypad
export const Keypad= ({updateDisplay, calculate}) =>{
    return (
        <div className="grid grid-cols-4 bg-gray-50">
            <button 
                onClick={() => updateDisplay("AC")}
                className=" flex items-center justify-center border-[1px] bg-[#686868] py-4 text-white text-2xl"
            >
                AC
            </button>
            <button 
                onClick={() => updateDisplay("DEL")}
                className=" flex items-center justify-center border-[1px] bg-[#686868] py-4 text-white text-2xl"
            >
                DEL
            </button>
            <button 
                //onClick={calculate}
                onClick={() => updateDisplay("%")}
                className=" flex items-center justify-center border-[1px] bg-[#686868] text-white text-2xl"
            >
                %
            </button>
            <button 
                onClick={() => updateDisplay("÷")}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl"
            >
                ÷
            </button>
            <button 
                onClick={() => updateDisplay("7")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                7
            </button>
            <button 
                onClick={() => updateDisplay("8")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                8
            </button>
            <button 
                onClick={() => updateDisplay("9")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] text-white text-2xl"
            >
                9
            </button>
            <button 
                onClick={() => updateDisplay("x")}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl"
            >
                x
            </button>
            <button 
                onClick={() => updateDisplay("4")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                4
            </button>
            <button 
                onClick={() => updateDisplay("5")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                5
            </button>
            <button 
                onClick={() => updateDisplay("6")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] text-white text-2xl"
            >
                6
            </button>
            <button 
                onClick={() => updateDisplay("-")}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl"
            >
                -
            </button>
            <button 
                onClick={() => updateDisplay("1")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                1
            </button>
            <button 
                onClick={() => updateDisplay("2")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                2
            </button>
            <button 
                onClick={() => updateDisplay("3")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] text-white text-2xl"
            >
                3
            </button>
            <button 
                onClick={() => updateDisplay("+")}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl">
                +
            </button>
            <button 
                onClick={() => updateDisplay("0")}
                className="col-span-2 flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                0
            </button>
            <button 
                onClick={() => updateDisplay(".")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] text-white text-2xl"
            >
                .
            </button>
            <button 
                onClick={calculate}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl">
                =
            </button>
        </div>
    );
}