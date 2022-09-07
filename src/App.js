import React, {useState} from "react";

function App() {
    const [items, setItems] = useState({
        users: [
            { name: 'Коля', age: '30' },
            { name: 'Вася', age: '40' },
            { name: 'Петя', age: '50' },
        ]
    });
    const [value, setValue] = useState({
        name : '',
        age : ''
    })
    let handleChangeName = (e) => setValue({...value,name: e.target.value});
    let handleChangeAge = (e) => setValue({...value,age: e.target.value}) ;
    let handleClick = () => {
        setItems({
            ...items,
            ...items.users.push({
                name : value.name,
                age : value.age
            })
        });
        setValue({
            ...value,
            name : '',
            age : ''
        })
    }
    let listItems = items.users.map((elem, index) =>
        <tbody key={index}>
        <tr>
            <td style = {{border: '1px solid black',padding: '15px'}}>
                {elem.name}
            </td>
            <td style = {{border: '1px solid black',padding: '15px'}}>
                {elem.age}
            </td>
        </tr>
        </tbody>
    )
    return (
        <div>
            <table style = {{border: '1px solid black'}}>
                {listItems}
            </table>
            <input type="text"
                   value={value.name}
                   onChange={handleChangeName}
            />
            <input type="number"
                   value={value.age}
                   onChange={handleChangeAge}
            />
            <button onClick={handleClick}>Додати</button>
        </div>
    )
}

export default App;
