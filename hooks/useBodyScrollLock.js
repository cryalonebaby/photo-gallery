import { useState, useEffect } from "react";

const useBodyScrollLock = () => {
  let bodyStyle

  if(typeof window !== 'undefined') {
    bodyStyle = document.body.style
  }

  const [isLocked, setIsLocked] = useState(false) //bodyStyle?.overflowY === 'hidden'

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
  }, [isLocked, bodyStyle])

  const toggle = (state) => setIsLocked(state)

  return [isLocked, toggle]
}

export default useBodyScrollLock