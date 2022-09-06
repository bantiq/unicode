import React from "react";

function App() {
  let arr = ['a','b','c','d','e'];
  let listArr = arr.map((elem, index) =>
      <li key={index}>
          {elem}
      </li>);
  return (
      <div>
        <ul>
          {listArr}
        </ul>
      </div>
  );
}

export default App;
