// import React, { useEffect, useState } from 'react';

// const StatCard = ({ number, label }) => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="text-white text-5xl lg:text-7xl font-bold flex items-center">
//         {number}
//         <span className="text-2xl lg:text-4xl ml-1 mt-2">+</span>
//       </div>
//       <div className="text-white mt-2">{label}</div>
//     </div>
//   );
// };

// const Sparkle = ({ style }) => {
//   return (
//     <div
//       className="absolute rounded-full bg-white"
//       style={style}
//     />
//   );
// };

// const StatsSection = () => {
//   const [sparkles, setSparkles] = useState([]);

//   useEffect(() => {
//     const generateSparkles = () => {
//       const newSparkles = [];
//       for (let i = 0; i < 50; i++) {
//         newSparkles.push({
//           id: i,
//           size: Math.random() * 6 + 2, // 2–8px
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           animationDuration: `${Math.random() * 2 + 2}s`, // ⬅️ 1–2s for faster motion
//           animationDelay: `${Math.random()}s`,
//           opacity: Math.random() * 0.5 + 0.4, // 0.4–0.9
//         });
//       }
//       setSparkles(newSparkles);
//     };

//     generateSparkles();
//   }, []);

//   return (
//     <div className='w-screen -mx-[calc((100vw-100%)/2)] bg-blue-800 flex items-center justify-center relative overflow-hidden py-20'>
//        {/* Sparkles */}
//        {sparkles.map((sparkle) => (
//         <Sparkle
//           key={sparkle.id}
//           style={{
//             width: `${sparkle.size}px`,
//             height: `${sparkle.size}px`,
//             left: sparkle.left,
//             top: sparkle.top,
//             opacity: sparkle.opacity,
//             animation: `float ${sparkle.animationDuration} ease-in-out infinite`,
//             animationDelay: sparkle.animationDelay,
//           }}
//         />
//       ))}
//         <div>

//       {/* Main Content */}
//       <div className="px-4 z-10 relative">
//         <h2 className="text-2xl font-bold text-white text-center mb-5">
//           Trusted for Reliable Electrical and Power Engineering Solutions
//         </h2>
//         <p className="text-white text-center mb-16 text-sm">
//           Delivering dependable engineering services that keep your systems running safely and efficiently.
//         </p>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
//           <StatCard number="100" label="Satisfied Clients" />
//           <StatCard number="200" label="Successful Referrals" />
//           <StatCard number="50" label="Partnered Businesses" />
//           <StatCard number="5" label="Years of Experience" />
//         </div>
//       </div>

//       {/* Keyframes */}
//       <style>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0) scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: translateX(-70px) scale(1.3); /* ⬅️ More movement */
//             opacity: 0.3;
//           }
//           100% {
//             transform: translateY(0) scale(1);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//     </div>

//   );
// };

// export default StatsSection;



import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

const StatCard = ({ number, label, startCount }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-white text-5xl lg:text-7xl font-bold flex items-center">
        {startCount ? (
          <CountUp end={number} duration={2} />
        ) : (
          0
        )}
        <span className="text-2xl lg:text-4xl ml-1 mt-2">+</span>
      </div>
      <div className="text-white mt-2">{label}</div>
    </div>
  );
};

const Sparkle = ({ style }) => {
  return (
    <div
      className="absolute rounded-full bg-white"
      style={style}
    />
  );
};

const StatsSection = () => {
  const [sparkles, setSparkles] = useState([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 50; i++) {
        newSparkles.push({
          id: i,
          size: Math.random() * 6 + 2,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 2 + 2}s`,
          animationDelay: `${Math.random()}s`,
          opacity: Math.random() * 0.5 + 0.4,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  return (
    <div
      ref={sectionRef}
      className='w-screen -mx-[calc((100vw-100%)/2)] bg-blue-800 flex items-center justify-center relative overflow-hidden py-20'
    >
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            left: sparkle.left,
            top: sparkle.top,
            opacity: sparkle.opacity,
            animation: `float ${sparkle.animationDuration} ease-in-out infinite`,
            animationDelay: sparkle.animationDelay,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="px-4 z-10 relative">
        <h2 className="text-2xl font-bold text-white text-center mb-5">
          Trusted for Reliable Electrical and Power Engineering Solutions
        </h2>
        <p className="text-white text-center mb-16 text-sm">
          Delivering dependable engineering services that keep your systems running safely and efficiently.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <StatCard number={100} label="Satisfied Clients" startCount={isInView} />
          <StatCard number={200} label="Successful Referrals" startCount={isInView} />
          <StatCard number={50} label="Partnered Businesses" startCount={isInView} />
          <StatCard number={5} label="Years of Experience" startCount={isInView} />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-70px) scale(1.3);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default StatsSection;

