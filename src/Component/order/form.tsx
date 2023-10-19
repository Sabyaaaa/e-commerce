
import React, { useState } from 'react';

interface Address {
  name: string;
  // address: string;
  mobile: string; 
  pinCode:string;
  city:string;
  state:string;
}

const Form: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPin] = useState(''); 
  const [city, setCity] = useState(''); 
  const [state, setState] = useState(''); 
  const [mobile, setMobile] = useState(''); 
  const [submittedAddresses, setSubmittedAddresses] = useState<Address[]>([]);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   
    const newAddress: Address = {
      name: name,
      mobile: mobile, 
      pinCode:pinCode,
      city:city,
      state:state
    };

    
    setSubmittedAddresses([...submittedAddresses, newAddress]);

  
    setName('');
    // setAddress('');
    setMobile(''); 
    setPin('')
    setCity('')
    setState('')
    setIsOpen(false);
  };

  return (
    <div className="detai">
      {submittedAddresses.map((address, index) => (
        <div key={index} className="submitted-address">
          <p><span style={{ fontWeight: "bold" }}> Name : </span> {address.name}</p>
          <p><span style={{ fontWeight: "bold" }}> Pin Code : </span>{address.pinCode}</p>
          <p><span style={{ fontWeight: "bold" }}> Mobile : </span>{address.mobile}</p>
          <p><span style={{ fontWeight: "bold" }}> City : </span>{address.city}</p>
          <p><span style={{ fontWeight: "bold" }}> State : </span>{address.state}</p>
        </div>
      ))}

      {isOpen ? (
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Contact Details</label>
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              id="name"
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            {/* <label htmlFor="mobile">Mobile:</label> */}
            <input
              type="tel" 
              id="mobile"
              value={mobile}
              placeholder='Mobile'
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Address:</label>
            <input
              type="" 
              id="pin"
              value={pinCode}
              placeholder='Pin Code'
              onChange={(e) => setPin(e.target.value)}
              required
            />
            </div>
            <div className="form-group">
            <input
              type="" 
              id="city"
              value={city}
              placeholder='City'
              onChange={(e) => setCity(e.target.value)}
              required
            />
            </div>
            <div className="form-group">
            <input
              type="" 
              id="state"
              value={state}
              placeholder='State'
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <button className="add-address-btn" type="submit">Submit</button>
        </form>
      ) : (
        submittedAddresses.length === 0 && (
          <button className="add-address-btn" onClick={handleButtonClick}>+ Add Address</button>
        )
      )}
    </div>
  );
};

export default Form;