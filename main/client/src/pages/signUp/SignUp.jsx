import React, { useState } from 'react'
import Select from 'react-select'
import { useAuthStore } from '../../store/AuthStore.js'

import './SignUp.css'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState('')

  const { signup, error } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name, status);
		} catch (error) {
			console.log(error);
		}
	};

  const status_options = [
    { value: "student", label: "Student" },
    { value: "educator", label: "Educator" },
    { value: "institute", label: "Institute" }
  ]

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "30px",
    }),
  }



  return (
    <div>
      <div className="main">
        <div className="box" id="box1"></div>
        <div className="box" id="box2"></div>
        <div className="box" id="box3"></div>
        <div className="Login">
          <div className="container">
            <div className="form-title">
              <span>Sign Up</span>
            </div>
            <form className="form-box login-form">
              <div className="form-inputs">
                <div className="status-options">
                </div>
                <Select options={status_options} styles={customStyles} onChange={(option) => setStatus(option.value)}></Select>
                {/* <p>Option picked by user: {status?.label}</p> */}
                <div className="input-box">
                  <input type="text" className="inputs input-field" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-box">
                  <input type="email" className="inputs input-field" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                  <input type="password" className="inputs input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div className="input-box">
                  <input type="password" className="inputs input-field" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                </div>
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="input-box">
                <button type="submit" className="inputs submit-btn" onClick={handleSignUp}>Sign Up</button>
              </div>
            </form>
            {/* <label >Status Selected: {status}</label> */}
            {/* <PasswordStrengthMeter password={password}></PasswordStrengthMeter> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
