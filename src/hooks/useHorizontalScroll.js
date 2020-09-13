import { useRef, useEffect } from 'react'

function useHorizontalScroll() {
  const elRef = useRef()
  useEffect(() => {
    const el = elRef.current
    if (el) {
      console.log(el.scrollLeft, el.scrollHeight, el.scrollWidth)
      el.scrollTo({
        left: el.scrollWidth,
        // behavior: 'smooth',
      })
      const onWheel = (e) => {
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        })
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])
  return elRef
}

export default useHorizontalScroll
