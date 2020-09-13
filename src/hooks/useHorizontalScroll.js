import { useRef, useEffect, useState } from 'react'

function useHorizontalScroll() {
  const [hover, setHover] = useState(false)
  const elRef = useRef()

  const handleMouseOver = () => setHover(true)
  const handleMouseOut = () => setHover(false)

  useEffect(() => {
    const el = elRef.current
    if (el) {
      el.addEventListener('mouseover', handleMouseOver)
      el.addEventListener('mouseout', handleMouseOut)

      // go to the end at first render
      el.scrollTo({ left: el.scrollWidth })

      // on wheel event
      const onWheel = (e) => {
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        })
      }

      el.addEventListener('wheel', onWheel)

      return () => {
        el.removeEventListener('mouseover', handleMouseOver)
        el.removeEventListener('mouseout', handleMouseOut)
        el.removeEventListener('wheel', onWheel)
      }
    }
  }, [])
  return [elRef, hover]
}

export default useHorizontalScroll
