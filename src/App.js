import React from "react";

function App() {
  let arr = ['Коля', 'Вася', 'Петя'];
  let listArr = arr.map((elem,index) => <li key={index}> {elem} </li>)
  return (
      <div>
        {listArr}
      </div>
  );
}

export default App;
