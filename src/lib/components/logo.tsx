import Image from "next/image"

type Props = {
  className?: string
  variant?: "full" | "mark"
}

export default function Logo({ className = "", variant = "full" }: Props) {
  if (variant === "mark") {
    return (
      <Image
        src="/icon.png"
        alt="Soul Tye"
        width={80}
        height={80}
        className={className || "h-10 w-10"}
        priority
      />
    )
  }
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/icon.png"
        alt="Soul Tye"
        width={80}
        height={80}
        className="h-11 w-11 object-contain"
        priority
      />
      <div className="leading-none">
        <div className="font-display text-xl font-black tracking-tight text-ink">
          Soul Tye
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-tomato font-semibold">
          Brooklyn · Est. 2021
        </div>
      </div>
    </div>
  )
}
