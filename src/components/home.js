import React, { useState, useEffect } from "react";
import Card from "./cards";
import Header from "./header";
import { useStyles } from "./css/home.css";
import { API, filterCharacterByName } from "../utilities";
import Pagination from "./pagination";
import Footer from "./footer";

const Home = () => {
  const styles = useStyles();
  const [state, setState] = useState({
    isLoading: false,
    text: "",
    data: [],
    error: "",
    pageNo: 1,
  });
  useEffect(() => {
    API.getCharactersByPage({
      pageNo: state.pageNo,
    })
      .then((response) => {
        console.log({ data: response.data });
        setState({
          ...state,
          data: response.data,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          error: err.message,
        });
        console.log("Error🚧: ", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.pageNo]);

  function onChange(e) {
    let value = e.target.value;
    setState({
      ...state,
      text: value,
    });
  }
  function onSubmit(e) {
    e.preventDefault();
  }
  const onPageChange = (no) => {
    setState({
      ...state,
      pageNo: no * 10,
    });
  };
  return (
    <div className={styles.root}>
      <Header onChange={onChange} value={state.text} onSubmit={onSubmit} />
      <div className={styles.grid}>
        {filterCharacterByName(state.data, state.text).map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </div>
      <Pagination pageNo={state.pageNo} onClick={onPageChange} />
      <Footer />
    </div>
  );
};
export default Home;
