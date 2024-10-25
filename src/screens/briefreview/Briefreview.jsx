import off from './public/heroicons-outline-star.svg'
import on from './public/heroicons-solid-star.svg'

import "./Briefreview.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from "axios";

export const Briefreview = ({className, ...props}) => {

    // 전달 받은 데이터 저장
    const location = useLocation();
    const { movie } = location.state || {}; // 전달된 데이터를 추출

    // 별점 상태 관리 (false는 off 상태)
    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);
    const [inputText, setInputText] = useState(''); // 입력된 텍스트를 관리하는 상태
    const navigate = useNavigate();

    // 메인 화면으로 이동
    const handleLogoClick = () => {
        navigate("/");
    };

    // 클릭 핸들러: 상태를 반전시켜 on/off 토글
    const handleStarClick = (index) => {
        setStar1(index >= 1); // index가 1 이하일 때 첫 번째 별을 설정
        setStar2(index >= 2); // index가 2 이하일 때 두 번째 별을 설정
        setStar3(index >= 3); // index가 3 이하일 때 세 번째 별을 설정
        setStar4(index >= 4); // index가 4 이하일 때 네 번째 별을 설정
        setStar5(index >= 5); // index가 5 이하일 때 다섯 번째 별을 설정
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value); // 입력 필드 상태 업데이트
    };

    // 한 줄 평 작성 -> 백엔드 한 줄 평 데이터 저장
    const handleSubmit = async () => {
        // 눌린 별점의 총합 계산
        const totalStars = [star1, star2, star3, star4, star5].filter(Boolean).length;

        // 서버로 보낼 데이터 준비 (JSON 형식)
        const postData = {
            rating: totalStars,
            content: inputText,
        };

        // localStorage에서 accessToken 가져오기
        const accessToken = localStorage.getItem('accessToken');

        console.log(accessToken);
        console.log(movie);
        console.log(postData);

        try {
            // POST 요청 보내기, 헤더에 accessToken 포함
            await axios.post(
                `/movies/${movie}/comments`,
                postData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accessToken': accessToken,
                    },
                }
            );

            console.log("Review submitted successfully");

            // 요청이 성공하면 페이지 이동
            navigate("/"); // 한 줄 평 상세 페이지로 이동 (미구현 부분)
        } catch (error) {
            console.error("Error posting review:", error);
        }
    };

    return (
        <div className="briefscreen">
            <div className="briefdiv">
                <img className="briefdiv2" src="div0.svg"/>
                <div className="briefbox">
                    <div className="briefheading">닉네임 :</div>
                </div>
                <input
                    type="text"
                    className="briefdiv3"
                    placeholder="한 줄 평을 작성해주세요"
                    value={inputText} // 상태 값으로 입력 필드의 값을 제어
                    onChange={handleInputChange} // 입력 값 변경 시 핸들러 호출
                />
                <div className="brief_0-500">{inputText.length}/500</div> {/* 글자 수 표시 */}
                <div className="briefline-3"></div>
                <div className="briefline-4"></div>
                <div className="briefline-6"></div>
                <div className="briefgroup-5">
                    <div className="briefrectangle-514"/>
                    <div className="briefdiv4" onClick={handleSubmit}>등록</div>
                </div>
                <div className="briefdiv5">한 줄 평 작성</div>
                <div className="briefnavbar">
                    <div className="brieflogo" onClick={handleLogoClick}>
                        <div className="briefvector">
                            <img className="briefvector2" src="vector1.svg"/>
                            <img className="brieficon" src="icon0.svg"/>
                        </div>
                        <img className="briefstream-vibe" src="stream-vibe0.svg"/>
                    </div>
                    {/*<div className="briefbuttons-container">*/}
                    {/*    <div className="briefdiv6">로그인</div>*/}
                    {/*    <div className="briefdiv7">회원가입</div>*/}
                    {/*</div>*/}
                </div>
                <div className="briefdiv8">별점 :</div>
                <div className="briefframe-6">
                    <img
                        className="briefheroicons-solid-star"
                        src={star1 ? on : off}
                        onClick={() => handleStarClick(1)} // 첫 번째 별 클릭 시 handleStarClick에 1 전달
                        alt="star"
                    />
                    <img
                        className="briefheroicons-solid-star2"
                        src={star2 ? on : off}
                        onClick={() => handleStarClick(2)} // 두 번째 별 클릭 시 handleStarClick에 2 전달
                        alt="star"
                    />
                    <img
                        className="briefheroicons-outline-star"
                        src={star3 ? on : off}
                        onClick={() => handleStarClick(3)} // 세 번째 별 클릭 시 handleStarClick에 3 전달
                        alt="star"
                    />
                    <img
                        className="briefheroicons-outline-star2"
                        src={star4 ? on : off}
                        onClick={() => handleStarClick(4)} // 네 번째 별 클릭 시 handleStarClick에 4 전달
                        alt="star"
                    />
                    <img
                        className="briefheroicons-outline-star3"
                        src={star5 ? on : off}
                        onClick={() => handleStarClick(5)} // 다섯 번째 별 클릭 시 handleStarClick에 5 전달
                        alt="star"
                    />
                </div>
            </div>
        </div>
    );
};
