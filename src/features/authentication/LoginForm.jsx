import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { login } from "../../services/apiAuth.js";
import { useLogin } from "./useLogin.js";
import Spinner from "../../ui/Spinner.jsx";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

function LoginForm() {
  const { login, loggingIn } = useLogin();

  const [email, setEmail] = useState("lebron@gmail.com");
  const [password, setPassword] = useState("akronohio");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loggingIn}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loggingIn}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={loggingIn}>
          {!loggingIn ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
