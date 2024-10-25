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

    const navigate = useNavigate();

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
        // Navigate to the review detail page
        navigate(`/movies/${movie.movieId}/reviews/${reviewId}`);
    };

    // 개봉일 포맷팅 함수
    const formatReleaseDate = (date) => {
        return date.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
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

    // 리뷰
    //const ReviewList = ({movieId}) => {
    //     const [reviews, setReviews] = useState([]);  // 한줄평 목록
    //     const [sort, setSort] = useState('LATEST'); // 정렬 기준(Default : 최신순)
    //
    //
    //     useEffect(() => {
    //
    //         // 백엔드에서 데이터 받아오기
    //         const fetchComments = async () => {
    //             try {
    //                 const response = await axios.get(`/movies/${movieId}/reviews/list`, {
    //                     params: {page: 0, sort, content: false}
    //                 });
    //
    //                 // 콘솔에 서버 응답 데이터를 출력
    //                 console.log('서버 응답 데이터:', response);
    //
    //                 if (!response.data.isSuccess) {
    //                     console.error(`Error: ${response.data.message} (Code: ${response.data.code})`);
    //                     return; // 에러 처리
    //                 }
    //
    //                 // 응답에서 reviewList 추출
    //                 const reviewList = response.data.result;
    //
    //                 // reviewList가 배열인지 확인 후 상태 업데이트
    //                 if (Array.isArray(reviewList)) {
    //                     setReviews(reviewList);
    //                 } else {
    //                     setReviews([]); // 빈 배열로 초기화
    //                 }
    //
    //                 console.log('첫번째 리뷰:', reviews[0])
    //                 //setTotalPages(10); //테스트 위해서 임의로 정한 값
    //
    //                 // 백에서 Pageable 적용 완료되면 아래 코드로 변경
    //                 // setComments(response.data.result.content);
    //                 // setTotalPages(response.data.result.pageable.totalPages);
    //             } catch (error) {
    //                 console.error("한줄평을 불러오는 데에 실패했습니다");
    //             }
    //         };
    //
    //         fetchComments();
    //     }, [sort, movieId]);
    //
    //     // 정렬 기준 변경
    //     const handleSortChange = (type) => {
    //         setSort(type);
    //         //setCurrentPage(0); // 정렬 기준 바뀌면 첫번째 페이지로 이동
    //     };
    //
    //     return (
    //         <div>
    //             {/* 정렬 버튼 */}
    //             <div className="sort-buttons">
    //                 <button
    //                     onClick={() => handleSortChange('LIKE')}
    //                     className={sort === 'LIKE' ? 'active' : ''}
    //                 >
    //                     좋아요순
    //                 </button>
    //                 <button
    //                     onClick={() => handleSortChange('LATEST')}
    //                     className={sort === 'LATEST' ? 'active' : ''}
    //                 >
    //                     최신순
    //                 </button>
    //             </div>
    //
    //             {/* 리 */}
    //             <div className="footer2">
    //                 {reviews.length > 0 ? (
    //                     <>
    //                         <div className="form">
    //                             <div className="heading3">reviews[0].userId</div>
    //                             <div className="heading4">reviews[0].title</div>
    //                             <div className="heading6">reviews[0].createdAt</div>
    //                         </div>
    //
    //                     </>
    //                 ) : (
    //                     <div className="text3">리뷰가 없습니다</div>
    //                 )}
    //             </div>
    //         </div>
    //     );
    // 한줄평
    const CommentList = ({movieId}) => {
        const [comments, setComments] = useState([]);  // 한줄평 목록
        const [sortType, setSortType] = useState('LATEST'); // 정렬 기준(Default : 최신순)


        useEffect(() => {

            // 백엔드에서 데이터 받아오기
            const fetchComments = async () => {
                try {
                    const response = await axios.get(`/movies/${movieId}/comments`, {
                        params: {page: 0, sortType}
                    });

                    // 콘솔에 서버 응답 데이터를 출력
                    console.log('서버 응답 데이터:', response);

                    if (!response.data.isSuccess) {
                        console.error(`Error: ${response.data.message} (Code: ${response.data.code})`);
                        return; // 에러 처리
                    }

                    // 응답에서 reviewList 추출
                    const reviewList = response.data.result;

                    // reviewList가 배열인지 확인 후 상태 업데이트
                    if (Array.isArray(reviewList)) {
                        setComments(reviewList);
                    } else {
                        setComments([]); // 빈 배열로 초기화
                    }

                    console.log('첫번째 리뷰:', comments[0])
                    //setTotalPages(10); //테스트 위해서 임의로 정한 값

                    // 백에서 Pageable 적용 완료되면 아래 코드로 변경
                    // setComments(response.data.result.content);
                    // setTotalPages(response.data.result.pageable.totalPages);
                } catch (error) {
                    console.error("한줄평을 불러오는 데에 실패했습니다");
                }
            };

            fetchComments();
        }, [sortType, movieId]);

        // 정렬 기준 변경
        const handleSortChange = (type) => {
            setSortType(type);
            //setCurrentPage(0); // 정렬 기준 바뀌면 첫번째 페이지로 이동
        };

        return (
            <div>
                {/* 정렬 버튼 */}
                <div className="sort-buttons">
                    <button
                        onClick={() => handleSortChange('LIKE')}
                        className={sortType === 'LIKE' ? 'active' : ''}
                    >
                        좋아요순
                    </button>
                    <button
                        onClick={() => handleSortChange('LATEST')}
                        className={sortType === 'LATEST' ? 'active' : ''}
                    >
                        최신순
                    </button>
                </div>

                {/* 한줄평 */}
                <div className="footer5">
                    {comments.length > 0 ? (
                        <>
                            <div className="text3">{comments[0]?.userId || '알 수 없는 사용자'}</div>
                            <SubContainer className="sub-container-instance"></SubContainer>
                            <div className="group-6">
                                <div className="rectangle-515"></div>
                                <div className="div6">{comments[0]?.content}</div>
                                <div className="text4">{comments[0]?.createdAt}</div>
                            </div>
                            <div className="icons">
                                <img
                                    className="heroicons-solid-hand-thumb-up"
                                    src={heroiconssolidhandthumbup0}
                                />
                                <div className="text5">{comments[0]?.like}</div>
                                <img
                                    className="heroicons-solid-hand-thumb-up2"
                                    src={heroiconssolidhandthumbup1}
                                />
                                <div className="text5">{comments[0]?.dislike}</div>
                            </div>
                        </>
                    ) : (
                        <div className="text3">댓글이 없습니다</div>
                    )}
                </div>
            </div>
        );
        // <div className="footer5">
        //   <div className="text3">{comments[0].userId} </div>
        //   <SubContainer className="sub-container-instance"></SubContainer>
        //   <div className="group-6">
        //     <div className="rectangle-515"></div>
        //     <div className="div6">{comments[0].content} </div>
        //     <div className="text4">{comments[0].createdAt} </div>
        //   </div>
        //   <div className="icons">
        //     <img
        //         className="heroicons-solid-hand-thumb-up"
        //         src={heroiconssolidhandthumbup0}
        //     />
        //     <div className="text5">{comments[0].like} </div>
        //     <img
        //         className="heroicons-solid-hand-thumb-up2"
        //         src={heroiconssolidhandthumbup1}
        //     />
        //     <div className="text5">{comments[0].dislike} </div>
        //   </div>
        // </div>

        {/*<div className="footer6">*/
        }
        {/*  <div className="text3">{comments[1].userId} </div>*/
        }
        {/*  <SubContainer className="sub-container-instance"></SubContainer>*/
        }
        {/*  <div className="group-6">*/
        }
        {/*    <div className="rectangle-515"></div>*/
        }
        {/*    <div className="div6">{comments[1].content} </div>*/
        }
        {/*    <div className="text4">{comments[1].createdAt} </div>*/
        }
        {/*  </div>*/
        }
        {/*  <div className="icons">*/
        }
        {/*    <img*/
        }
        {/*        className="heroicons-solid-hand-thumb-up3"*/
        }
        {/*        src={heroiconssolidhandthumbup2}*/
        }
        {/*    />*/
        }
        {/*    <div className="text5">{comments[1].like} </div>*/
        }
        {/*    <img*/
        }
        {/*        className="heroicons-solid-hand-thumb-up4"*/
        }
        {/*        src={heroiconssolidhandthumbup3}*/
        }
        {/*    />*/
        }
        {/*    <div className="text5">{comments[1].dislike} </div>*/
        }
        {/*  </div>*/
        }
        {/*</div>*/
        }

        {/*<div className="footer6">*/
        }
        {/*  <div className="text3">{comments[2].userId} </div>*/
        }
        {/*  <SubContainer className="sub-container-instance"></SubContainer>*/
        }
        {/*  <div className="group-6">*/
        }
        {/*    <div className="rectangle-515"></div>*/
        }
        {/*    <div className="div6">{comments[2].content} </div>*/
        }
        {/*    <div className="text4">{comments[2].createdAt} </div>*/
        }
        {/*  </div>*/
        }
        {/*  <div className="icons">*/
        }
        {/*    <img*/
        }
        {/*        className="heroicons-solid-hand-thumb-up5"*/
        }
        {/*        src={heroiconssolidhandthumbup4}*/
        }
        {/*    />*/
        }
        {/*    <div className="text5">{comments[2].like} </div>*/
        }
        {/*    <img*/
        }
        {/*        className="heroicons-solid-hand-thumb-up6"*/
        }
        {/*        src={heroiconssolidhandthumbup5}*/
        }
        {/*    />*/
        }
        {/*    <div className="text5">{comments[2].dislike} </div>*/
        }
        {/*  </div>*/
        }
        {/*</div>*/
        }

        // </div>
        // );
    };

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
                    <div className="detaillogo">
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

                {/*<ReviewList movieId={movie.movieId}/>*/}

                <div className="detailheading7">Reviews</div>
                <div className="detailbutton2" onClick={handleAddReviewClick}>
                    <div className="detailtext2">Add Your Review</div>
                </div>

                <div className="detailline-6"></div>

                {/*<div className="detailframe-9">*/}
                {/*  <div className="detailgroup-15">*/}
                {/*    <div className="detailrectangle-518"></div>*/}
                {/*    <div className="detaildiv4">&lt; </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-15">*/}
                {/*    <div className="detailrectangle-5182"></div>*/}
                {/*    <div className="detail_1">1 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-14">*/}
                {/*    <div className="detailrectangle-5183"></div>*/}
                {/*    <div className="detail_2">2 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-17">*/}
                {/*    <div className="detailrectangle-5184"></div>*/}
                {/*    <div className="detail_3">3 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-23">*/}
                {/*    <div className="detailrectangle-5185"></div>*/}
                {/*    <div className="detail_4">4 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-22">*/}
                {/*    <div className="detailrectangle-5186"></div>*/}
                {/*    <div className="detail_5">5 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-21">*/}
                {/*    <div className="detailrectangle-5187"></div>*/}
                {/*    <div className="detail_6">6 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-20">*/}
                {/*    <div className="detailrectangle-5188"></div>*/}
                {/*    <div className="detail_7">7 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-24">*/}
                {/*    <div className="detailrectangle-5189"></div>*/}
                {/*    <div className="detail_8">8 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-19">*/}
                {/*    <div className="detailrectangle-51810"></div>*/}
                {/*    <div className="detail_9">9 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-18">*/}
                {/*    <div className="detailrectangle-51811"></div>*/}
                {/*    <div className="detail_10">10 </div>*/}
                {/*  </div>*/}
                {/*  <div className="detailgroup-25">*/}
                {/*    <div className="detailrectangle-51812"></div>*/}
                {/*    <div className="detaildiv5">&gt; </div>*/}
                {/*  </div>*/}
                {/*</div>*/}

                <CommentList movieId={movie.movieId}/>

                <div className="detailsub-container5">
                    <div className="detailheading8">Brief Reviews</div>
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
                                            <img className="detailshape" src={shape0}/>
                                            <img className="detailshape2" src={shape1}/>
                                            <img className="detailshape3" src={shape2}/>
                                            <img className="detailshape4" src={shape3}/>
                                            <img className="detailshape5" src={shape4}/>
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
                            <div className="detailbutton4">
                                <img className="detailicon8" src={icon7}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
// };
};

export default MovieDetail;