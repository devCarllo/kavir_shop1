import { createQuery } from "../helpers/helpers";

import styles from "../../styles/Search.module.css";

const Search = ({ searchValue, setSearchValue, setQuery, inputRef }) => {
  const searchHandler = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchValue(value);
    setQuery((query) => createQuery(query, { search: value }));
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={searchValue}
        onChange={searchHandler}
        className={styles.search_input}
      />
    </>
  );
};

export default Search;
