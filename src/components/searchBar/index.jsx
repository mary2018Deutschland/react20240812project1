import styles from "./styles.module.css";
// import { useState } from "react";
function SearchBar({ onSearch, position, setPosition, location, setLocation }) {
  // const [position, setPosition] = useState('');
  // const [location, setLocation] = useState('');
  function handleSearch() {
    onSearch(position, location);
  }
  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="       Position    "
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="text"
        placeholder="|           City. Country"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
}
export default SearchBar;
