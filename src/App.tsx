import React from 'react';

function App() {

  const [value, setValue] = React.useState(0)

  const increment = () => {
    setValue(value+1)
  }

  const decrement = () => {
    setValue(value-1)
  }

  return (
    <div className="App">
      <button className="add" onClick={increment}></button>
      <div className='display'>{value}</div>
      <button className="subtract" onClick={decrement}></button>
    </div>
  );
}

export default App;
