import "./style.scss";
import Navbar from "../components/Header/header";
import Button from "../components/Button/button";
import Heading from "../components/Heading/heading";
import Textbox from "../components/TextBox/textbox";
import Label from "../components/Labels/label";
function Login() {
  return (
    <div className="App">
      <Navbar />
      <div className="signin_container">
        <Heading text="Login Page"></Heading>
        <Label text="User Name"></Label>
        <Textbox type="text" placeholder="Enter Your Username"></Textbox>
        <Label text="Password"></Label>
        <Textbox type="password" placeholder="Enter Your Password"></Textbox>
        <Button text="login"></Button>
      </div>
    </div>
  );
}

export default Login;


