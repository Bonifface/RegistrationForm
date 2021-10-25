import { makeStyles } from "@material-ui/core";

const styles = {
  "@global": {
    body: {
      margin: 0,
      padding: 0,
    },
  },
  container: {
    backgroundColor: "#E5E5E5",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "16px",
    textAlign: "center",
    // maxHeight: 711,
    maxWidth: 340,
    // height: "100%",
    width: "100%",
  },
  '@media (min-width: 768px)': {
    wrapper: {
      maxWidth: 570,

    }
  }
};

export const useStyles = makeStyles(styles, { name: "App" });
