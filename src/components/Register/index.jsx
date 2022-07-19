import React from "react";
import { useState, useEffect } from "react";
import "../Register/style.css";
import { useNavigate } from 'react-router-dom';
import LoginRegister from "../../assets/images/LoginRegister.png";


async function doRegister({ username, email, password, confPassword }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("https://backendprojectt.herokuapp.com/api/user/register", {

    method: "POST",
    
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      confPassword,
    }),
  });
  console.log("berhasil")
  const data = await response.json();
  return data.token;
}
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfpassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);
  
  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doRegister({ username, email, password, confPassword })
      .then((token) => localStorage.setItem("token", token))
      .then((res)=>{
        navigate('/login')
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
                    <h4>Daftar</h4>
                    <form onSubmit={handleSubmit} method="post">
                      <div className="form">
                    
                        <p>
                          <label for="exampleInputEmail1" className="form-label" 
                            >Daftar</label
                          >
                          <input
                            type="userName"
                            className="form-control"
                            id="daftar"
                            placeholder="Nama Lengkap"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                          />
                        </p>
                        <p>
                          <label for="exampleInputEmail1" className="form-label"
                            >Email</label
                          >
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Contoh : Johndee@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </p>
                        <p>
                          <label for="password" className="form-label"
                            >Password</label
                          >
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Buat Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </p>
                        <p>
                          <label for="Confpassword" className="form-label"
                            >Confirmasi Password </label
                          >
                          <input
                            type="confpassword"
                            className="form-control"
                            id="confPassword"
                            placeholder="Confirmasi Password "
                            onChange={(e) => setConfpassword(e.target.value)}
                            value={confPassword}
                          />
                        </p>
                        <div className="form">
                          <button className="btnn btn-primary" type="submit" onClick={handleSubmit} >
                            Daftar
                          </button>
                        </div>
                        <div className="verif mb-3 py-3 text-center">
                          <p>Sudah punya akun? <a href="/login">Masuk di sini</a></p>
                        </div>
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
};
export default Register;