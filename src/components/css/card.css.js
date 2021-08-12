import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: theme.palette.grey[200],
      color: theme.palette.common.black,
      width: 210,
      borderRadius: 5,
      boxShadow: theme.shadows[3],
      margin: theme.spacing(1.5),
      "&:hover": {
        boxShadow: theme.shadows[10],
      },
    },
    img: {
      width: "100%",
      height: 300,
      borderRadius: 5,
      background: green[800],
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      cursor: "pointer",
    },
    box: {
      width: "100%",
      height: "100%",
      borderRadius: 5,
      display: "flex",
      flexDirection: "column",
      color: theme.palette.common.white,
      justifyContent: "flex-end",
      "&:hover": {
        background: `${green[800]}88`,
        "&:nth-child(*)": {
          display: "block",
        },
      },
    },
    name: {
      fontWeight: 500,
      fontSize: 20,
      margin: theme.spacing(0, 1),
      fontFamily: `"Zen Dots", cursive`,
      textAlign: "center",
    },
    info: {
      fontWeight: 400,
      fontSize: 17,
      margin: theme.spacing(0, 1, 1),
      fontFamily: `"DM Mono", monospace`,
    },
    nickName: {
      fontWeight: 400,
      fontSize: 17,
      margin: theme.spacing(0, 1, 1),
      fontFamily: `"DM Mono", monospace`,
      textAlign: "center",
    },
    span: {
      color: green[600],
    },
  };
});
