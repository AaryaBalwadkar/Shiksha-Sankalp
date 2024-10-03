import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './EmailVerification.css'
import { useAuthStore } from '../../store/AuthStore'

const EmailVerification = () => {
  const [code, setCode] = useState(["","","","","",""])
  const inputRefs = useRef([])
  const navigate = useNavigate()

  const { error, verifyEmail} = useAuthStore()

  const handleChange = (index, value) => {
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    if(value && index < 5){
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

  useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);

  console.log("Inputs : ", code)

  const handleSubmit = async (e) => {
		e.preventDefault();
		const verificationCode = code.join("");
    console.log(verificationCode)
		try {
			await verifyEmail(verificationCode);
			navigate("/");
			toast.success("Email verified successfully");
		} catch (error) {
			console.log(error);
		}
	}

  return (
    <div className="main">
      <div className="box" id="box1"></div>
      <div className="box" id="box2"></div>
      <div className="box" id="box3"></div>
      <div className="EmailVerify">
        <div className="container">
          <div className="form-title">
            <span>Verify Your Email</span>
          </div>
          <div className="text">
            <span href="#">Enter the 6-digit code sent to your email address</span>
          </div>
          <div className="inputContainer">
            {code.map((digit, index) => {
              return <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type='text'
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            })}
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="btnx-box">
            <button onClick={handleSubmit} className="btnx btnx-1" type="submit" >Verify</button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default EmailVerification
