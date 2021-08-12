import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey[200],
    color: theme.palette.common.black,
    width: 210,
    borderRadius: 5,
    boxShadow: theme.shadows[3],
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.grey[300]}55`,
    "&:hover": {
      boxShadow: theme.shadows[10],
    },
  },
  img: {
    width: "100%",
    height: 300,
    borderRadius: 5,
    background: theme.palette.grey[800],
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  name: {
    fontWeight: 500,
    fontSize: 20,
    color: theme.palette.common.white,
    margin: theme.spacing(0, 1),
    fontFamily: `"Zen Dots", cursive`,
  },
  nickName: {
    fontWeight: 400,
    fontSize: 17,
    color: theme.palette.common.white,
    margin: theme.spacing(0, 1, 1),
    fontFamily: `"DM Mono", monospace`,
  },
}));
