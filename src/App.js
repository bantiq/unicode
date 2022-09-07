import React, {useState} from "react";

function App() {
  const [str, setStr] = useState('')
  let arrSplit = str.split(' ')
  return (
      <div>
        <input type="text" value={str}
               onChange={(e) => setStr(e.target.value)}
        />
        <p>{arrSplit[0]}</p>
        <p>{arrSplit[1]}</p>
        <p>{arrSplit[2]}</p>
      </div>
  );
}

export default App;
