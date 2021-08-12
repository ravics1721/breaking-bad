/* eslint-disable no-dupe-keys */
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey[200],
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  button: {
    width: 50,
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    fontSize: 20,
    textAlign: "center",
    margin: theme.spacing(1),
    boxShadow: theme.shadows[1],
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
  },
}));
