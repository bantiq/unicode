import React from "react";

function App() {
  const person = {
    name: 'Иван',
    age: 25
  };
  return (
      <div>
        Ім'я: {person.name}, вік: {person.age}
      </div>
  );
}

export default App;
