import React, { useState } from 'react'

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState('Pedro')

  const handleChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='enter something...'
        onChange={handleChange}
      />{' '}
      {inputValue}
    </div>
  )
  // const [counter, setCounter] = useState(0);
  // const increment = () => {
  //   setCounter(counter + 1)
  // }
  // return (
  //   <div>
  //     {counter} <button onClick={increment}>Increment</button>{' '}
  //   </div>
  // )
}

export default StateTutorial
