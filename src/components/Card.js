import React from "react";
import { useStyles } from "./css/card.css";

const cr = {
  char_id: 1,
  name: "Walter White",
  birthday: "09-07-1958",
  occupation: ["High School Chemistry Teacher", "Meth King Pin"],
  img: "https://images.amcnetworks.com/amc.com/wp-content/uploa...",
  status: "Deceased",
  appearance: [1, 2, 3, 4, 5],
  nickname: "Heisenberg",
  portrayed: "Bryan Cranston",
  better_call_saul_appearance: [],
};

const Card = ({ data = cr }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${data.img})`, backgroundPosition: "center" }}
      >
        <div className={styles.box}>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.nickName}> {data.nickname}</p>
          <p className={styles.info}>
            {" "}
            <span className={styles.span}>Occupation:</span>{" "}
            {data.occupation.map((item, index) => {
              let comma = index + 1 === data.occupation.length ? "" : ", ";
              return item + comma;
            })}
          </p>
          <p className={styles.info}>
            <span className={styles.span}>Birthday:</span> {data.birthday}
          </p>
          <p className={styles.info}>
            <span className={styles.span}>Status:</span> {data.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
