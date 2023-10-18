import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
// import image from "../images.jpg";
import "./Register.scss";

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
  };

  const handleSignUP = () => {
    setError("");

    if (!name || !email || !password || !address || !dob) {
      setError("Please fill all the fields.");
      return;
    }

    const isEmailValid = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      password
    );
    if (!isPasswordValid) {
      setError("Please enter a valid password.");
      return;
    }

    const postData = {
      name: name,
      email: email,
      password: password,
      address: address,
      dob: dob,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then((data) => {
      console.log(data);
      if (data) {
        alert("Registration successful!");

      }
    });
  };

  return (
    <div className="form-container">
      {/* <img src={image} alt="My Image" className="header-image" /> */}
      <h2 className="h2">Register Here!</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <InputField
        label="Name"
        type="name"
        name="Name"
        placeHolder="Enter Your Name"
        value={name}
        onChange={handleNameChange}
      />

      <InputField
        label="Email"
        type="email"
        placeHolder="Enter Your Email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        placeHolder="Enter Your Password"
        value={password}
        onChange={handlePasswordChange}
      />

      <InputField
        label="Address"
        type="address"
        name="address"
        placeHolder="Enter Your Address"
        value={address}
        onChange={handleAddressChange}
      />

      <InputField
        label="DOB"
        type="Date"
        name="dob"
        placeHolder="Enter Your Dob"
        value={dob}
        onChange={handleDobChange}
      />
      <Button label="Register" onClick={handleSignUP} />
    </div>
  );
};

export default RegistrationPage;

