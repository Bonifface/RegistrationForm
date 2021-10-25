import { makeStyles } from "@material-ui/core";

const styles = {
  wrapper: {
    margin: "20px 0 20px 0",
  },
  formControl: {
    // width: "308px",
    marginTop: "20px",
  },
  title: {
    margin: "0 0 8px 0",
    textAlign: "left",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#5B5B5B",
  },
  inputWrapper: {
    position: "relative",
  },
  img: {
    position: "absolute",
    top: "10px",
    right: "18px",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
  inputFieldNew: {
    alignItems: "center",
    width: "308px",
    height: "50px",
    paddingLeft: "16px",
    paddingRight: "55px",
    boxSizing: "border-box",
    border: "1px solid #C1C1C1",
    outline: "none",
    borderRadius: "16px",
    "&::placeholder": {
      color: "#C1C1C1",
    },
    "&:focus": {
      border: "1px solid #87D78B",
    },
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#5B5B5B",
  },
  inputFieldError: {
    width: "308px",
    height: "50px",
    paddingLeft: "16px",
    paddingRight: "55px",
    boxSizing: "border-box",
    border: "1px solid #D23737",
    outline: "none",
    borderRadius: "16px",
    "&::placeholder": {
      color: "#C1C1C1",
    },
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#5B5B5B",
  },
  error: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "left",
    color: "#D23737",
  },
  "@media (min-width: 768px)": {
    wrapper: {
      margin: "30px 0 30px 0",
    },
    formControl: {
      marginTop: "30px",
    },

    title: {
      marginBottom: 12,
      fontSize: "18px",
      lineHeight: "22px",
    },
    img: {
      position: "absolute",
      top: "20px",
      right: "27px",
    },
    inputFieldNew: {
      width: "500px",
      height: "70px",
      paddingLeft: "25px",
      paddingRight: "65px",
      fontSize: "18px",
      lineHeight: "22px",
    },
    inputFieldError: {
      width: "500px",
      height: "70px",
      paddingLeft: "25px",
      paddingRight: "65px",
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
};

export const useStyles = makeStyles(styles, { name: "TextField" });
