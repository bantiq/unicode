import React from "react";
import {useState} from "react";

function App() {
  const [state, setState] = useState({
    name: 'Иван',
    age: 25,
    show: false
  });
  function showMessage() {
    if (state.show){
      return <p>имя: {state.name}, возраст: {state.age}</p>
    }
    return false;
  }
  let changeShow = () => setState({...state, show: true}) ;
  return (
      <div>
        {showMessage()}
        <button onClick={changeShow}>Натисни на мене</button>
      </div>
  );
}

export default App;
