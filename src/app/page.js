import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Banner from "@/components/homepage/banner";
import Friends from "@/components/homepage/friends";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Banner />
        <Friends />
      </main>
      <Footer />
    </div>
  );
}
