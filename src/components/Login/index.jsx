import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../lib/api"
import "../Login/style.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../reducers/api-store";
import LoginRegister from "../../assets/images/LoginRegister.png";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailField = useRef("");
    const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const userToLoginPayload = {
                email: emailField.current.value,
                password: passwordField.current.value,
            };

            const loginRequest = await api.post(
                "/api/user/login",
                userToLoginPayload
            );
            
            const loginResponse = loginRequest.data;

            if (loginRequest.status === 200) {
                dispatch(setToken(loginResponse.access_token))

                navigate("/home");
            }
        } catch (err) {
            if (err.response) {
                console.log(err);
                const response = err.response.data;

                setErrorResponse({
                    isError: true,
                    message: response.message,
                });
            }else{
                setErrorResponse({
                    isError: true,
                    message: err.message
                })
            }
        }
    };

    return (
        <>
            <div style={{ overflowY: "hidden", overflowX: "hidden", display: "block", height: "50vh" }} className='login'>
                <div className="row align-items-top">
                    <div className="col-md pict-login">
                        <img className="LoginRegister" src={LoginRegister} alt="login" />
                    </div>
                    <div class="col-md">
                      <div class="login d-flex align-items-center py-5">
                        <div className="container">
                            {errorResponse.isError && (
                                <Alert variant="danger">{errorResponse.message}</Alert>
                            )}
                            <a href=''><i className="bi bi-arrow-left arrow-login" style={{ fontSize: '1.5rem', color: 'black', marginBottom: '2rem' }}></i></a>
                            <h2 className='col-md-8 offset-md-2 mrl'><b>Masuk</b></h2>
                            <form className='col-md-8 offset-md-2 row' onSubmit={onLogin}>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control input-width-login" ref={emailField} placeholder="Contoh: johndee@gmail.com" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control input-width-login" ref={passwordField} placeholder="Masukkan password" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <button type="submit" className="btn8 btn-primary input-width-login">Masuk</button>
                                </div><br />
                            </form>
                        
                        <p className='text-center'>Belum Punya Akun? <a className='text-primary' href='/register'><b>Daftar di sini</b></a></p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
        </>

    )
}

export default Login