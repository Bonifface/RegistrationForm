import { makeStyles } from "@material-ui/core";

const styles = {
  genderContainer: {
    margin: "0 16px 0 16px",
    width: "308px",
    height: "108px",
  },
  genderWrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  genderText: {
    margin: "0 0 8px 0",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "left",
    color: "#5B5B5B",
  },
  maleIcon: {
    height: 32,
    width: 32,
  },
  activeIcon: {
    fill: "#3C9C41",
  },
  otherIcon: {
    height: 32,
    width: 30,
  },
  femaleIcon: {
    height: 32,
    width: 20,
  },
  btn1: {
    border: "1px solid #CACACA",
    boxSizing: "border-box",
    borderRadius: "16px",
  },
  btnGender: {
    textTransform: "none",
    width: "90px",
    height: "80px",
    border: "1px solid #CACACA",
    boxSizing: "border-box",
    borderRadius: "16px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    background: "white",

    "&:hover": {
      background: "white",
    },
  },
  btnGenderActive: {
    textTransform: "none",
    width: "90px",
    height: "80px",
    border: "1px solid #3C9C41",
    boxSizing: "border-box",
    borderRadius: "16px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    background: "white",

    "&:hover": {
      background: "white",
    },
  },
  btnText: {
    paddingTop: 3,
  },
  activeText: {
    paddingTop: 3,
    color: "#3C9C41",
  },

  '@media (min-width: 768px)': {
    genderContainer: {
      width: "500px",
      height: "134px",
      margin: "0 35px 0 35px",
    },
    btnGender:{
      width: "156px",
      height: "100px",
    },
    genderText:{
      marginBottom: 12,
      fontSize: 18,
      lineHeight: "22px",
    },
    btnGenderActive: {
      width: "156px",
      height: "100px",
    }
  }
};

export const useStyles = makeStyles(styles, { name: "Gender" });
