import { makeStyles } from "@material-ui/core";

const styles = {

  btnSignUp: {
    width: "308px",
    height: "50px",
    color: "white",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "none",
    backgroundColor: "#3C9C41",
    borderRadius: "16px",
    "&:hover": {
      backgroundColor: "#4DB252",
    },
    "&:active": {
      backgroundColor: "#318636",
    },
  },
  '@media (min-width: 768px)': {
    btnSignUp: {
      marginBottom: 10,
      width: "500px",
      height: "70px",
      fontSize: "18px",
      lineHeight: "22px",
    },
  }
};

export const useStyles = makeStyles(styles, { name: "Form" });