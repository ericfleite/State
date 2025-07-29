import { useState } from "react";

function Input () {
    const [input, setInput] = useState("");

    function eventoDeOnChange(event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value);
    }

    return (
        <div>
            <input type="text" value={input} onChange={eventoDeOnChange}></input>
        </div>
    )
}

export default Input;