import { useStyles } from "./Footer.styles";

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.text}>
        <p className={classes.paragraph}>
          Already have an account?{" "}
          <a className={classes.link} href="#">
            Log in
          </a>
        </p>
      </div>
      <div className={classes.text}>
        <p className={classes.paragraph}>
          Review privacy and disclosures{" "}
          <a className={classes.link} href="#">
            here
          </a>
        </p>
      </div>
    </div>
  );
};
