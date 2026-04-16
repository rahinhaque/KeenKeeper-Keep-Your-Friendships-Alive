import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4 bg-base-200">
        <div className="card bg-base-100 w-full max-w-md shadow-xl">
          <div className="card-body">
            <h2 className="card-title">KeenKeeper</h2>
            <p>Keep Your Friendships Alive!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
