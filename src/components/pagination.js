/* eslint-disable eqeqeq */
import React from "react";
import { useStyles } from "./css/pagination.css";
import { green, common, grey } from "@material-ui/core/colors";

const Pagination = ({ pageLength = 7, onClick, pageNo }) => {
  const styles = useStyles();
  const pages = [];
  for (let index = 0; index < pageLength; index++) {
    pages.push((index + 1).toString());
  }

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        {pages.map((no, index) => {
          return (
            <div
              onClick={() => onClick(index)}
              className={styles.button}
              style={{
                background: pageNo / 10 === index ? green[800] : grey[300],
                color: pageNo / 10 === index ? common.white : common.black,
              }}
            >
              {no}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
