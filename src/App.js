import React from "react";

function App() {
  const person = {
    name: 'Иван',
    age: 25
  };
  let showName = () => alert(person.name);
  return (
      <div>
        <button onClick={showName}>Натисни на мене</button>
      </div>
  );
}

export default App;
