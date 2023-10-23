import Button from "../Button/Button";

import React, { useContext } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";

const LogoutButton: React.FC = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();

    // Perform any additional logout logic here
  };

  //   return <button onClick={handleLogout}>Logout</button>;
  return( <div>
  {/* <p>User Logged in</p> */}
  <Button label="Logout" onClick={handleLogout} />;

  </div>
  )
};

export default LogoutButton;
