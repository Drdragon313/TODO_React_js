import "./style.scss";
import Navbar from "../components/Header/header";
import Button from "../components/Button/button";
import Heading from "../components/Heading/heading";
import Textbox from "../components/TextBox/textbox";
import Label from "../components/Labels/label";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setUser } from "../Features/loginSlice/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      console.log("Response data:", response.data);

      if (response.status === 200) {
        const user = response.data;
        console.log("redx:", user);
        dispatch(setUser(user));
        navigate("/home");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <div className="signin_container">
        <Heading text="Login Page"></Heading>
        <Label text="User Name"></Label>
        <Textbox
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Textbox>
        <Label text="Password"></Label>
        <Textbox
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Textbox>
        <Button text="login" onClick={handleLogin}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </div>
  );
}

export default Login;
