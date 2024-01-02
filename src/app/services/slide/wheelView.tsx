import SOCIAL_RECOVERY from 'static/images/wallet/feature/social-recovery.png'
import CHATTING from 'static/images/wallet/feature/chatting.png'
import NOTIFICATION from 'static/images/wallet/feature/noti.png'
import Image from 'next/image'
import { useMemo } from 'react'

const imageArr = [SOCIAL_RECOVERY, CHATTING, NOTIFICATION]

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
                  activeIdx === idx ? 1 : 0.2
                })`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
