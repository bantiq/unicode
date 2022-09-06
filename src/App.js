import React from "react";

function App() {
  let showMessage = () => alert('hello');
  return (
      <div>
        <button onClick={showMessage}>Натисни на мене</button>
      </div>
  );
}

export default App;
