import React, { useContext } from "react";

import { AuthContext } from "./AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./Logout/Logout";

const Some: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const naviagte = useNavigate();

  const some = () => {
    naviagte("/some");
  };

  const renderLoginStatus = () => {
    console.log(isLoggedIn)
    if (isLoggedIn) {
        console.log(isLoggedIn)
      return <p>User is logged in</p>;

    } else {

      return <p>User is not logged in</p>;

    }

  };

  // You can use the isLoggedIn value here to conditionally render components or perform other actions

  return (
    <div>
      {renderLoginStatus()}
      <LogoutButton />
      {/* <button onClick={some}> Some Button</button> */}
    </div>
  );
};

export default Some;



 


