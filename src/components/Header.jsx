/* eslint-disable react/prop-types */
export default function Header({ search, getMoviesSearch }) {
  function handleChange(event) {
    const searchValue = event.target.value;

    getMoviesSearch(searchValue);
  }

  return (
    <header className="flex p-4 bg-purple-600 text-yellow-50 content-center font-bold w-full">
      <h1 className="grow text-3xl">Movie List</h1>
      <form className={search ? "flex content-center" : "hidden"}>
        <input
          type="text"
          placeholder="Procure seu filme aqui!"
          className="rounded-lg p-2 text-black"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
