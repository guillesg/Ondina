import Image from "next/image";

export default function BackgroundSection({
  src,
  children,
}: {
  src: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center p-6">
      <Image
        src={src}
        alt="background"
        fill
        className="object-cover blur-[1px] brightness-75"
        priority
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
