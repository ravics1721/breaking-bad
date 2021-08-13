import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      //   background: theme.palette.grey[200],
      color: theme.palette.common.black,
      borderRadius: 5,
      margin: theme.spacing(1.5),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: 300,
      height: 400,
      borderRadius: 5,
      background: green[800],
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      cursor: "pointer",
      margin: "10px auto ",
    },
    box: {
      borderRadius: 5,
      display: "flex",
      flexDirection: "column",
      color: theme.palette.common.white,
      justifyContent: "flex-end",
      textAlign: "center",
    },
    name: {
      fontWeight: 500,
      fontSize: 20,
      margin: theme.spacing(0, 1),
      fontFamily: `"Zen Dots", cursive`,
      color: theme.palette.common.black,
    },
    info: {
      fontWeight: 400,
      fontSize: 17,
      margin: theme.spacing(0, 1, 1),
      fontFamily: `"DM Mono", monospace`,
      color: theme.palette.common.black,
    },
    nickName: {
      fontWeight: 400,
      fontSize: 17,
      margin: theme.spacing(0, 1, 1),
      fontFamily: `"DM Mono", monospace`,
      color: theme.palette.common.black,
    },
    span: {
      color: green[600],
      fontSize: 15,
    },
    link: {
      textDecoration: "none",
    },
    divider: {
      fontSize: 20,
      fontWeight: 700,
      border: "none",
      borderBottom: `2px solid ${green[700]}`,
    },
    quote: {
      fontSize: 17,
      fontWeight: 600,
      fontFamily: `"DM Mono", monospace`,
      margin: theme.spacing(1, 0, 0),
    },
    author: {
      fontSize: 15,
      fontWeight: 400,
      color: theme.palette.grey[700],
      margin: 0,
    },
    quoteBox: {
      width: "50%",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    backButton: {
      margin: theme.spacing(1),
    },
  };
});
