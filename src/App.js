import React from "react";

function App() {
    let getNum1 = () => 1;
    let getNum2 = () => 2;

  return (
      <div>
          текст {getNum1() + getNum2()}
      </div>
  );
}

export default App;
