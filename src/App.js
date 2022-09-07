import React, {useState} from "react";

function App() {
    const [state, setState] = useState({
        hrefs: [
            {href: '1.html', text: 'Посилання 1'},
            {href: '2.html', text: 'Посилання 2'},
            {href: '3.html', text: 'Посилання 3'},
        ]
    });
    const [value, setValue] = useState({
        linkValue : '',
        textValue : '',
    })
    let listState = state.hrefs.map((elem,index) =>
        <li key={index}>
            <a href={elem.href}>{elem.text}</a>
        </li>
    )
    let changeLinkValue = (event) => setValue({...value,linkValue: event.target.value})
    let changeTextValue = (event) => setValue({...value,textValue: event.target.value})
    let handleClick = () => {
        setState({...state, ...state.hrefs.push({
                href: value.linkValue,
                text: value.textValue
            })
        })
        setValue({
            ...value,
            linkValue : '',
            textValue : ''
        })
    }
    return (
        <div>
            <ul>
                {listState}
            </ul>
            <input type="text"
                   placeholder='Посилання'
                   value={value.linkValue}
                   onChange={changeLinkValue}
            />
            <input type="text"
                   placeholder='Текст'
                   value={value.textValue}
                   onChange={changeTextValue}
            />
            <button onClick={handleClick}>Додати</button>
        </div>
    )


}

export default App;
