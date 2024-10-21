import image0  from './public/image0.png'
import image1  from './public/image1.png'
import image2  from './public/image2.png'
import image3  from './public/image3.png'
import image4  from './public/image4.png'
import image5  from './public/image5.png'
import image6  from './public/image6.png'
import image7  from './public/image7.png'
import image8  from './public/image8.png'
import image9  from './public/image9.png'
import image10  from './public/image10.png'
import image11  from './public/image11.png'
import image12  from './public/image12.png'
import image13  from './public/image13.png'
import image14  from './public/image14.png'
import image15  from './public/image15.png'

import "./Signup.css";
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const Signup = () => {

    const [email, setEmail] = useState(''); // 이메일 상태
    const [name, setName] = useState(''); // 이름 상태
    const [password, setPassword] = useState(''); // 비밀번호 상태
    const [alias, setAlias] = useState(''); // 별명 상태
    const [phoneNumber, setPhoneNumber] = useState(''); // 전화번호 상태
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

    const handleSignUp = async () => {
        try {
            // 백엔드 서버에 데이터 전송
            await axios.post('/users/signup', {
                userEmail: email,
                userPw: password,
                role: "USER",
                userName: name,
                alias: alias,
                phoneNum: phoneNumber
            }, {
                headers: {
                    'Content-Type': 'application/json' // 요청 헤더에 Content-Type 설정
                }
            });
            // 페이지 이동
            navigate('/'); // 원하는 페이지로 이동
        } catch (error) {
            console.error('Error signing up:', error); // 오류 처리
        }
    };

    return (
        <div className="signupScreen">
            {/*<div className="signupdiv">*/}
                <div className="signupframe">
                    <div className="signupfooter">
                        <div className="signupcontainer">
                            <div className="signupsub-container">
                                <div className="signupheading">Home</div>
                                <div className="signuplinks-container">
                                    <div className="signuptext-button">Categories</div>
                                    <div className="signuptext-button">Devices</div>
                                    <div className="signuptext-button">Pricing</div>
                                    <div className="signuptext-button">FAQ</div>
                                </div>
                            </div>
                            <div className="signupsub-container">
                                <div className="signupheading">Movies</div>
                                <div className="signuplinks-container">
                                    <div className="signuptext-button">Gernes</div>
                                    <div className="signuptext-button">Trending</div>
                                    <div className="signuptext-button">New Release</div>
                                    <div className="signuptext-button">Popular</div>
                                </div>
                            </div>
                            <div className="signupsub-container">
                                <div className="signupheading">Shows</div>
                                <div className="signuplinks-container">
                                    <div className="signuptext-button">Gernes</div>
                                    <div className="signuptext-button">Trending</div>
                                    <div className="signuptext-button">New Release</div>
                                    <div className="signuptext-button">Popular</div>
                                </div>
                            </div>
                            <div className="signupsub-container">
                                <div className="signupheading">Support</div>
                                <div className="signuptext-button">Contact Us</div>
                            </div>
                            <div className="signupsub-container">
                                <div className="signupheading">Subscription</div>
                                <div className="signuplinks-container">
                                    <div className="signuptext-button">Plans</div>
                                    <div className="signuptext-button">Features</div>
                                </div>
                            </div>
                            <div className="signuplinks-container2">
                                <div className="signupheading">Connect With Us</div>
                                <div className="signupbuttons-container">
                                    <div className="signupbutton">
                                        <img className="signupicon" src="icon0.svg"/>
                                    </div>
                                    <div className="signupbutton">
                                        <img className="signupicon2" src="icon1.svg"/>
                                    </div>
                                    <div className="signupbutton">
                                        <img className="signupicon3" src="icon2.svg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="signupcontainer2">
                            <div className="signupline"></div>
                            <div className="signupcontainer3">
                                <div className="signuptext">@2023 streamvib, All Rights Reserved</div>
                                <div className="signupbuttons-container2">
                                    <div className="signuptext-container">Terms of Use</div>
                                    <div className="signupline2"></div>
                                    <div className="signuptext-container">Privacy Policy</div>
                                    <div className="signupline2"></div>
                                    <div className="signuptext-container">Cookie Policy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="signupsignupBox">
                        <div className="signupsub-container2">
                            <div className="signuptext-container2">
                                <div className="signupheading2">Welcome to our support page!</div>
                                <div className="signupparagraph">
                                    We&#039;re here to help you with any problems you may be having
                                    with our product.{" "}
                                </div>
                            </div>
                            <div className="signupsub-container3">
                                <div className="signupcontainer5">
                                    <div className="signupimage-container">
                                        <img className="signupimage" src={image0}/>
                                        <img className="signupimage" src={image1}/>
                                        <img className="signupimage" src={image2}/>
                                        <img className="signupimage" src={image3}/>
                                    </div>
                                    <div className="signupimage-container">
                                        <img className="signupimage" src={image4}/>
                                        <img className="signupimage" src={image5}/>
                                        <img className="signupimage" src={image6}/>
                                        <img className="signupimage" src={image7}/>
                                    </div>
                                    <div className="signupimage-container">
                                        <img className="signupimage" src={image8}/>
                                        <img className="signupimage" src={image9}/>
                                        <img className="signupimage" src={image10}/>
                                        <img className="signupimage" src={image11}/>
                                    </div>
                                    <div className="signupimage-container">
                                        <img className="signupimage" src={image12}/>
                                        <img className="signupimage" src={image13}/>
                                        <img className="signupimage" src={image14}/>
                                        <img className="signupimage" src={image15}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="signupform">
                            <div className="signupitems-container">
                                <div className="signupcontainer6">
                                    <div className="signupheading3">이메일</div>
                                    <div className="signupinput-field">
                                        <input
                                            type="email"
                                            className="signuptext2"
                                            placeholder="Enter your Email"
                                            value={email} // 입력 값 바인딩
                                            onChange={(e) => setEmail(e.target.value)} // 상태 업데이트
                                        />
                                    </div>
                                </div>
                                <div className="signupcontainer6">
                                    <div className="signupheading3">이름</div>
                                    <div className="signupinput-feild">
                                        <input
                                            type="text"
                                            className="signuptext2"
                                            placeholder="Enter your Name"
                                            value={name} // 입력 값 바인딩
                                            onChange={(e) => setName(e.target.value)} // 상태 업데이트
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="signupitems-container">
                                <div className="signupcontainer6">
                                    <div className="signupheading3">비밀번호</div>
                                    <div className="signupinput-field2">
                                        <input
                                            type="password"
                                            className="signuptext2"
                                            placeholder="Enter your Password (ex : abcd123!)"
                                            value={password} // 입력 값 바인딩
                                            onChange={(e) => setPassword(e.target.value)} // 상태 업데이트
                                        />
                                    </div>
                                </div>
                                <div className="signupcontainer6">
                                    <div className="signupheading3">별명</div>
                                    <div className="signupinput-feild2">
                                        <div className="signupcontainer7">
                                            <input
                                                type="text"
                                                className="signuptext2"
                                                placeholder="Enter your alias"
                                                value={alias} // 입력 값 바인딩
                                                onChange={(e) => setAlias(e.target.value)} // 상태 업데이트
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="signupcontainer8">
                                <div className="signupheading3">전화번호</div>
                                <div className="signupinput-field3">
                                    <input
                                        type="text"
                                        className="signuptext2"
                                        placeholder="Enter your Phone Number (ex : 010-0000-0000)"
                                        value={phoneNumber} // 입력 값 바인딩
                                        onChange={(e) => setPhoneNumber(e.target.value)} // 상태 업데이트
                                    />
                                </div>
                            </div>
                            <div className="signupcontainer9" onClick={handleSignUp}>
                                <div className="signuptext3">회원가입</div>
                            </div>
                        </div>
                    </div>
                    <div className="signupnavbar">
                        <div className="signuplogo">
                            <div className="signupvector">
                                <img className="signupvector2" src="vector1.svg"/>
                                <img className="signupicon4" src="icon3.svg"/>
                            </div>
                            <img className="signupstream-vibe" src="stream-vibe0.svg"/>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </div>
    );
};
