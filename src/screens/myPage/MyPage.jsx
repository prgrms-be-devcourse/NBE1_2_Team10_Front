import "./MyPage.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 사용
import icon0 from "./public/icon0.svg";
import icon1 from "./public/icon1.svg";
import icon2 from "./public/icon2.svg";
import icon3 from "./public/icon3.svg";
import streamvibe0 from "./public/stream-vibe0.svg";
import vector1 from "./public/vector1.svg";

export const MyPage = ({className, ...props}) => {

    // 상태 관리: 각 입력 필드의 값을 상태로 저장
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState(null);

    const [dibs, setDibs] = useState([]);

    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 사용

    useEffect(() => {

        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            // accessToken을 상태로 저장
            setToken(accessToken);
        }
    }, []);  // 컴포넌트가 처음 렌더링될 때 한 번만 실행

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) setToken(accessToken);
        console.log(accessToken);


        const fetchDibs = async () => {
            try {
                const response = await axios.get(
                    '/users/mypage',
                    {
                        headers: {
                        'Content-Type': 'application/json',
                        'accessToken': accessToken,
                        },
                    }
                    );
                console.log("찜 목록 불러오기 성공");

                if (response.data.isSuccess) {
                    setDibs(response.data.result.dibDTOList);
                    console.log("응답: ",response);
                    console.log("찜 목록 저장 성공");
                    console.log("응답의 찜 목록 : ", response.data.result.dibDTOList)
                    console.log("찜 목록 : ", dibs);
                }
                else {
                    console.error(`Error: ${response.data.message} (Code: ${response.data.code})`);
                }

            } catch (error) {
                console.error('Failed to fetch bookmarked movies:', error);
            }
        };

        fetchDibs();
    }, []);

    useEffect(() => {
        console.log("찜 목록 : ", dibs);
    }, [dibs]);

    // 메인 화면으로 이동
    const handleLogoClick = () => {
        navigate("/");
    };

    // 회원 정보 수정 요청
    const handleUpdateClick = async () => {
        const userData = {
            userEmail: email,
            userPw: password,
            userName: name,
            alias: nickname,
            phoneNum: number
        };

        try {
            const response = await fetch('users/update', {
                method: 'PATCH', // 요청 타입 명시
                headers: {
                    'Content-Type': 'application/json',
                    'accessToken': token // accessToken 추가
                },
                body: JSON.stringify(userData),
            });

            console.log(token);
            if (response.ok) {
                const result = await response.json();
                console.log('User info updated successfully:', result);

                // 데이터 전송 후 다른 페이지로 이동
                navigate('/'); // 페이지 이동
            } else {
                console.error('Failed to update user info.');
            }
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };

    return (
        <div className="mypagescreen">
            <div className="mypagediv">
                <div className="mypagefooter">
                    <div className="mypagecontainer">
                        <div className="mypagesub-container">
                            <div className="mypageheading">Home</div>
                            <div className="mypagelinks-container">
                                <div className="mypagetext-button">Categories</div>
                                <div className="mypagetext-button">Devices</div>
                                <div className="mypagetext-button">Pricing</div>
                                <div className="mypagetext-button">FAQ</div>
                            </div>
                        </div>
                        <div className="mypagesub-container">
                            <div className="mypageheading">Movies</div>
                            <div className="mypagelinks-container">
                                <div className="mypagetext-button">Gernes</div>
                                <div className="mypagetext-button">Trending</div>
                                <div className="mypagetext-button">New Release</div>
                                <div className="mypagetext-button">Popular</div>
                            </div>
                        </div>
                        <div className="mypagesub-container">
                            <div className="mypageheading">Shows</div>
                            <div className="mypagelinks-container">
                                <div className="mypagetext-button">Gernes</div>
                                <div className="mypagetext-button">Trending</div>
                                <div className="mypagetext-button">New Release</div>
                                <div className="mypagetext-button">Popular</div>
                            </div>
                        </div>
                        <div className="mypagesub-container">
                            <div className="mypageheading">Support</div>
                            <div className="mypagetext-button">Contact Us</div>
                        </div>
                        <div className="mypagesub-container">
                            <div className="mypageheading">Subscription</div>
                            <div className="mypagelinks-container">
                                <div className="mypagetext-button">Plans</div>
                                <div className="mypagetext-button">Features</div>
                            </div>
                        </div>
                        <div className="mypagelinks-container2">
                            <div className="mypageheading">Connect With Us</div>
                            <div className="mypagebuttons-container">
                                <div className="mypagebutton">
                                    <img className="mypageicon" src={icon0}/>
                                </div>
                                <div className="mypagebutton">
                                    <img className="mypageicon2" src={icon1}/>
                                </div>
                                <div className="mypagebutton">
                                    <img className="mypageicon3" src={icon2}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mypagecontainer2">
                        <div className="mypageline"></div>
                        <div className="mypagecontainer3">
                            <div className="mypagetext">@2023 streamvib, All Rights Reserved</div>
                            <div className="mypagebuttons-container2">
                                <div className="mypagetext-container">Terms of Use</div>
                                <div className="mypageline2"></div>
                                <div className="mypagetext-container">Privacy Policy</div>
                                <div className="mypageline2"></div>
                                <div className="mypagetext-container">Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mypagecontainer4">
                    <div className="mypageform">
                        <div className="mypagecontainer5">
                            <div className="mypagetext2" onClick={handleUpdateClick}>
                                회원 정보 수정
                            </div>
                        </div>
                        <div className="mypageitems-container">
                            <div className="mypagecontainer6">
                                <div className="mypageheading2">이메일</div>
                                <div className="mypageinput-feild2">
                                    <input
                                        className="mypagecontainer7"
                                        placeholder="인증에 필요한 기존 이메일을 입력해주세요"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mypageitems-container">
                            <div className="mypagecontainer6">
                                <div className="mypageheading2">별명</div>
                                <input
                                    className="mypageinput-field"
                                    placeholder="변경할 별명을 입력해주세요"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                />
                            </div>
                            <div className="mypagecontainer6">
                                <div className="mypageheading2">이름</div>
                                <input
                                    className="mypageinput-feild"
                                    placeholder="변경할 이름을 입력해주세요"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                            </div>
                        </div>
                        <div className="mypageitems-container">
                            <div className="mypagecontainer6">
                                <div className="mypageheading2">비밀번호</div>
                                <input
                                    className="mypageinput-field2"
                                    placeholder="변경할 패스워드를 입력해주세요"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mypagecontainer6">
                                <div className="mypageheading2">전화번호</div>
                                <div className="mypageinput-feild2">
                                    <input
                                        className="mypagecontainer7"
                                        placeholder="변경할 전화번호를 입력해주세요"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mypagenavbar">
                    <div className="mypagelogo" onClick={handleLogoClick}>
                        <div className="mypagevector">
                            <img className="mypagevector2" src={vector1}/>
                            <img className="mypageicon4" src={icon3}/>
                        </div>
                        <img className="mypagestream-vibe" src={streamvibe0}/>
                    </div>
                </div>
                    <div>
                        <div className="mypagecontainer8">
                            {dibs[0] && (
                                <div className="mypageheading-3">
                                    <div className="sub-container2">
                                        <div className="card">
                                            <img className="image" src={dibs[0].moviePost}/>
                                            <div className="mypagediv2">{dibs[0].movieTitle}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="mypagecontainer9">
                            {dibs[1] && (
                                <div className="mypageheading-3">
                                    <div className="sub-container2">
                                        <div className="card">
                                            <img className="image" src={dibs[1].moviePost}/>
                                            <div className="mypagediv2">{dibs[1].movieTitle}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="mypagecontainer10">
                            {dibs[2] && (
                                <div className="mypageheading-3">
                                    <div className="sub-container2">
                                        <div className="card">
                                            <img className="image" src={dibs[2].moviePost}/>
                                            <div className="mypagediv2">{dibs[2].movieTitle}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="mypagecontainer11">
                            {dibs[3] && (
                                <div className="mypageheading-3">
                                    <div className="sub-container2">
                                        <div className="card">
                                            <img className="image" src={dibs[3].moviePost}/>
                                            <div className="mypagediv2">{dibs[3].movieTitle}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;