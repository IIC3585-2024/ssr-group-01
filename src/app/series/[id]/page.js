'use client'

import { usePathname } from 'next/navigation';

function getSerieInfo(id) {
  return {
    id,
    name: 'The Witcher',
    streaming: 'Netflix',
    description: 'The Witcher is a Polish-American fantasy drama streaming television series produced by Lauren Schmidt Hissrich. It is based on the book series of the same name by Polish writer Andrzej Sapkowski.',
    seasons: 2,
    episodes: [16,15],
    rating: 8.2,
    rating_count: 10,
    category: 'Fantasy',
    image: 'https://picsum.photos/300/450',
    comments: [{ user: 'John', comment: 'I love this show' }, { user: 'Jane', comment: 'I love this show too'}]
  };

}

export default function Serie() {
  const pathname = usePathname()
  const  id  = pathname.split('/').pop();

  const serie = getSerieInfo(id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full items-center">
        <div className="flex h-12 w-full items-end justify-center mb-3">
          <h1 className="text-3xl font-semibold">
            {serie.name}
          </h1>
        </div>

        <div className="items-center lg:grid lg:grid-cols-3 gap-4 mb-4">
          <div className="items-center">
            <img src={serie.image} alt="The Witcher" className="mx-auto shadow-[1px_1px_10px_2px_rgba(255,255,255,1)]" style={{ width: '300px', height: '450px', borderRadius: '10px' }} />
          </div>
          <div className="col-span-2 m-4 text-2xl">
            <p className="mb-3">{serie.description}</p>
            <p className="mb-3">Streaming: {serie.streaming}</p>
            <p className="mb-3">Episodes per season:</p>
            <ul className="mb-3 text-[#aaaaaa]">
              {serie.episodes.map((episodes, index) => (
                <li key={index} className="mb-1">Season {index + 1}: {episodes}</li>
              ))}
            </ul>
            <p>Category: {serie.category}</p>
          </div>
        </div>

        <div className="flex grid w-full justify-center text-2xl">
          <p>Rating: {serie.rating} ({serie.rating_count})</p>
        </div>

        <div>
          <div className="flex justify-center m-2 text-2xl">
            <p>Comments:</p>
          </div>

          <div className="justify-center items-center m-2">
            {serie.comments.length === 0 ? <p>No comments yet</p> : serie.comments.map((comment, index) => (
              <div key={index} className="flex-col m-2">
                <p>{comment.user}</p>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center">
          <p>Please log in to post a comment</p>
        </div>
      </div>
    </main>
  );
}