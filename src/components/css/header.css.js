import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import BreakingBadImg from "../../assets/breakingbad.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 250,
    background: green[900],
    backgroundImage: `url(${BreakingBadImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: theme.spacing(0, 0, 2),
  },
}));
