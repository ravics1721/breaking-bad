import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useStyles } from "./css/details-card.css";
import { API } from "../utilities";
import { Button } from "@material-ui/core";

const DetailsCard = () => {
  const { id } = useParams();
  const history = useHistory();
  const styles = useStyles();
  const [character, setCharacter] = useState({});
  const [qoutes, setQoutes] = useState([]);
  useEffect(() => {
    API.getCharactersById({
      id: id,
    })
      .then((response) => {
        setCharacter(response.data[0]);
        console.log({
          author: response.data,
        });
        API.getAllQuotesByAuthor({
          author: response.data[0].name,
        })
          .then((res) => {
            setQoutes(res.data);
            console.log({
              qoutes: res.data,
            });
          })
          .catch((err) => {
            console.log("Error: ", err);
          });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <Button
        className={styles.backButton}
        onClick={goBack}
        variant='outlined'
        color='primary'
        size='small'
      >
        Back
      </Button>
      <div className={styles.root}>
        <div>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${character.img})`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className={styles.box}>
            <p className={styles.name}>
              <span className={styles.span}>Name: </span>
              {character?.name}
            </p>
            <p className={styles.nickName}>
              <span className={styles.span}>Nick Name:</span> {character?.nickname}
            </p>
            <p className={styles.info}>
              {" "}
              <span className={styles.span}>Occup.:</span>{" "}
              {character?.occupation?.map((item, index) => {
                let comma = index + 1 === character?.occupation?.length ? "" : ", ";
                return item + comma;
              })}
            </p>
            <p className={styles.info}>
              <span className={styles.span}>D.O.B:</span> {character.birthday}
            </p>
            <p className={styles.info}>
              <span className={styles.span}>Status:</span> {character.status}
            </p>
            <p className={styles.info}>
              <span className={styles.span}>Actor:</span> {character.portrayed}
            </p>
            <p className={styles.info}>
              <span className={styles.span}>Season:</span>{" "}
              {character?.appearance?.map((item, index) => {
                let comma = index + 1 === character.appearance.length ? "" : ", ";
                return item + comma;
              })}
            </p>
          </div>
        </div>
        <div className={styles.divider}>Quotes</div>
        <div className={styles.quoteBox}>
          {qoutes.map((item, index) => {
            return (
              <div key={index}>
                <p className={styles.quote}>
                  {" "}
                  <span className={styles.span}>{index + 1}:</span> {item.quote}
                </p>
                <p className={styles.author}>{item.author}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
