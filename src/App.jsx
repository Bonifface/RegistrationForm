import {Footer} from "./Footer/Footer";
import {Form} from "./Form/Form";
import {Header} from "./Header/Header";
import {useStyles} from "./App.styles";

export const App = () => {

  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Header/>
        <Form />
        <Footer />
      </div>
    </div>
  );
}

