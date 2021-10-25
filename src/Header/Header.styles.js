import { makeStyles } from "@material-ui/core";

const styles = {
  logoWrapper: {
    marginTop: "25px",
  },
  logo: {
    width: "55px",
    height: "56px",
  },
  title: {
    margin: "21px 0 24px 0",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#5B5B5B",
    lineHeight: "29px",
  },
  '@media (min-width: 768px)': {
    logoWrapper:{
      marginTop: "29px",
    },
    logo: {
      width: "80px",
      height: "82px",
    },
    title: {
      margin: "24px 0 35px 0",
      fontSize: "24px",
      color: "#5B5B5B",
      lineHeight: "29px",
    },
  }
};

export const useStyles = makeStyles(styles, { name: "Header" });