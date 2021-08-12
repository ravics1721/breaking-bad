/* eslint-disable no-dupe-keys */
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: "100%",
    background: theme.palette.grey[300],
    margin: theme.spacing(2, 0, 0),
  },
}));
