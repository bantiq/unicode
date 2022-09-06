import React from "react";

function App() {
  let text1 = <p>текст1</p>;
  let text2 = <p>текст2</p>;
  return (
      <div>
        {text1}
        <p>!!!</p>
        {text2}
      </div>
  );
}

export default App;
