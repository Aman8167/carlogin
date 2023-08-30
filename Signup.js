import React, { useState }  from 'react'
import './Signup.css';
const Signup= () => {
    
        const [formData, setFormData] = useState({
          name: '',
          mobileNumber: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      
        const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value
          }));
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log('Form Data:', formData);
        };
  return (
    <div className="container-fluid"><br></br><br></br><br></br>
        <div class="form-body">
        <div className="card-1">
        <div className="row justify-content-center">
            <div className="col-md-7">
        <div className="card-body mt-5 ">
      <form onSubmit={handleSubmit}>
        <h1 class="text-center">Signup</h1>
       
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button id="btn"type="submit" className="btn btn-primary w-50">
          Submit
        </button>
       


        
      </form>
  
      </div>
      </div>
      </div>
      </div>
    </div>
     </div>
  )
}

export default Signup