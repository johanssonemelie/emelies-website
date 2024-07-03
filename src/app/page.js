import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <div className="top-content-container flex justify-evenly mt-10">
      <h1 className="font-black text-8xl">Emelie <br /> Johansson</h1>
      <div className="border-4 border-black">
      <Image 
        src="/IMG_7833_Original.jpg"
        width={250}
        height={350}
        alt="Profile picture"
      />
      </div>
      </div>
      <div className="bottom-content-container mt-10">
      <Marquee />
      <Image
        src="/Two_flowers.svg"
        width={280}
        height={420}
        alt="Illustrated monstera flower"
      />
      </div>
      <Footer />
    </main>
  );
}
