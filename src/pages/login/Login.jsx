import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";
import TextField from "@mui/material/TextField";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
        setError(true);
        toast.error("Wrong email or password", {
          position: "top-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
        setLoading(false)
      });
  };
  return (
    <div className="login">
      <ToastContainer />

      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <TextField
          id="outlined-basic"
          label="Enter email..."
          required
          size="medium"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Enter password..."
          required
          size="medium"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          {loading ? <CircularProgress  size={25} /> : "Login"}
        </Button>
        {error && <span>Wrong email or password</span>}
      </form>
    </div>
  );
};

export default Login;
