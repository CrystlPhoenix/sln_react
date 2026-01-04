import React from "react"
import { motion, useAnimation } from "framer-motion"

export function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className = "",
  ...props
}) {
  const controls = useAnimation()
  const isLeft = direction === "left"

  const animation = {
    x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
    transition: {
      duration: speed,
      ease: "linear",
      repeat: Infinity,
    },
  }

  React.useEffect(() => {
    controls.start(animation)
  }, [controls, speed, isLeft])

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      {...props}
    >
      <motion.div
        className="flex w-max mx-3"
        animate={controls}
        onMouseEnter={() => pauseOnHover && controls.stop()}
        onMouseLeave={() => pauseOnHover && controls.start(animation)}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export default Marquee
