import "./ReviewDetail.css";
import {useLocation, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import axios from "axios";

export const ReviewDetail = ({className, ...props}) => {

    const accessToken = localStorage.getItem('accessToken'); // accessToken을 localStorage에서 가져옴
    const location = useLocation(); // 현재 위치 정보를 가져옴
    const {review} = location.state || {};
    const {movie} = location.state || {};

    const [reviewDetail, setReviewDetail] = useState(null); // 상태로 관리

    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 사용

    const handleLogin = () => {
        navigate('/signin'); // 로그인 페이지로 이동
    };

    const handleRegister = () => {
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    const handleProfile = () => {
        navigate('/mypage'); // 내 정보 페이지로 이동
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken'); // accessToken 삭제
    };

    // 메인 화면으로 이동
    const handleLogoClick = () => {
        navigate("/");
    };

    const formatReleaseDateTime = (date) => {
        if (!date) {
            console.error("Date is undefined or null");
            return "";
        }

        const [datePart, timePart] = date.replace('T', ' ').split(' ');

        const formattedDate = datePart.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1.$2.$3');

        const formattedTime = timePart.slice(0, 8);

        return `${formattedDate} ${formattedTime}`;
    };

    useEffect(() => {
        const fetchReviewDetail = async () => {
            try {
                const response = await axios.get(`/movies/${movie}/reviews/${review}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'accessToken': accessToken,
                        },
                    }
                );

                console.log("리뷰 상세 응답 결과 추출: ", response.data.result)

                const detail = response.data.result;
                console.log("리뷰 상세 응답 결과: ", detail.content); // 여기서 내용 확인
                setReviewDetail(detail);
                console.log("리뷰 응답 저장 결과: ", reviewDetail)

            } catch (error) {
                console.error("리뷰 상세 내용을 불러오는 데에 실패했습니다");
            }
        };

        fetchReviewDetail();
    }, [movie]);

    useEffect(() => {
        console.log("업데이트된 리뷰 응답 저장 결과: ", reviewDetail);
    }, [reviewDetail]);


    return (
        <div className="reviewdetailscreen">
            <div className="reviewdetaildiv">
                <div className="reviewdetailsub-container">
                    {/*<div className="reviewdetailheading">Comments</div>*/}
                </div>
                {/*<img className="reviewdetailrectangle-513" src="rectangle-5130.svg"/>*/}
                <div>
                    {reviewDetail ? (
                        <>
                            <div className="reviewdetaildiv3">{reviewDetail.title}</div>
                            <div className="reviewdetaildiv12">
                                <span className="reviewauthor">{reviewDetail.user_alias}</span>
                                <span className="reviewdate">{formatReleaseDateTime(reviewDetail.created_at)}</span>
                            </div>
                            <div className="reviewdetaildiv2" dangerouslySetInnerHTML={{ __html: reviewDetail.content }} />
                        </>
                    ) : (
                        <p>Loading review details...</p>
                    )}
                </div>
                <div className="reviewdetailnavbar">
                    <div className="reviewdetaillogo" onClick={handleLogoClick}>
                        <div className="reviewdetailvector">
                            <img className="reviewdetailvector2" src="vector1.svg"/>
                        </div>
                        <img className="reviewdetailstream-vibe" src="stream-vibe0.svg"/>
                    </div>
                    <div className="reviewdetailbuttons-container">
                            {accessToken ? (
                                <>
                                    <div className="reviewdetaildiv4" onClick={handleProfile}>
                                        내 정보
                                    </div>
                                    <div className="reviewdetaildiv5" onClick={handleLogout}>
                                        로그아웃
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="reviewdetaildiv4" onClick={handleLogin}>
                                        로그인
                                    </div>
                                    <div className="detaildiv5" onClick={handleRegister}>
                                        회원가입
                                    </div>
                                </>
                            )}
                        </div>
                </div>
                <div className="reviewdetailfooter">
                    <div className="reviewdetailcontainer">
                        <div className="reviewdetailsub-container2">
                            <div className="reviewdetailheading2">Home</div>
                            <div className="reviewdetaillinks-container">
                                <div className="reviewdetailtext-button">Categories</div>
                                <div className="reviewdetailtext-button">Devices</div>
                                <div className="reviewdetailtext-button">Pricing</div>
                                <div className="reviewdetailtext-button">FAQ</div>
                            </div>
                        </div>
                        <div className="reviewdetailsub-container2">
                            <div className="reviewdetailheading2">Movies</div>
                            <div className="reviewdetaillinks-container">
                                <div className="reviewdetailtext-button">Gernes</div>
                                <div className="reviewdetailtext-button">Trending</div>
                                <div className="reviewdetailtext-button">New Release</div>
                                <div className="reviewdetailtext-button">Popular</div>
                            </div>
                        </div>
                        <div className="reviewdetailsub-container2">
                            <div className="reviewdetailheading2">Shows</div>
                            <div className="reviewdetaillinks-container">
                                <div className="reviewdetailtext-button">Gernes</div>
                                <div className="reviewdetailtext-button">Trending</div>
                                <div className="reviewdetailtext-button">New Release</div>
                                <div className="reviewdetailtext-button">Popular</div>
                            </div>
                        </div>
                        <div className="reviewdetailsub-container2">
                            <div className="reviewdetailheading2">Support</div>
                            <div className="reviewdetailtext-button">Contact Us</div>
                        </div>
                        <div className="reviewdetailsub-container2">
                            <div className="reviewdetailheading2">Subscription</div>
                            <div className="reviewdetaillinks-container">
                                <div className="reviewdetailtext-button">Plans</div>
                                <div className="reviewdetailtext-button">Features</div>
                            </div>
                        </div>
                        <div className="reviewdetaillinks-container2">
                            <div className="reviewdetailheading2">Connect With Us</div>
                            <div className="reviewdetailbuttons-container2">
                                <div className="reviewdetailbutton">
                                    <img className="reviewdetailicon2" src="icon1.svg"/>
                                </div>
                                <div className="reviewdetailbutton">
                                    <img className="reviewdetailicon3" src="icon2.svg"/>
                                </div>
                                <div className="reviewdetailbutton">
                                    <img className="reviewdetailicon4" src="icon3.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviewdetailcontainer2">
                        <div className="reviewdetailline"></div>
                        <div className="reviewdetailcontainer3">
                            <div className="reviewdetailtext">@2023 streamvib, All Rights Reserved</div>
                            <div className="reviewdetailbuttons-container3">
                                <div className="reviewdetailtext-container">Terms of Use</div>
                                <div className="reviewdetailline2"></div>
                                <div className="reviewdetailtext-container">Privacy Policy</div>
                                <div className="reviewdetailline2"></div>
                                <div className="reviewdetailtext-container">Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="reviewdetailrectangle-517"></div>*/}
                {/*<div className="reviewdetaildiv6">댓글 내용</div>*/}
                {/*<div className="reviewdetailtext2">작성자 아이디</div>*/}
                {/*<div className="reviewdetailtext3">댓글 게시일자</div>*/}
                {/*<img*/}
                {/*    className="reviewdetailheroicons-solid-hand-thumb-up"*/}
                {/*    src="heroicons-solid-hand-thumb-up0.svg"*/}
                {/*/>*/}
                {/*<div className="reviewdetailtext4">45</div>*/}
                {/*<div className="reviewdetailtext5">답글</div>*/}
                {/*<div className="reviewdetailrectangle-5172"></div>*/}
                {/*<div className="reviewdetaildiv7">댓글 내용</div>*/}
                {/*<div className="reviewdetailtext6">작성자 아이디</div>*/}
                {/*<div className="reviewdetailtext7">댓글 게시일자</div>*/}
                {/*<img*/}
                {/*    className="reviewdetailheroicons-solid-hand-thumb-up2"*/}
                {/*    src="heroicons-solid-hand-thumb-up1.svg"*/}
                {/*/>*/}
                {/*<div className="reviewdetailtext8">45</div>*/}
                {/*<div className="reviewdetailtext9">답글(1)</div>*/}
                {/*<img*/}
                {/*    className="reviewdetailheroicons-mini-chevron-up"*/}
                {/*    src="heroicons-mini-chevron-up0.svg"*/}
                {/*/>*/}
                {/*<div className="reviewdetailrectangle-5173"></div>*/}
                {/*<div className="reviewdetaildiv8">댓글 내용</div>*/}
                {/*<div className="reviewdetailtext10">작성자 아이디</div>*/}
                {/*<div className="reviewdetailtext11">댓글 게시일자</div>*/}
                {/*<img*/}
                {/*    className="reviewdetailheroicons-solid-hand-thumb-up3"*/}
                {/*    src="heroicons-solid-hand-thumb-up2.svg"*/}
                {/*/>*/}
                {/*<div className="reviewdetailtext12">45</div>*/}
                {/*<div className="reviewdetailrectangle-5174"></div>*/}
                {/*<div className="reviewdetaildiv9">댓글 내용</div>*/}
                {/*<div className="reviewdetailtext13">작성자 아이디</div>*/}
                {/*<div className="reviewdetailtext14">댓글 게시일자</div>*/}
                {/*<img*/}
                {/*    className="reviewdetailheroicons-solid-hand-thumb-up4"*/}
                {/*    src="heroicons-solid-hand-thumb-up3.svg"*/}
                {/*/>*/}
                {/*<div className="reviewdetailtext15">45</div>*/}
                {/*<div className="reviewdetailtext16">답글(3)</div>*/}
                {/*<img*/}
                {/*    className="reviewdetailheroicons-mini-chevron-down"*/}
                {/*    src="heroicons-mini-chevron-down0.svg"*/}
                {/*/>*/}
                {/*<div className="reviewdetailline-8"></div>*/}
                {/*<div className="reviewdetailgroup-6">*/}
                {/*    <div className="reviewdetailrectangle-514"></div>*/}
                {/*    <div className="reviewdetaildiv10">등록</div>*/}
                {/*</div>*/}
                {/*<div className="reviewdetailtext17">댓글 추가</div>*/}
                {/*<div className="reviewdetailtext18">작성자 아이디</div>*/}
                {/*<div className="reviewdetailline-82"/>*/}
                {/*<div className="reviewdetailgroup-62">*/}
                {/*    <div className="reviewdetailrectangle-5142"></div>*/}
                {/*    <div className="reviewdetaildiv11">등록</div>*/}
                {/*</div>*/}
                {/*<div className="reviewdetailtext19">댓글 추가</div>*/}
                {/*<div className="reviewdetailtext20">작성자 아이디</div>*/}
            </div>
        </div>
    );
};
