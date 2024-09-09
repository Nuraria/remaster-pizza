import React from "react";
import styles from "./Search.module.scss";
import CROSS from "../../assets/svg/search/sross.svg";
import SEARCH from "../../assets/svg/search/search.svg";
import { AppContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { setValueText } = React.useContext(AppContext);
  const inputRef = React.useRef();
  const onClickClear = () => {
    setValueText("");
    setValue("");
    inputRef.current.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setValueText(str);
    }, 1000),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={SEARCH} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск..."
      />
      {value && (
        <img
          onClick={() => onClickClear()}
          className={styles.cross}
          src={CROSS}
          alt="cross"
        />
      )}
    </div>
  );
};

export default Search;
