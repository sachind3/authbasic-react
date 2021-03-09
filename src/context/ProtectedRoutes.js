import { Route, Redirect } from "react-router-dom";
const ProtectedRoutes = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
};

export default ProtectedRoutes;
