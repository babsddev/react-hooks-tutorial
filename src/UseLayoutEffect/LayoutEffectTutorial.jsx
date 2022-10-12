import React, { useLayoutEffect, useEffect, useRef } from 'react'

function LayoutEffectTutorial() {
  const inputRef = useRef(null)

  // This line of code below 👇 runs before the useEffect(), it renders 'Babs' before 'Hello'
  useLayoutEffect(() => {
    console.log('inputRef.current.value')
  }, [])

  useEffect(() => {
    inputRef.current.value = 'Hello'
  }, [])

  return (
    <div>
      <input ref={inputRef} value='Babs' style={{ width: 400, height: 50 }} />
    </div>
  )
}

export default LayoutEffectTutorial
