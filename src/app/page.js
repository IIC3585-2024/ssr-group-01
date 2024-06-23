import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="w-full items-center">
        <div className="fixed flex h-48 w-full items-end justify-center top-0">
          <h1 className="text-3xl font-semibold">
            Welcome to NextFilms
          </h1>
        </div>
      </div>
    </main>
  );
}
