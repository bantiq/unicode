import React, {useState} from "react";

function App() {
    const [arr, setArr] = useState(['HTML','CSS','JavaScript'])
    const [inputValue, setInputValue] = useState('')
    let listArr = arr.map((elem,index) =>
        <li key={index}>
            {elem}
        </li>
    )
    let handleChangeValue = (e) => setInputValue(e.target.value);
    let deleteListElem = () => {
        setArr([...arr.filter((elem,index) => index !== +inputValue)])
        setInputValue('')
    };
    return (
        <div>
            <ul>
                {listArr}
            </ul>
            <input type="number"
                   value={inputValue}
                   onChange={handleChangeValue}
            />
            <button onClick={deleteListElem}>Видалити</button>
        </div>
    )
}

export default App;
