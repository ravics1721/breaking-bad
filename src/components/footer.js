import React from "react";
import { useStyles } from "./css/footer.css";

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.footer}>
      <p>Made with 🚀🌈 by Ravi Bharti </p>
    </div>
  );
};

export default Footer;
