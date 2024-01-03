import { useMemo } from 'react'

import Image from 'next/image'

const DEFAULT_ROTATE = 90

export type WheelViewProps = { items: string[]; activeIdx?: number }
export default function WheelView({ activeIdx = 0, items }: WheelViewProps) {
  const itemPercent = useMemo(() => 360 / items.length, [items.length])

  return (
    <div className="wheel-wrapped">
      <div
        className="wheel-wrapper-inner"
        style={{
          transform: `rotate(-${DEFAULT_ROTATE + itemPercent * activeIdx}deg)`,
        }}
      >
        {items.map((img, idx) => (
          <div
            className="wheel-item"
            style={{
              transform: `rotate(${itemPercent * idx}deg)`,
            }}
            key={img}
          >
            <Image
              src={img}
              alt="slide"
              style={{
                opacity: activeIdx === idx ? 1 : 0.5,
                filter: activeIdx === idx ? 'blur(0px)' : 'blur(15px)',
                transform: `translateY(-50%) rotate(90deg) scale(${
                  activeIdx === idx ? 1 : 0.4
                })`,
              }}
              height={300}
              width={300}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
