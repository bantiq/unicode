import React from "react";

function App() {
  const state = {
    hrefs: [
      {href: '1.html', text: 'ссылка 1'},
      {href: '2.html', text: 'ссылка 2'},
      {href: '3.html', text: 'ссылка 3'},
    ]
  };
  let listState = state.hrefs.map((elem,index) =>
      <li key = { index }>
        <a href = {elem.href}>
          {elem.text}
        </a>
      </li>
  )
  return (
      <div>
        <ul>
          {listState}
        </ul>
      </div>
  );
}

export default App;
