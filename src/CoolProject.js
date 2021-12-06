import React, { useState } from "react";

const CoolProject = () => {

    const [advice, setAdvice] = useState("");
    const getter = async () => {
        const response = await fetch("https://api.adviceslip.com/advice")
        const data = await response.json()
        setAdvice(data.slip)
    }
    return (
        <div>
            <h1>New API App</h1>
            <h3>{advice.advice}</h3>
            <button onClick={getter}>get data</button>
        </div>
    )
}

export default CoolProject