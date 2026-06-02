import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const role = Cookies.get("role");

  if (role === "doctor") {
    return <Navigate to="/doctor" />;
  }
  if (role === "receptionist") {
    return <Navigate to="/receptionist" />;
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(response.data);

      Cookies.set("jwt-token", response.data.token, {
        expires: 7,
      });

      Cookies.set("role", response.data.role, {
        expires: 7,
      });

      if (response.data.role === "doctor") {
        navigate("/doctor");
      } else {
        navigate("/receptionist");
      }
    } catch (e) {
      console.log(e);
      console.log(e.response?.data);
      alert(e.response?.data?.error || "Login Error");
    }
  };

  return (
    <div>
      <h1>Hospital Triage System</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id = "email" onChange={onChangeEmail} value={email} type="email" />
        </div>

        <div>
          <label htmlFor="pass">Password</label>
          <input id="pass" onChange={onChangePassword} value={password} type="password" />
        </div>

        <button onClick={submitForm} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
