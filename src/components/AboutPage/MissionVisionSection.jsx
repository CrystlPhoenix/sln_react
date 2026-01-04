import { useEffect, useState } from "react";
import StatementCard from "./StatementCard";

export default function MissionVisionSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation shortly after mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 pt-15 gap-10">
      <StatementCard
        title="MISSION STATEMENT"
        animationClass={
          animate
            ? "opacity-100 translate-x-0"
            : "-translate-x-20 opacity-0"
        }
      >
        At SLN Engineering Limited, our mission is to deliver innovative, sustainable, and high-quality engineering solutions.
        We are committed to pushing the boundaries of what's possible by blending expertise with creativity.
        Our goal is to transform industries, empower communities, and build a future where progress is driven by precision, passion, and purpose.
      </StatementCard>

      <StatementCard
        title="VISION STATEMENT"
        animationClass={
          animate
            ? "opacity-100 translate-x-0"
            : "translate-x-20 opacity-0"
        }
      >
        At SLN, our vision is to become a global leader in engineering excellence — a force for positive change.
        We aspire to shape a connected and sustainable world through groundbreaking solutions that exceed expectations.
        By fostering innovation and embracing challenges, we aim to leave a lasting impact on the engineering landscape for generations to come.
      </StatementCard>
    </div>
  );
}
