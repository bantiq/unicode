import React from "react";

function App() {
  const state  = {
    show: true,
    name: 'Иван'
  };
  function showMessage(){
      if (state.show){
          return <p>Привет, {state.name}!</p>
      }
      return <p>Пока, {state.name}</p>
  }
  return (
      <div>
          {showMessage()}
      </div>
  );
}

export default App;
