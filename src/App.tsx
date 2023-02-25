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
      <button className="add" onClick={increment}>+</button>
      <div className='display'><h1>{value}</h1></div>
      <button className="subtract" onClick={decrement}>-</button>
    </div>
  );
}

export default App;
