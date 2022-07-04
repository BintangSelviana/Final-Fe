import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import "../Login/style.css";
import { Alert } from '@mui/material';
import LoginRegister from "../../assets/images/LoginRegister.png";

async function doLogin({ email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("http://localhost:8000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data.token;
}

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);
  
  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .then((req, res)=>{
        navigate('/home')
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
          <img className="LoginRegister" src={LoginRegister} alt="" />
        </div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto ju">
                  <div className="container">
                    <h4>Masuk</h4>
                    <form onSubmit={handleSubmit}>
                    <div className="form" />
                        <p>
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Nama" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          /> 
                        </p>
                        <p>
                          <label for="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Masukan Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </p>
                        <div className="form">
                            <button className="btnn btn-primary" type="submit" onClick={handleSubmit}>
                              Masuk
                            </button>
                        </div>
                        <div className="verif mb-3 py-3 text-center">
                          <a href="/register"></a>
                          <p>
                            Belum punya akun?{" "}
                            <a href="register">Masuk di sini</a>
                          </p>
                        </div>
                        </form>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  ); 
}
export default Login;
