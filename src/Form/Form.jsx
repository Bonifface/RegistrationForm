import {Gender} from "../Gender/Gender";
import {TextField} from "../TextField/TextField";
import {useFormik} from "formik";
import * as yup from "yup";
import {Button} from "@material-ui/core";
import {useState} from "react";
import {useStyles} from "./Form.styles";

let schema = yup.object().shape({
  email: yup.string().required("Not required").email("Must be a valid email"),
  password: yup.string().required("Not required").min(6, "Minimum 6 character"),
  passwordConfirm: yup.string().required("Not required")
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const Form = () => {
  const [state, setState] = useState(false)
  const classes = useStyles()
  const targetGender = (gender) => {
    return setState(gender)
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: schema,
    onSubmit: (values, {resetForm}) => {
      alert(JSON.stringify({
        "email":values.email,
        "password":values.password,
        gender: state
      }))
      setState(false)
      resetForm()
    },
  });
  const {values, handleChange, handleSubmit,touched, errors} = formik;
  return (
    <div>
      <Gender
        targetGender={targetGender}
        setGender={setState}
        state={state}
      />
      <TextField
        handleChange={handleChange}
        value={values}
        touched={touched}
        errors={errors}
      />
      <div>
        <Button
          className={classes.btnSignUp}
          onClick={() => handleSubmit()}
          disableRipple
        >
          Sign Up
        </Button>
      </div>
    </div>

  )
}