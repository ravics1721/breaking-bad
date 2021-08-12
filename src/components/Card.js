import React from "react";
import { useStyles } from "./css/card.css";

const cr = {
  char_id: 1,
  name: "Walter White",
  birthday: "09-07-1958",
  occupation: ["High School Chemistry Teacher", "Meth King Pin"],
  img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  status: "Deceased",
  appearance: [1, 2, 3, 4, 5],
  nickname: "Heisenberg",
  portrayed: "Bryan Cranston",
};

const Card = ({ data = cr }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.img} style={{ backgroundImage: `url(${data.img})` }}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.nickName}> {data.nickname}</p>
      </div>
    </div>
  );
};

export default Card;
