import React, {useState} from "react";

function App() {
    const [arr, setArr] = useState(['Олександр','Давид','Максим'])
    const [inputValue, setInputValue] = useState('')
    let deleteElem = (indexDeletedElem) => {
        setArr([...arr.filter((elem,index) => index !== indexDeletedElem)])
    }
    let listArr = arr.map((elem,index) =>
        <li key={index}>
            {elem}
            <button onClick={() => deleteElem(index)}>Видалити</button>
        </li>)
    let handleChange = (event) => {
        setInputValue(event.target.value)
    }
    let handleClick = () => {
        if (inputValue) {
            setArr([...arr, inputValue])
            setInputValue('')
        }
    }
    return (
        <div>
            <input type="text"
                   onChange={handleChange}
                   value={inputValue}
            />
            <button onClick={handleClick}>Натисни</button>
            <ul>{listArr}</ul>
        </div>
    );

}

export default App;
