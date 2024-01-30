import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";

export default function Register() {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState("");

  const { username, password } = data;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const registration = async () => {
    try {
      const { data } = await axios.post("api/auth/register", registrationData);
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="custom-form-container">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="card-layout">
                  <h3 className="register-text">Register here</h3>
                  <br/>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                  <button
                    className="registration-button"
                    type="submit"
                    onClick={registration}
                  >
                    Register
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p className="login-question">
                    Already have an account? <Link className="login-link" to="/login">
                        Login
                      </Link>
                    <div>
                      
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
