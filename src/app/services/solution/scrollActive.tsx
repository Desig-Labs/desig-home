'use client'

import { Typography } from 'antd'
import { useEffect, useRef, useState } from 'react'

export type ScrollActiveItem = {
  title: string
  description: string
  icon: string
}

export type ScrollActiveProps = { items: ScrollActiveItem[] }
export default function ScrollActive({ items }: ScrollActiveProps) {
  const [percent, setPercent] = useState(0)
  const wrappedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrappedTarget = wrappedRef.current
    const screenHeight = window.innerHeight
    const thirdScreen = screenHeight / 1.5

    if (!wrappedTarget)
      return () => window.removeEventListener('scroll', () => {})
    window.addEventListener('scroll', () => {
      const wrappedBounding = wrappedTarget.getBoundingClientRect()

      if (wrappedBounding.top < thirdScreen) {
        const wrappedCount = wrappedBounding.top - thirdScreen
        const percent = Math.min(
          (Math.abs(wrappedCount) / wrappedBounding.height) * 100,
          100,
        )

        setPercent(percent)

        wrappedTarget.childNodes.forEach((node) => {
          if (node instanceof Element) {
            const nodeBounding = node.getBoundingClientRect()
            if (nodeBounding.top - thirdScreen + 25 >= 0)
              node.classList.remove('active')
            else node.classList.add('active')
          }
        })
      }

      return () => window.removeEventListener('scroll', () => {})
    })
  }, [])

  return (
    <div className="scroll-active-wrapped" ref={wrappedRef}>
      <div
        className="scroll-active-wrapped--line"
        style={{ height: `${percent}%` }}
      />
      {items.map(({ icon, description, title }, idx) => (
        <div className="scroll-active-wrapped--item" key={title + idx}>
          <div
            style={{
              width: 56,
              height: 56,
              marginBottom: 24,
            }}
            className="scroll-active-wrapped--item-dot"
          >
            <Typography.Text>{icon}</Typography.Text>
          </div>
          <Typography.Title level={5}>{title}</Typography.Title>
          <Typography.Text>{description}</Typography.Text>
        </div>
      ))}
    </div>
  )
}
