"use client";

export default function FloatingButton({
  onClick,
  visible = true,
}: {
  onClick: () => void;
  visible?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Abrir categorías"
      className={`
        fixed bottom-6 left-6
        w-14 h-14 rounded-full
        bg-[#3FA9F5] text-white
        flex items-center justify-center
        text-3xl shadow-lg
        hover:scale-105 transition-transform
        lg:hidden
        z-30

        transform transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      +
    </button>
  );
}
