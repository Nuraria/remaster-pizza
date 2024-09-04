import React from "react";
import styles from "./Search.module.scss";
import CROSS from "../../assets/svg/search/sross.svg";
import SEARCH from "../../assets/svg/search/search.svg";
import { AppContext } from "../../App";

const Search = () => {
  const { valueText, setValueText } = React.useContext(AppContext);

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={SEARCH} alt="search" />
      <input
        value={valueText}
        onChange={(e) => setValueText(e.target.value)}
        className={styles.input}
        placeholder="Поиск..."
      />
      {valueText && (
        <img
          onClick={() => setValueText("")}
          className={styles.cross}
          src={CROSS}
          alt="cross"
        />
      )}
    </div>
  );
};

export default Search;
