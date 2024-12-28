const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch albums");

  const albums = await response.json();
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id} className="rounded-lg bg-blue-500 p-4 shadow-lg">
          <h3 className="mb-2 font-bold text-gray-500">{album.title}</h3>
          <p className="text-gray-600">Album ID:{album.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
