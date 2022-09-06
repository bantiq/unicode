import React from "react";
import {useState} from "react";

function App() {
  const [person, setPerson] = useState({
    name: 'Иван',
    age: 25
  });
  function changePerson(){
      setPerson({...person , name : 'Коля', age : '30'})
  }
  return (
      <div>
        имя: {person.name}, возраст: {person.age}
        <p/>
        <button onClick={changePerson}>Натисни на мене</button>
      </div>
  );
}

export default App;
