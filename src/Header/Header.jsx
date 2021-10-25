import mainIcon from "../images/mainIcon.png";
import {useStyles} from "./Header.styles";


export const Header = () => {
  const classes = useStyles()
return(
  <div className={classes.logoWrapper}>
    <img className={classes.logo} src={mainIcon} alt="logo" />
    <h2 className={classes.title}>Sing up with email</h2>
  </div>
  )
}