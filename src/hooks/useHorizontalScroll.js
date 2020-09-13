import { useRef, useEffect, useState, createRef } from 'react'

function useHorizontalScroll(nMonth) {
  const inputRef = useRef([])
  const elRef = useRef()
  const posRef = createRef()
  const [hover, setHover] = useState(false)
  const [month, setMonth] = useState(nMonth)

  const handleMouseOver = () => setHover(true)
  const handleMouseOut = () => setHover(false)

  const handleScroll = () => {
    if (!inputRef.current) return
    if (!elRef.current) return

    const current = elRef.current.scrollLeft
    const direction = current - posRef.current > 0

    posRef.current = current

    for (let i = 0; i < inputRef.current.length; i++) {
      if (!inputRef.current[i]) continue
      const boundRect = inputRef.current[i].getBoundingClientRect()
      const left = boundRect.left

      if (left >= boundRect.width && left <= window.innerWidth) {
        if (direction) setMonth(i)
        else setMonth(i - 1)
      }
    }
  }

  const handleWheel = (e) => {
    e.preventDefault()
    const el = elRef.current
    el.scrollTo({
      left: el.scrollLeft + e.deltaY,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    inputRef.current = new Array(nMonth)
  }, [])

  useEffect(() => {
    const el = elRef.current
    if (el) {
      el.addEventListener('mouseover', handleMouseOver)
      el.addEventListener('mouseout', handleMouseOut)
      el.addEventListener('scroll', handleScroll)
      el.addEventListener('wheel', handleWheel)

      // go to the end at first render
      el.scrollTo({ left: el.scrollWidth })
      posRef.current = el.scrollLeft

      return () => {
        el.removeEventListener('mouseover', handleMouseOver)
        el.removeEventListener('mouseout', handleMouseOut)
        el.removeEventListener('wheel', handleWheel)
        el.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return [elRef, hover, inputRef, month]
}

export default useHorizontalScroll
