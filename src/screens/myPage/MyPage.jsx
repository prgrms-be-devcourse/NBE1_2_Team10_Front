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
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 사용

    // 메인 화면으로 이동
    const handleLogoClick = () => {
        navigate("/");
    };

    // 회원 정보 수정 요청
    const handleUpdateClick = async () => {
        const userData = {
            alias : nickname,
            userName : name,
            userEmail : email,
            phoneNum : number
        };

        try {
            const response = await fetch('users/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('User info updated successfully:', result);

                // 데이터 전송 후 다른 페이지로 이동 (예: "/success" 페이지)
                navigate('/'); // 페이지 이동
            } else {
                console.error('Failed to update user info.');
            }
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };

    // 찜 목록 페이지네이션
    const DibPagination = () => {
        const [dibs, setDibs] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPages, setTotalPages] = useState(0);
        const [startPage, setStartPage] = useState(1); // 페이지 시작 번호
        const maxPagesToShow = 10; // 한번에 보여줄 페이지 수
        const dibsPerPage = 10; // 페이지당 보여줄 한줄평 수

        useEffect(() => {
            // 백엔드에서 데이터 받아오기
            const fetchDibs = async () => {
                try {
                    const response = await axios.get(`/users/mypage`);

                    if (!response.data.isSuccess) {
                        console.error(`Error: ${response.data.message} (Code: ${response.data.code})`);
                        return; // 에러 처리
                    }

                    setDibs(response.data.result.content.dibDTOList);
                    setTotalPages(response.data.result.pageable.totalPages);
                } catch (error) {
                    console.error('Failed to fetch reviews:', error);
                }
            };
            fetchDibs();
        }, [currentPage, dibsPerPage]);

        // 페이지 변환
        const handlePageChange = (pageNum) => {
            setCurrentPage(pageNum);
        };

        // 이후 페이지 그룹 변환
        const handleNextPageGroup = () => {
            if (startPage + maxPagesToShow <= totalPages) {
                setStartPage(startPage + maxPagesToShow);
            }
        };

        // 이전 페이지 그룹 이동
        const handlePrevPageGroup = () => {
            if (startPage - maxPagesToShow > 0) {
                setStartPage(startPage - maxPagesToShow);
            }
        };

        // 페이지 버튼 렌더링
        const renderPageButtons = () => {
            const buttons = [];
            for (let i = startPage; i < startPage + maxPagesToShow && i <= totalPages; i++) {
                buttons.push(
                    <div key={i} className="detailgroup-15" onClick={() => handlePageChange(i)}>
                        <div className="detailrectangle-5182"></div>
                        <div className={`detail_${i === currentPage ? 'active' : ''}`}>{i}</div>
                    </div>
                );
            }
            return buttons;
        };

        return (
            <div>
                {dibs.map(dib => (
                    <div className="mypagesub-container2" key={dib.movieId}>
                        <div className="mypagecard">
                            <div>
                                <img className="mypageimage" src={dib.moviePosterUrl} alt={dib.movieTitle}/>
                                <div className="mypagediv2">{dib.movieTitle}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );

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
                                <div className="mypageheading2">별명</div>
                                <input
                                    className="mypageinput-field"
                                    placeholder="Please enter your nickname"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                />
                            </div>
                            <div className="mypagecontainer6">
                                <div className="mypageheading2">이름</div>
                                <input
                                    className="mypageinput-feild"
                                    placeholder="Please enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                            </div>
                        </div>
                        <div className="mypageitems-container">
                            <div className="mypagecontainer6">
                                <div className="mypageheading2">이메일</div>
                                <input
                                    className="mypageinput-field2"
                                    placeholder="Please enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mypagecontainer6">
                                <div className="mypageheading2">전화번호</div>
                                <div className="mypageinput-feild2">
                                    <input
                                        className="mypagecontainer7"
                                        placeholder="Please enter your number"
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
                <div className="mypagecontainer8">

                </div>


                <div className="mypageframe-9">
                    <renderPageButtons/>
                </div>

            </div>
        </div>
    );
};

export default MyPage;