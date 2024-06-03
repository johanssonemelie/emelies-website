import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-end font-black text-8xl mt-11 top-">Emelie Johansson</h1>
      <Marquee />
    </main>
  );
}
