import "./Signin.css";
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from "axios";

export const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // 메인 화면으로 이동
    const handleLogoClick = () => {
        navigate("/");
    };

    const handleLogin = async () => {
        const data = {
            userEmail: email,  // 원하는 키 값으로 지정
            userPw: password,  // 원하는 키 값으로 지정
        };

        try {
            const response = await axios.post('/users/signin', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // 헤더에서 accessToken 가져오기
            const accessToken = response.headers['accesstoken'];

            console.log(accessToken); // accessToken 확인

            // 로그인 성공 시 accessToken 저장
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken); // accessToken을 localStorage에 저장
            }

            // 로그인 성공 시 다른 페이지로 이동
            navigate('/'); // MainPage로 이동
        } catch (error) {
            // 에러 처리
            if (error.response) {
                console.error('Error:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    };


    return (
        <div className="loginscreen">
            <div className="logindiv">
                <div className="loginfooter">
                    <div className="logincontainer">
                        <div className="loginsub-container">
                            <div className="loginheading">Home</div>
                            <div className="loginlinks-container">
                                <div className="logintext-button">Categories</div>
                                <div className="logintext-button">Devices</div>
                                <div className="logintext-button">Pricing</div>
                                <div className="logintext-button">FAQ</div>
                            </div>
                        </div>
                        <div className="loginsub-container">
                            <div className="loginheading">Movies</div>
                            <div className="loginlinks-container">
                                <div className="logintext-button">Gernes</div>
                                <div className="logintext-button">Trending</div>
                                <div className="logintext-button">New Release</div>
                                <div className="logintext-button">Popular</div>
                            </div>
                        </div>
                        <div className="loginsub-container">
                            <div className="loginheading">Shows</div>
                            <div className="loginlinks-container">
                                <div className="logintext-button">Gernes</div>
                                <div className="logintext-button">Trending</div>
                                <div className="logintext-button">New Release</div>
                                <div className="logintext-button">Popular</div>
                            </div>
                        </div>
                        <div className="loginsub-container">
                            <div className="loginheading">Support</div>
                            <div className="logintext-button">Contact Us</div>
                        </div>
                        <div className="loginsub-container">
                            <div className="loginheading">Subscription</div>
                            <div className="loginlinks-container">
                                <div className="logintext-button">Plans</div>
                                <div className="logintext-button">Features</div>
                            </div>
                        </div>
                        <div className="loginlinks-container2">
                            <div className="loginheading">Connect With Us</div>
                            <div className="loginbuttons-container">
                                <div className="loginbutton">
                                    <img className="loginicon" src="icon0.svg"/>
                                </div>
                                <div className="loginbutton">
                                    <img className="loginicon2" src="icon1.svg"/>
                                </div>
                                <div className="loginbutton">
                                    <img className="loginicon3" src="icon2.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logincontainer2">
                        <div className="loginline"></div>
                        <div className="logincontainer3">
                            <div className="logintext">@2023 streamvib, All Rights Reserved</div>
                            <div className="loginbuttons-container2">
                                <div className="logintext-container">Terms of Use</div>
                                <div className="loginline2"></div>
                                <div className="logintext-container">Privacy Policy</div>
                                <div className="loginline2"></div>
                                <div className="logintext-container">Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logincontainer4">
                    <div className="loginform">
                        <div className="loginitems-container">
                            <div className="logincontainer5">
                                <div className="loginheading2">이메일</div>
                                <input
                                    type="email"
                                    className="logininput-field"
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="loginitems-container">
                            <div className="logincontainer5">
                                <div className="loginheading2">비밀번호</div>
                                <input
                                    type="password"
                                    className="logininput-field"
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logincontainer6" onClick={handleLogin}>
                    <div className="logintext3">로그인</div>
                </div>
                <div className="loginnavbar">
                <div className="loginlogo" onClick={handleLogoClick}>
                        <div className="loginvector">
                            <img className="loginvector2" src="vector1.svg"/>
                            <img className="loginicon4" src="icon3.svg"/>
                        </div>
                        <img className="loginstream-vibe" src="stream-vibe0.svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
