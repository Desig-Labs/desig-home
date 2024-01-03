import { useMemo } from 'react'

import Image from 'next/image'

import ease from 'static/images/services/ease.png'
import ease2 from 'static/images/services/ease.png'
import ease3 from 'static/images/services/ease.png'

const imageArr = [ease, ease2, ease3]

const DEFAULT_ROTATE = 90

export type WheelViewProps = { activeIdx?: number }
export default function WheelView({ activeIdx = 0 }: WheelViewProps) {
  const itemPercent = useMemo(() => 360 / imageArr.length, [])

  return (
    <div className="wheel-wrapped">
      <div
        className="wheel-wrapper-inner"
        style={{
          transform: `rotate(-${DEFAULT_ROTATE + itemPercent * activeIdx}deg)`,
        }}
      >
        {imageArr.map((img, idx) => (
          <div
            className="wheel-item"
            style={{
              transform: `rotate(${itemPercent * idx}deg)`,
            }}
            key={img.src}
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
                objectFit: 'contain',
              }}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
