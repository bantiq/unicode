import React, {useState} from "react";

function App() {
    const [value, setValue] = useState('')
    return (
        <div>
            <input type="text" value={value}
                   onChange={(e) => setValue(e.target.value)}
            />
            <p>{value.toUpperCase()}</p>
        </div>
    );
}

export default App;
