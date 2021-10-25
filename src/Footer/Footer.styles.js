import { makeStyles } from "@material-ui/core";

const styles = {
  footer: {
    margin: "0 0 18px 0",
  },
  text: {
    margin: 0,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#5B5B5B",
  },
  paragraph:{
    margin: "16px 0 0 0"
  },
  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#3C9C41",
  },
  '@media (min-width: 768px)': {
    footer: {
      margin: "0 0 35px 0",
    },
    paragraph:{
      margin: "20px 0 0 0"
    },
    text: {
      fontSize: "18px",
      lineHeight: "22px",
    },
  }
};

export const useStyles = makeStyles(styles, { name: "Footer" });
