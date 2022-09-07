import React, {useState} from "react";

function App() {
    const [value, setValue] = useState({
        inputValue1 : '',
        inputValue2 : '',
        returnValue : ''
    })
    let handleChange1 = (event) =>
        setValue({
            ...value
            ,inputValue1 : event.target.value
        })
    ;
    let handleChange2 = (event) =>
        setValue({
            ...value
            ,inputValue2 : event.target.value
        })
    ;
    let handleClick = () =>
        setValue({
            ...value,
            returnValue : +value.inputValue1 + +value.inputValue2,
            inputValue1 : '',
            inputValue2 : ''
        })
    ;

    return (
        <div>
            <input type="number"
                   onChange={handleChange1}
                   value={value.inputValue1}
            />
            <input type="number"
                   onChange={handleChange2}
                   value={value.inputValue2}
            />
            <button onClick={handleClick}>Submit</button>
            <p>{value.returnValue}</p>
        </div>
    );
}

export default App;
