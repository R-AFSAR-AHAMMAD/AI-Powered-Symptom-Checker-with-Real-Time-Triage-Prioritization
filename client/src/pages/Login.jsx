import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return;
  <div>
    <h1>Hospital Triage System</h1>
    <form>
      <div>
        <label>Email</label>
        <input onChange={onChangeEmail} value={email} type="email" />
      </div>

      <div>
        <label>Password</label>
        <input onChange={onChangePassword} value={password} type="password" />
      </div>

      <button onClick={submitForm} type="submit">
        Login
      </button>
    </form>
  </div>;
};

export default Login;
