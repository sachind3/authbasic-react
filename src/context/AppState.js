import { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  let isUser = JSON.parse(localStorage.getItem("isAuth"));
  useEffect(() => {
    if (isUser !== null) {
      setIsAuth(isUser);
    }
  }, [isUser]);
  let data = {
    isAuth,
    setIsAuth,
    user: {
      name: "John Smith",
      email: "johnsmith@gmail.com",
      city: "Mumbai",
      Country: "India",
      Age: 24,
      designation: "Web Developer",
    },
  };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};

export default AppState;
