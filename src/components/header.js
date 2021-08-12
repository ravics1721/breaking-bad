import React from "react";
import SearchBox from "./search-box";
import { useStyles } from "./css/header.css";

const Header = ({ onChange, onSubmit, value }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <SearchBox onChange={onChange} onSubmit={onSubmit} value={value} />
    </div>
  );
};
export default Header;
