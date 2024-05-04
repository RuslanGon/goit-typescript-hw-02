import css from "./SearchBar.module.css";
const SearchBar = ({ onSetSearchQuery, toast }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    if (value.trim() === "") {
      toast("Please enter text to search for images!", {
        icon: "👀",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      return;
    }
    onSetSearchQuery(value.trim());
    e.target.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <input
          className={css.searchField}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} title="Pres for search" type="submit">
          🔎
        </button>
      </form>
    </header>
  );
};

export default SearchBar;