import AuthorizationForm from "../../components/AuthorizationForm";

const BasicAuthRoute = () => {
  return (
    <AuthorizationForm
      title="Basic Auth Test"
      onSubmit={(data) => console.log(data)}
    ></AuthorizationForm>
  );
};

export default BasicAuthRoute;
