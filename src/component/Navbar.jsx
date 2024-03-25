import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const base_url = import.meta.env.VITE_BASE_URL;

export const Navbar = () => {
    const [token,setToken] = useState(null)

    useEffect(()=>{
      let getToken = localStorage.getItem("token")
      setToken(getToken)
    },[localStorage])

    const login = () => {
        axios
            .post(
                base_url + "/auth/login",
                {
                    email: "zerfean@gmail.com",
                    password: "123123",
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then((res) => {
                console.log("success login");
                console.log(res.data.token);
                localStorage.setItem("token",res.data.token)
                setToken(res.data.token)
            })
            .catch((err) => {
                console.log("failed login");
                console.log(err);
            });
    };

    const logout = () => {
      localStorage.clear()
      setToken(null)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/home"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/menu"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Menu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/profile"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/menu-create"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Add Menu
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary" onClick={token ? logout : login}>
                        {token ? "logout" : "login"}
                    </button>
                </div>
            </nav>
        </>                
    );
};
