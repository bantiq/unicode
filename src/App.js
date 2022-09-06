import React, {useState} from "react";

function App() {
    const [arr, setArr] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);

    let listArr = arr.map((elem,index)=> <li key = {index}>{elem}</li>)

    let newElem = () => setArr([...arr,'пункт'])
    let delElem = () => setArr([...arr.slice(0, arr.length - 1)])


    return (
        <div>
            <ul>
                {listArr}
            </ul>
            <button onClick={newElem}>Натисни кнопку</button>
            <button onClick={delElem}>Натисни кнопку</button>
        </div>
    );
}

export default App;
