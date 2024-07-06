import { SubmitHandler } from "react-hook-form";
import AuthorizationForm, { AuthorizationFormInput } from "../../components/AuthorizationForm";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Typography } from "@mui/material";

interface BasicAuthResponse {
  message: string;
  instance?: string;
}

const BasicAuthRoute = () => {
  const [response, setResponse] = useState<BasicAuthResponse | undefined>(undefined);
  const onSubmit: SubmitHandler<AuthorizationFormInput> = async (data) => {
    await axios
      .get<BasicAuthResponse>("http://localhost:8080/auth-test/basic", {
        auth: { username: data.email, password: data.password },
      })
      .then((res) => setResponse({ instance: res.data.instance, message: res.data.message }))
      .catch((err) => {
        const error = err as AxiosError;
        setResponse({ message: error.message });
      });
  };

  return (
    <AuthorizationForm title="Basic Auth Test" onSubmit={onSubmit}>
      {response && (
        <>
          <Typography>Message: {response?.message}</Typography>
          <Typography>Instance: {response?.instance}</Typography>
        </>
      )}
    </AuthorizationForm>
  );
};

export default BasicAuthRoute;
