import React, {useState} from "react";

function App() {
    const [value, setValue] = useState('')

    let birthdayYear = new Date().getFullYear();
    let changeValue = () => value ?
        birthdayYear - value :
        false;

    return (
        <div>
            <input type="number" value={value}
                   onChange={(event) => setValue(event.target.value)}
            />
            <p>{changeValue()}</p>
        </div>
    );
}

export default App;
