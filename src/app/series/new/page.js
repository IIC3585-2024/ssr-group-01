export default function newSerie() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="lg:w-3/4 md:w-3/4 items-center m-2">
        <div className="flex h-12 w-full justify-left">
          <h1 className="text-3xl font-semibold">
            New series
          </h1>
        </div>

        <div className="flex w-full items-end justify-center">
          <form className="w-full" method="POST" action="api/series">
            <label className="text-md font-semibold text-white items-center">Series name</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3" type="text" />
            <br />
            <label className="text-md font-semibold text-white items-center">Streaming service</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3" type="text" />
            <br />
            <label className="text-md font-semibold text-white items-center">Episodes per season (write in format 1,2,3)</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3" type="text" />
            <br />
            <label className="text-md font-semibold text-white items-center">Description</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3" type="text" />
            <br />
            <label className="text-md font-semibold text-white items-center">Category</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3" type="text" />
            <br />
            <label className="text-md font-semibold text-white items-center">Poster URL (optional)</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3" type="text" />
            <br />
            
            <button className="bg-blue-500 text-white rounded-md p-2 mt-2" type="submit">Add</button>
          </form>
        </div>
      </div>
    </main>
  );
}