import React, {useState} from "react";

function App() {
  const [arr, setArr] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);

    let newElem = () => setArr([...arr,'пункт'])
    let delElem = (indexDelElem) =>
        setArr((arr) =>
            arr.filter((elem,index) => index !== indexDelElem)
        )

  let listArr = arr.map((elem,index)=>
      <li key = {index}>
          {elem}
          <button onClick={() => delElem(index)}>Натисни кнопку</button>
      </li>)

  return (
      <div>
        <ul>
          {listArr}
        </ul>
        <button onClick={newElem}>Натисни кнопку</button>

      </div>
  );
}

export default App;
