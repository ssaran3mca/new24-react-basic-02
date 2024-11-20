import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <div className="container-fluid p-5 bg-primary text-white text-center mt-5">
        <h1>Error Page</h1>
        <p>Resize this responsive page to see the effect!</p>
        <h1>{err.statusText}</h1>
        <p>{err.status}</p>
      </div>
    </div>
  );
};
export default ErrorPage;
