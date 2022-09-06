import React from "react";

function App() {
  let show = true;
  let showBlock = () => show ? 'текст 1' : 'текст 2' ;
  return (
      <div>{showBlock()}</div>
  );
}

export default App;
