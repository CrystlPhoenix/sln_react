// StatementCard.jsx
export default function StatementCard({ title, children, animationClass }) {
    return (
      <div
        className={`bg-blue-900 text-white py-8 px-6 transition-transform duration-700 ease-out ${animationClass}`}
      >
        <h1 className="text-lg lg:text-2xl mb-5 font-semibold">{title}</h1>
        <p className="leading-relaxed text-sm lg:text-[1rem]">{children}</p>
      </div>
    );
  }
  