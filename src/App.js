import React, {useState} from "react";

function App() {
    const [value, setValue] = useState({
        surname : '',
        name : '',
        fatherName : '',
        returnValue : ''
    })
    let handleChangeSurname = (event) =>
        setValue({
            ...value
            ,surname : event.target.value
        })
    ;
    let handleChangeName = (event) =>
        setValue({
            ...value
            ,name : event.target.value
        })
    ;
    let handleChangeFatherName = (event) =>
        setValue({
            ...value
            ,fatherName : event.target.value
        })
    ;
    let handleClick = () => {
        setValue({
            ...value,
            returnValue :
                value.surname + ' ' +
                value.name + ' ' +
                value.fatherName,
            surname : '',
            name : '',
            fatherName: ''
        })
        console.log(value)
    }

    return (
        <div>
            <input type="text"
                   onChange={handleChangeSurname}
                   value={value.surname}
            />
            <input type="text"
                   onChange={handleChangeName}
                   value={value.name}
            />
            <input type="text"
                   onChange={handleChangeFatherName}
                   value={value.fatherName}
            />
            <button onClick={handleClick}>Submit</button>
            <p>{value.returnValue}</p>
        </div>
    );
}

export default App;
