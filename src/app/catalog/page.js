export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full items-center">
        <div className="flex h-12 w-full items-end justify-center">
          <h1 className="text-3xl font-semibold">
            Catalog
          </h1>
        </div>
        <div className="flex h-12 w-full items-end justify-center">
          <p>In this section you can find information about your favorite movies, as well as comments made by other viewers. You can also add add new movies if you want.</p>
        </div>

        <div className="flex h-12 w-full items-end justify-center">
          <button className="bg-blue-500 text-white rounded-md p-2 mt-2">
            <a href="/series/new">
              Add new series
            </a>
          </button>
        </div>

        <div>

        </div>
      </div>
    </main>
  );
}
