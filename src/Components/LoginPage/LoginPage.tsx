

import React, { useState, useEffect, useContext } from "react";

import Button from "../Button/Button";

import InputField from "../InputFields/InputFields";

import "./LoginPage.scss";

import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

type User = {
  username: string;

  email: string;

  password: string;
};

const LoginPage: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [users, setUsers] = useState<User[]>([]);

  const { logIn } = useContext(AuthContext);



  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())

      .then((data) => setUsers(data))

      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUsernameOrEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameOrEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // const isUsernameValid = (username: string) => {
  //   return /^[a-zA-Z0-9]+$/.test(username);
  // };
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/register');
  }

  const handleLogin = () => {
    setError(""); // Clear previous error messages

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameOrEmail);

    const isUsername = /^[a-zA-Z0-9]+$/.test(usernameOrEmail);

    const isPasswordValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );

    if (!isEmail && !isUsername) {
      setError("Please enter a valid username or email.");

      return;
    }

    if (isEmail) {
      if (!isEmailValid(usernameOrEmail)) {
        setError("Please enter a valid email address.");

        return;
      }
    } else {
      if (typeof usernameOrEmail !== "string") {
        setError("Username must be a string.");

        return;
      }
    }

    if (isUsername && typeof usernameOrEmail !== "string") {
      setError("Username must be a string.");

      return;
    }

    if (!isPasswordValid) {
      setError(
        "Please enter a valid password."
        // " Password must have at least 8 characters, including uppercase, lowercase, numbers, and special characters."
      );

      return;
    }

    const uniqueTimestamp = new Date().getTime(); // Create a unique timestamp

    const url = `http://localhost:3000/users?${
      isEmail ? "email" : "username"
    }=${usernameOrEmail}&password=${password}&timestamp=${uniqueTimestamp}`;

    fetch(url, {
      method: "GET",

      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Login request failed");
        }
      })

      .then((data) => {
        let userExists = false;

        data.forEach((user: User) => {
          if (
            (isEmail && user.email === usernameOrEmail) ||
            (!isEmail && user.username === usernameOrEmail)
          ) {
            userExists = true;

            if (user.password === password) {
              console.log("Login Successful", user);

              logIn();
              alert("Login Successful");

              // sessionStorage.setItem("username", usernameOrEmail);

              // sessionStorage.setItem("password", password);

              const userId = data[0].userId;
              console.log(userId);
              sessionStorage.setItem("userId", userId);
              // navigate('/')
              navigate("/");
            } else {
              console.log("Invalid password. Please try again.");

              setError("Invalid password. Please try again.");
            }
          }
        });

        if (!userExists) {
          console.log("Invalid username or email. Please try again.");

          setError("Invalid username or email. Please try again.");
        }
      })

      .catch((error) => {
        console.error("Error logging in:", error);

        setError("Error logging in. Please try again later.");
      });

     
  };

  return (
    <div className="login">
      <div className="container">
        <h2>Login Here!</h2>
        <div className="fields">
        {error && <p style={{ color: "red" }}>{error}</p>}

        <InputField
          label="Username or Email"
          type="text"
          name="usernameOrEmail"
          placeholder="Enter your Username or Email"
          value={usernameOrEmail}
          onChange={handleUsernameOrEmailChange}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePasswordChange}
        />
        </div>
        <Button className="login-button" label="Login" onClick={handleLogin} />
        <div className="para">
        <p>Don't have an account?</p><p className="tag" onClick={handleRegistrationClick}>Register Here!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
