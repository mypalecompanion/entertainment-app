import AuthorizationForm from "../components/AuthorizationForm";

const LoginRoute = () => {
  return <AuthorizationForm title="Log in to Application" onSubmit={(data) => console.log(data)} />;
};

export default LoginRoute;
