// import container0 from'./public/container0.svg';
// import container3 from'./public/container3.svg';
// import container15 from'./public/container15.svg';
import heroiconssolidhandthumbup0 from './public/heroicons-solid-hand-thumb-up0.svg';
import heroiconssolidhandthumbup1 from './public/heroicons-solid-hand-thumb-up1.svg';
import heroiconssolidhandthumbup2 from './public/heroicons-solid-hand-thumb-up2.svg';
import heroiconssolidhandthumbup3 from './public/heroicons-solid-hand-thumb-up3.svg';
import heroiconssolidhandthumbup4 from './public/heroicons-solid-hand-thumb-up4.svg';
import heroiconssolidhandthumbup5 from './public/heroicons-solid-hand-thumb-up5.svg';
// import heroiconssolidhandthumbup6 from './public/heroicons-solid-hand-thumb-up6.svg';
// import heroiconssolidhandthumbup7 from './public/heroicons-solid-hand-thumb-up7.svg';

import icon0 from './public/icon0.svg';
import icon1 from './public/icon1.svg';
import icon2 from './public/icon2.svg';
import icon3 from './public/icon3.svg';
import icon4 from './public/icon4.svg';
import icon5 from './public/icon5.svg';
import icon6 from './public/icon6.svg';
import icon7 from './public/icon7.svg';

import shape0 from './public/shape0.svg';
import shape1 from './public/shape1.svg';
import shape2 from './public/shape2.svg';
import shape3 from './public/shape3.svg';
import shape4 from './public/shape4.svg';


import streamvibe0 from './public/stream-vibe0.svg';
import vector1 from './public/vector1.svg';

