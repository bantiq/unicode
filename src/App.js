import React, {useState} from "react";

function App() {
    const [value, setValue] = useState({
        inputValue : '',
        returnValue : ''
    })
    let handleChange = (event) =>
        setValue({
            ...value
            ,inputValue : event.target.value
        })
    ;
    let handleClick = () => {
        setValue({
            ...value,
            returnValue : value.inputValue,
            inputValue : ''})
        console.log(value)
    }

    return (
        <div>
            <input type="text"
                   onChange={handleChange}
                   value={value.inputValue}
            />
            <button onClick={handleClick}>Submit</button>
            <p>{value.returnValue}</p>
        </div>
    );
}

export default App;
