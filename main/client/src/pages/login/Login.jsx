import React, { useState } from 'react'
import Select from 'react-select'
import './Login.css'
import { useAuthStore } from '../../store/AuthStore.js'
import { useNavigate } from 'react-router-dom'

const status_list = [
  'student',
  'educator',
  'institute'
]

const Login = () => {
  const [status, setStatus] = useState()
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const navigate = useNavigate()

	const { login, error } = useAuthStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
    navigate("/")
	};

  const status_options = [
    {value:"student", label:"Student"},
    {value:"educator", label:"Educator"},
    {value:"institute", label:"Institute"}
  ]

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "30px",
      textAign: "left",
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
            <span>Log In</span>
          </div>    
          <form className="form-box login-form">
            <div className="form-inputs">
              <div className="status-options">
              </div>
              <Select options={status_options} styles={customStyles} onChange={(option) => setStatus(option)}></Select>
              <div className="input-box">
                <input type="email" className="inputs input-field" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="input-box">
                <input type="password" className="inputs input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
              </div>
              <div className="forgot-pass">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="input-box">
              <button className="inputs submit-btn" onClick={handleLogin}>
                Log In
              </button>
            </div>
          </form>       
          {/* <label >Status Selected: {status}</label> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

