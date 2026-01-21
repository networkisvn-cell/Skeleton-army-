import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStatus from "@/components/LiveStatus";
import Stats from "@/components/Stats";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MusicPlayer />
      <Navbar />
      <Hero />
      <LiveStatus isLive={true} />
      <Stats />
      <Footer />
    </>
  );
}
