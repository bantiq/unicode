import React from "react";

function App() {
    let arr = ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'];

    let listArr = arr.map((elem,index)=> <li key = {index}>{elem}</li>)
  return (
      <div>
          <ul>
              {listArr}
          </ul>
      </div>
  );
}

export default App;
