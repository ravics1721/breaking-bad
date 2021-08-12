import React from "react";
import { useStyles } from "./css/search-box.css";

const SearchBox = ({ onSubmit, onChange, value }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder='Type character name..'
        />
      </form>
    </div>
  );
};
export default SearchBox;
