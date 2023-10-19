import React, { useState } from "react";
import InputField from "./InputField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  // const[showToast, setShowToast] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputZipCode = e.target.value;

    if (/^\d+$/.test(inputZipCode)) {
      setZipCode(inputZipCode);
      setError("");
    } else {
      setError("Please enter a numeric value for the zip code.");
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDob = e.target.value;
    setDob(inputDob);
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(inputDob)) {
      setError("Invalid date format (YYYY-MM-DD)");
    } else {
      const selectedDate = new Date(inputDob);
      const currentDate = new Date();

      if (selectedDate > currentDate) {
        setError("Date of Birth cannot be a future date.");
      } else {
        setError("");
      }
    }
  };
  const naviagte = useNavigate();

  const handleLogin = () => {
    naviagte("/login");
  };

  const handleSignUp = () => {
    setError("");

    if (!name || !email || !password || !confirmPassword || !dob) {
      setError("Please fill all the mandatory fields.");
    } else {
      setError("");
    }

    const isEmailValid = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
    if (!isEmailValid) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      password
    );
    if (!isPasswordValid) {
      setError("Please enter a valid password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const postData = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      address: {
        street: street,
        city: city,
        state: selectedState,
        zipCode: zipCode,
        country: selectedCountry,
      },
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast.success("Registration successful!");
          setTimeout(() => {
            naviagte("/login");
          },
          3000);
        
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });


  };

  return (
    <div className="form-container">
      <h1 className="register">Register Here!</h1>
      <h3 className="personal-info">Personal Information</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <InputField
        label="Name"
        type="text"
        name="name"
        placeHolder="Enter Your Name"
        value={name}
        onChange={handleNameChange}
        mandatory={true}
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        placeHolder="Enter Your Email"
        value={email}
        onChange={handleEmailChange}
        mandatory={true}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        placeHolder="Enter Your Password"
        value={password}
        onChange={handlePasswordChange}
        mandatory={true}
      />

      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeHolder="Confirm Your Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        mandatory={true}
      />

      <InputField
        label="DOB"
        type="date"
        name="dob"
        placeHolder="DD-MM-YYYY"
        value={dob}
        onChange={handleDobChange}
        mandatory={true}
      />

      <h3 className="address-info">Address Information</h3>

      <InputField
        label="Street Address"
        type="text"
        name="street"
        placeHolder="Enter Your Street Address"
        value={street}
        onChange={handleStreetChange}
        mandatory={false}
      />

      <InputField
        label="City"
        type="text"
        name="city"
        placeHolder="Enter Your City"
        value={city}
        onChange={handleCityChange}
        mandatory={false}
      />

      <InputField
        label="Zip Code"
        type="text"
        name="zipCode"
        placeHolder="Enter Your Zip Code"
        value={zipCode}
        onChange={handleZipCodeChange}
        mandatory={false}
      />

      <label className="label">State</label>
      <div className="select">
        <select
          name="state"
          value={selectedState}
          onChange={handleStateChange}
          placeholder="Enter Your State"
          required
        >
          <option value="">Select State</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
        </select>
      </div>

      <label className="label">Country</label>
      <div className="select">
        <select
          name="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Enter Your State"
          required
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="India">India</option>
        </select>
      </div>

      <Button label="Register" onClick={handleSignUp} />
      <div className="p">
        <p>Already have an account?</p>
        <p className="loginClick" onClick={handleLogin}>
          Login Here!
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
