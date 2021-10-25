import { useStyles } from "./TextField.styles";
import { useState } from "react";
import eye from "../images/eye.png";
import FormControl from "@material-ui/core/FormControl";

export const TextField = ({ value, handleChange, touched, errors }) => {
  console.log(touched, errors);
  const [values, setValues] = useState({
    password: "",
  });
  const [confirmPas, setConfirmPas] = useState({
    passwordConfirm: "",
  });
  const classes = useStyles();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPasswordConfirm = () => {
    setConfirmPas({
      ...confirmPas,
      showPasswordConfirm: !confirmPas.showPasswordConfirm,
    });
  };
  return (
    <div className={classes.wrapper}>
      <FormControl>
        <h1 className={classes.title}>E-mail</h1>
        <div className={classes.inputWrapper}>
          <input
            name="email"
            value={value.email}
            onChange={handleChange}
            className={
              touched.email && errors.email
                ? classes.inputFieldError
                : classes.inputFieldNew
            }
            placeholder="Email"
          />
        </div>
        <div className={classes.error}>{touched.email && errors.email}</div>
      </FormControl>

      <FormControl className={classes.formControl}>
        <h1 className={classes.title}>Create Password</h1>
        <div className={classes.inputWrapper}>
          <input
            name="password"
            placeholder="Password"
            value={value.password}
            onChange={handleChange}
            type={values.showPassword ? "text" : "password"}
            className={
              touched.password && errors.password
                ? classes.inputFieldError
                : classes.inputFieldNew
            }
          />
          <div onClick={handleClickShowPassword}>
            <img className={classes.img} src={eye} alt="show password" />
          </div>
        </div>
        <div className={classes.error}>
          {touched.password && errors.password}
        </div>
      </FormControl>
      <FormControl className={classes.formControl}>
        <h1 className={classes.title}>Confirm Password</h1>
        <div className={classes.inputWrapper}>
          <input
            name="passwordConfirm"
            placeholder="Confirm"
            value={value.passwordConfirm}
            onChange={handleChange}
            type={confirmPas.showPasswordConfirm ? "text" : "password"}
            className={
              touched.passwordConfirm && errors.passwordConfirm
                ? classes.inputFieldError
                : classes.inputFieldNew
            }
          />
          <div onClick={handleClickShowPasswordConfirm}>
            <img className={classes.img} src={eye} alt="show password" />
          </div>
        </div>
        <div className={classes.error}>
          {touched.passwordConfirm && errors.passwordConfirm}
        </div>
      </FormControl>
    </div>
  );
};
