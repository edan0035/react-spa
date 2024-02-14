import {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  function increase() {
    let newCount = count + 1
    setCount(newCount)
  }

  function decrease() {
    let newCount = count - 1
    setCount(newCount)
  }

  function reset() {
    setCount(0)
  }

  return (
      <div className='counter'>
        <h1>{count}</h1>
        <div className='buttons-group'>
          <button onClick={() => increase()}>➕ Increase</button>
          <button onClick={() => decrease()}>➖ Decrease</button>
          <button onClick={() => reset()}>🗑️ Reset</button>
        </div>
      </div>
  )
}

export default Counter