import "./MovieDetail.css";
import {SubContainer} from "./SubContainer.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export const MovieDetail = ({className, ...props}) => {

    const accessToken = localStorage.getItem('accessToken'); // accessToken을 localStorage에서 가져옴
    const location = useLocation(); // 현재 위치 정보를 가져옴
    const {movie} = location.state || {}; // 전달된 상태에서 영화 데이터 추출

    console.log("영화 정보: ", movie)

    {/* 리뷰 목록, 한줄평 목록 저장 변수 */}
    const [reviews, setReviews] = useState([]);  // 리뷰 목록
    const [comments, setComments] = useState([]);  // 한줄평 목록

    const [briefReviewSort, setBRSortType] = useState('LATEST');
    const [reviewSort, setReviewSortType] = useState('LATEST');

    const [dibIsActive, setDibIsActive] = useState(false);

    const [likeIsActive, setLikeIsActive] = useState({});
    const [dislikeIsActive, setDislikeIsActive] = useState({});

    const navigate = useNavigate();


    // 메인 화면으로 이동
    const handleLogoClick = () => {
        navigate("/");
    };

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

    // 리뷰 작성 페이지로 넘어가는 함수
    const handleAddReviewClick = () => {
        navigate(`/reviewwrite`, {state: {movie: movie.movieId}});
    };

    // 한줄평 작성 페이지로 넘어가는 함수
    const handleAddBriefReviewClick = () => {
        navigate(`/briefreview`, {state: {movie: movie.movieId}});
    };

    // 리뷰 제목 클릭 시 리뷰 상세 조회 페이지로 이동
    const handleTitleClick = (reviewId) => {
        navigate(`/reviewdetail`, {state: {review: reviewId, movie: movie.movieId}});
    };

    // 개봉일 포맷팅 함수
    const formatReleaseDate = (date) => {
        return date.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
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




    // 별점 표시 생성 함수
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating); // 정수 부분
        const halfStar = rating % 1 >= 0.5; // 반별 여부

        // 전체 별 생성
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star filled">★</span>);
        }

        // 반별이 있으면 추가
        if (halfStar) {
            stars.push(<span key={fullStars} className="star half">★</span>);
        }

        // 나머지 별은 빈 별로 생성
        for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
            stars.push(<span key={i} className="star empty">★</span>);
        }

        return stars;
    };

    const dibProcess = async() => {

        try {
            setDibIsActive((prev) => !prev);
            // PUT 요청 보내기, 헤더에 accessToken 포함
            await axios.put(
                `/movies/${movie.movieId}/dib`,
                null,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accessToken': accessToken,
                    },
                }
            );

            console.log("Dib process complete");

        } catch (error) {
            console.error("Error posting review:", error);
        }
    }

    const likeProcess = async (commentId) => {
        console.log("좋아요 한줄평 아이디: ",commentId)
        console.log("좋아요 현재 상태: ", likeIsActive)
        try {
            if (likeIsActive[commentId]) {
                setLikeIsActive((prev) => ({ ...prev, [commentId]: false }));
                console.log("좋아요 현재 상태: ", likeIsActive)

                await axios.delete(
                    `/movies/${movie.movieId}/comments/${commentId}/like`,
                    null,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'accessToken': accessToken,
                        },
                    }
                );
            } else {
                setLikeIsActive((prev) => ({ ...prev, [commentId]: true }));
                console.log("좋아요 현재 상태: ", likeIsActive)

                await axios.post(
                    `/movies/${movie.movieId}/comments/${commentId}/like`,
                    null,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'accessToken': accessToken,
                        },
                    }
                );
            }
        } catch (error) {
            console.error("좋아요 실패", error);
        }
    };

    const dislikeProcess = async (commentId) => {
        try {
            if (dislikeIsActive[commentId]) {
                setDislikeIsActive((prev) => ({ ...prev, [commentId]: false }));
                await axios.delete(
                    `/movies/${movie.movieId}/comments/${commentId}/dislike`,
                    null,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'accessToken': accessToken,
                        },
                    }
                );
            } else {
                setDislikeIsActive((prev) => ({ ...prev, [commentId]: true }));
                await axios.post(
                    `/movies/${movie.movieId}/comments/${commentId}/dislike`,
                    null,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'accessToken': accessToken,
                        },
                    }
                );
            }
        } catch (error) {
            console.error("싫어요 실패", error);
        }
    };



    const initializeStates = (commentId) => {
        setLikeIsActive((prev) => ({ ...prev, [commentId]: false }));
        setDislikeIsActive((prev) => ({ ...prev, [commentId]: false }));
    };

    const handleBRSortChange = (type) => {
        setBRSortType(type);
    };

    const handleReviewSortChange = (type) => {
        setReviewSortType(type);
    }



    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`/movies/${movie.movieId}/comments`,
                    {
                    params: { page: 0, sortType : briefReviewSort},
                });

                console.log('서버 응답 데이터:', response.data);

                if (!response.data.isSuccess) {
                    console.error(
                        `Error: ${response.data.message} (Code: ${response.data.code})`
                    );
                    return;
                }

                const commentList = response.data.result.content;
                console.log("한줄평 응답 1: ", response.data.result.content)
                console.log("한줄평 응답 2:", commentList)
                console.log("한줄평 첫번째 값:", commentList[0]);

                if (Array.isArray(commentList)) {
                    setComments(commentList);
                } else {
                    console.log("Not Array");
                    setComments([]);
                }
            } catch (error) {
                console.error("한줄평을 불러오는 데에 실패했습니다");
            }
        };

        fetchComments();
    }, [movie.movieId, briefReviewSort]);


    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`/movies/${movie.movieId}/reviews/list`,
                    {
                        params: { page: 0, sort : reviewSort, content : false},
                    });

                console.log("서버와 연결 성공");

                if (!response.data.isSuccess) {
                    console.error(
                        `Error: ${response.data.message} (Code: ${response.data.code})`
                    );
                    return;
                }

                const reviewList = response.data.result.content;
                console.log("리뷰 목록 응답:", reviewList)
                console.log("리뷰 첫번째 값:", reviewList[0]);

                if (Array.isArray(reviewList)) {
                    setReviews(reviewList);
                } else {
                    console.log("Not Array");
                    setReviews([]);
                }


            } catch (error) {
                console.error('리뷰를 불러오는 데에 실패했습니다');
            }
        };

        fetchReviews();
    }, [movie.movieId, reviewSort]);



    return (
        <div className="detailscreen">
            <div className="detaildiv">

                <div className="detailfooter">
                    <div className="detailcontainer">
                        <div className="detailsub-container">
                            <div className="detailheading">Home</div>
                            <div className="detaillinks-container">
                                <div className="detailtext-button">Categories</div>
                                <div className="detailtext-button">Devices</div>
                                <div className="detailtext-button">Pricing</div>
                                <div className="detailtext-button">FAQ</div>
                            </div>
                        </div>
                        <div className="detailsub-container">
                            <div className="detailheading">Movies</div>
                            <div className="detaillinks-container">
                                <div className="detailtext-button">Gernes</div>
                                <div className="detailtext-button">Trending</div>
                                <div className="detailtext-button">New Release</div>
                                <div className="detailtext-button">Popular</div>
                            </div>
                        </div>
                        <div className="detailsub-container">
                            <div className="detailheading">Shows</div>
                            <div className="detaillinks-container">
                                <div className="detailtext-button">Gernes</div>
                                <div className="detailtext-button">Trending</div>
                                <div className="detailtext-button">New Release</div>
                                <div className="detailtext-button">Popular</div>
                            </div>
                        </div>
                        <div className="detailsub-container">
                            <div className="detailheading">Support</div>
                            <div className="detailtext-button">Contact Us</div>
                        </div>
                        <div className="detailsub-container">
                            <div className="detailheading">Subscription</div>
                            <div className="detaillinks-container">
                                <div className="detailtext-button">Plans</div>
                                <div className="detailtext-button">Features</div>
                            </div>
                        </div>
                        <div className="detaillinks-container2">
                            <div className="detailheading">Connect With Us</div>
                            <div className="detailbuttons-container">
                                <div className="detailbutton">
                                    <img className="detailicon" src={icon0}/>
                                </div>
                                <div className="detailbutton">
                                    <img className="detailicon2" src={icon1}/>
                                </div>
                                <div className="detailbutton">
                                    <img className="detailicon3" src={icon2}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detailcontainer2">
                        <div className="detailline"></div>
                        <div className="detailcontainer3">
                            <div className="detailtext">@2023 streamvib, All Rights Reserved</div>
                            <div className="detailbuttons-container2">
                                <div className="detailtext-container">Terms of Use</div>
                                <div className="detailline2"></div>
                                <div className="detailtext-container">Privacy Policy</div>
                                <div className="detailline2"></div>
                                <div className="detailtext-container">Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailnavbar">
                    <div className="detaillogo" onClick={handleLogoClick}>
                        <div className="detailvector">
                            <img className="detailvector2" src={vector1}/>
                            <img className="detailicon4" src={icon3}/>
                        </div>
                        <img className="detailstream-vibe" src={streamvibe0}/>
                    </div>
                    <div className="detailbuttons-container3">
                        {accessToken ? (
                            <>
                                <div className="detaildiv2" onClick={handleProfile}>
                                    내 정보
                                </div>
                                <div className="detaildiv3" onClick={handleLogout}>
                                    로그아웃
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="detaildiv2" onClick={handleLogin}>
                                    로그인
                                </div>
                                <div className="detaildiv3" onClick={handleRegister}>
                                    회원가입
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* 리뷰 목록 들어가야 함*/}
                <div className="detailfooter2">
                    <div className="detailform">
                        <div className="detailheading4"
                             onClick={() => handleTitleClick(reviews[0]?.reviewId)}
                        >
                            {reviews[0]?.title}
                        </div>
                        <div className="detailheading3">추천 {reviews[0]?.likes} </div>
                        <div className="detailheading6">{formatReleaseDateTime(reviews[0]?.createdAt)}</div>
                    </div>
                </div>
                <div className="detailfooter3">
                    <div className="detailform">
                        <div className="detailheading4"
                             onClick={() => handleTitleClick(reviews[1]?.reviewId)}
                        >
                            {reviews[1]?.title}
                        </div>
                        <div className="detailheading3">추천 {reviews[1]?.likes} </div>
                        <div className="detailheading6">{formatReleaseDateTime(reviews[1]?.createdAt)}</div>
                    </div>
                </div>
                <div className="detailfooter4">
                    <div className="detailform">
                        <div className="detailheading4"
                             onClick={() => handleTitleClick(reviews[2]?.reviewId)}
                        >
                            {reviews[2]?.title}
                        </div>
                        <div className="detailheading3">추천 {reviews[2]?.likes} </div>
                        <div className="detailheading6">{formatReleaseDateTime(reviews[2]?.createdAt)}</div>
                    </div>
                </div>

                <div className="detailheading7">Reviews</div>
                <div className="review-sort-buttons">
                    <button className="sort-button" onClick={() => handleReviewSortChange("LIKE")}>좋아요순</button>
                    <button className="sort-button" onClick={() => handleReviewSortChange("LATEST")}>최신순</button>
                </div>
                <div className="detailbutton2" onClick={handleAddReviewClick}>
                    <div className="detailtext2">Add Your Review</div>
                </div>

                <div className="detailline-6"></div>

                <div className="detailfooter5">
                    <div className="detailtext3">{comments[2]?.userId || '익명'} </div>
                    <div className="sub-container-instance">
                        {renderStars(comments[0]?.rating)}
                    </div>
                    <div className="detailgroup-6">
                        <div className="detailrectangle-515"></div>
                        <div className="detaildiv6">{comments[2]?.cmtContent} </div>
                        <div className="detailtext4">{formatReleaseDateTime(comments[2]?.createdAt)} </div>
                    </div>
                    <div className="detailicons">
                        <div className="heroicons-solid-hand-thumb-up">
                            <img
                                className="detailunion"
                                src={heroiconssolidhandthumbup2}
                                style={{ filter: likeIsActive[comments[2]?.commentId] ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                onClick={() => likeProcess(comments[2]?.commentId)}
                            />
                            <div className="detailtext5">{comments[2]?.like}</div>
                        </div>
                        <div className="heroicons-solid-hand-thumb-up2">
                            <img
                                className="detailunion"
                                src={heroiconssolidhandthumbup1}
                                style={{ filter: likeIsActive[comments[2]?.commentId] ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                onClick={() => dislikeProcess(comments[2]?.commentId)}
                            />
                            <div className="detailtext5">{comments[2]?.dislike} </div>
                        </div>
                    </div>
                </div>

                <div className="detailfooter6">
                    <div className="detailtext3">{comments[1]?.userId || '익명'} </div>
                    <div className="sub-container-instance">
                        {renderStars(comments[1]?.rating)}
                    </div>
                    <div className="detailgroup-6">
                        <div className="detailrectangle-515"></div>
                        <div className="detaildiv6">{comments[1]?.cmtContent} </div>
                        <div className="detailtext4">{formatReleaseDateTime(comments[1]?.createdAt)} </div>
                    </div>
                    <div className="detailicons">
                        <div className="heroicons-solid-hand-thumb-up">
                            <img
                                className="detailunion"
                                src={heroiconssolidhandthumbup2}
                                onClick={() => likeProcess(comments[1]?.commentId)}
                            />
                            <div className="detailtext5">{comments[1]?.like} </div>
                        </div>
                        <div className="heroicons-solid-hand-thumb-up2">
                            <img
                                className="detailunion"
                                src={heroiconssolidhandthumbup1}
                                onClick={() => dislikeProcess(comments[1]?.commentId)}
                            />
                            <div className="detailtext5">{comments[1]?.dislike} </div>
                        </div>
                    </div>
                </div>

                <div className="detailfooter7">
                    <div className="detailtext3">{comments[0]?.userId || '익명'} </div>
                    <div className="sub-container-instance">
                        {renderStars(comments[0]?.rating)}
                    </div>
                    <div className="detailgroup-6">
                        <div className="detailrectangle-515"></div>
                        <div className="detaildiv6">{comments[0]?.cmtContent} </div>
                        <div className="detailtext4">{formatReleaseDateTime(comments[0]?.createdAt)} </div>
                    </div>
                    <div className="detailicons">
                        <div className="heroicons-solid-hand-thumb-up">
                            <img
                                className="detailunion"
                                src={heroiconssolidhandthumbup2}
                                onClick={() => likeProcess(comments[0]?.commentId)}
                            />
                            <div className="detailtext5">{comments[0]?.like} </div>
                        </div>
                        <div className="heroicons-solid-hand-thumb-up2">
                            <img
                                className="detailunion"
                                src={heroiconssolidhandthumbup1}
                                onClick={() => dislikeProcess(comments[0]?.commentId)}
                            />
                            <div className="detailtext5">{comments[0]?.dislike} </div>
                        </div>
                    </div>
                </div>

                <div className="detailsub-container5">
                    <div className="detailheading8">Brief Reviews</div>
                    <div className="brief-review-sort-buttons">
                        <button className="sort-button" onClick={() => handleBRSortChange("LIKE")}>좋아요순</button>
                        <button className="sort-button" onClick={() => handleBRSortChange("LATEST")}>최신순</button>
                    </div>
                    <div className="detailbutton3" onClick={handleAddBriefReviewClick}>
                        <div className="detailtext2">Add Your Brief Review</div>
                    </div>
                </div>

                <div className="detailline-5"></div>

                <div className="detailcontainer5">
                    <div className="detailsub-container6">
                        <div className="detailtext-container2">
                            <div className="detailheading9">Description</div>
                            <div className="detailparagraph">
                                {movie.plot}
                            </div>
                        </div>
                        <div className="detailcontainer6">
                            <div className="detailsub-container7">
                                <div className="detailheading10">Cast</div>
                            </div>
                            <div className="detailparagraph2">{movie.actors} </div>
                        </div>
                        <div className="detailcontainer7">
                            <div className="detailsub-container7">
                                <div className="detailheading10">Director</div>
                            </div>
                            <div className="detailparagraph">{movie.director} </div>
                        </div>
                    </div>

                    <div className="detailsub-container8">
                        <div className="detailcontainer8">
                            <div className="detailsub-container9">
                                <img className="detailicon5" src={icon4}/>
                                <div className="detailheading11">Released Date</div>
                            </div>
                            <div className="detailtext7">{formatReleaseDate(movie.releaseDate)} </div>
                        </div>
                        <div className="detailcontainer8">
                            <div className="detailsub-container9">
                                <img className="detailicon6" src={icon5}/>
                                <div className="detailheading11">Ratings</div>
                            </div>
                            <div className="detailsub-container10">
                                <div className="detailcontainer9">
                                    <div className="detailsub-container11">
                                        <div className="detailcontainer10">
                                            {renderStars(movie.sumOfRating)}
                                        </div>
                                        <div className="detailtext8">{movie.sumOfRating} </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="detailcontainer8">
                            <div className="detailsub-container9">
                                <img className="detailicon7" src={icon6}/>
                                <div className="detailheading11">Gernes</div>
                            </div>
                            <div className="detailsub-container12">
                                {movie.genre}
                            </div>
                        </div>

                        <div className="detailcontainer8">
                            <div className="detailheading9">Running Time</div>
                        </div>
                        <div className="detailtext10">{movie.runningTime}min</div>
                    </div>
                </div>

                <div
                    className="detailcontainer12"
                    style={{
                        background: `url(${movie.posterUrl}) center`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="detailtext-container3">
                        <div className="detailheading12">{movie.title} </div>
                    </div>

                    <div className="detailcontainer13">
                        <div className="detailbuttons-container4">
                            <div className={`detailbutton4 ${dibIsActive ? 'active' : ''}`} onClick={dibProcess}>
                                <img className="detailicon8" src={icon7} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MovieDetail;