import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    width: "100%",
  },
  input: {
    background: theme.palette.common.white,
    color: green[800],
    padding: theme.spacing(1),
    width: "25rem",
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: 5,
    outline: "none",
    fontSize: 17,
    "&:active": {
      outline: `${green[800]} solid 2px`,
    },
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
}));
