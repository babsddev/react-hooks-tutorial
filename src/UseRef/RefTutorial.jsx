import React, { useRef } from 'react'

const RefTutorial = () => {
  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.value = ''
  }

  return (
    <div>
      <h1>Pedro</h1>
      <input type='text' placeholder='Ex...' ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial
