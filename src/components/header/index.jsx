import styles from "./styles.module.css";
import Nav from "../nav";
import SearchBar from "../searchBar";
import { useState } from "react";

function Header() {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (position, location) => {
    //любая логика в будущем
    console.log("Должность:", position);
    console.log("Город/страна:", location);
  };
  return (
    <div className={styles.headerContainer}>
      <Nav />
      <div className={styles.mainContainerHeader}>
        <h1 style={{ fontSize: "64px", fontWeight: "700" }}>
          {" "}
          One click <br />
          and work in your pocket{" "}
        </h1>
        <SearchBar
          onSearch={handleSearch}
          position={position}
          setPosition={setPosition}
          location={location}
          setLocation={setLocation}
        />
      </div>
    </div>
  );
}

export default Header;
