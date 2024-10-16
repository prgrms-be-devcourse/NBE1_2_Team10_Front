import abstractDesign from '../static/img/abstract-design.svg'
import button14 from '../static/img/button-14.svg'
import buttonsContainer from '../static/img/buttons-container.svg'
import icon from '../static/img/icon.svg'
import image60 from '../static/img/image-60.png'
import image61 from '../static/img/image-61.png'
import image62 from '../static/img/image-62.png'
import image63 from '../static/img/image-63.png'
import image64 from '../static/img/image-64.png'
import image65 from '../static/img/image-65.png'
import image66 from '../static/img/image-66.png'
import image67 from '../static/img/image-67.png'
import image68 from '../static/img/image-68.png'
import image69 from '../static/img/image-69.png'
import image70 from '../static/img/image-70.png'
import image71 from '../static/img/image-71.png'
import image72 from '../static/img/image-72.png'
import image73 from '../static/img/image-73.png'
import image74 from '../static/img/image-74.png'
import image75 from '../static/img/image-75.png'
import image76 from '../static/img/image-76.png'
import image77 from '../static/img/image-77.png'
import image78 from '../static/img/image-78.png'
import image79 from '../static/img/image-79.png'
import image80 from '../static/img/image-80.png'
import image81 from '../static/img/image-81.png'
import image82 from '../static/img/image-82.png'
import image83 from '../static/img/image-83.png'
import image84 from '../static/img/image-84.png'
import image85 from '../static/img/image-85.png'
import image86 from '../static/img/image-86.png'
import image87 from '../static/img/image-87.png'
import image88 from '../static/img/image-88.png'
import image89 from '../static/img/image-89.png'
import image90 from '../static/img/image-90.png'
import image91 from '../static/img/image-91.png'
import image92 from '../static/img/image-92.png'
import image93 from '../static/img/image-93.png'
import image94 from '../static/img/image-94.png'
import image95 from '../static/img/image-95.png'
import image96 from '../static/img/image-96.png'
import line from '../static/img/line.svg'
import line2 from '../static/img/line-2.svg'
import line7 from '../static/img/line-7.svg'
import line8 from '../static/img/line-8.svg'
import line9 from '../static/img/line-9.svg'
import logo from '../static/img/logo.svg'

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

export const MainPage = () => {

  // 다른 페이지로 이동
  const navigate = useNavigate(); // navigate 훅을 사용하여 페이지 전환

  const handleImageClick = () => {
    console.log('Image clicked!'); // 클릭 시 로그 출력
    navigate("/another-page"); // 클릭 시 AnotherPage로 이동
  };

  // 백엔드 서버에 데이터 요청
  const [ratingMovies, setRatingMovies] = useState([]);  // 영화 데이터를 저장할 상태
  const [dibMovies, setDibMovies] = useState([]);  // 영화 데이터를 저장할 상태
  const [reviewMovies, setReviewMovies] = useState([]);  // 영화 데이터를 저장할 상태]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 백엔드에서 영화 데이터를 요청
    axios.get('/movies/list')  // 영화 데이터를 가져오는 백엔드 API 엔드포인트
        .then(response => {
          const ratingMovieList = response.data.result.ratingMovieList;
          const dibMovieList = response.data.result.dibMovieList;  // dibMovieList만 추출
          const reviewMovieList = response.data.result.reviewMovieList;
          setRatingMovies(ratingMovieList);  // 받아온 영화 목록을 상태에 저장
          setDibMovies(dibMovieList);
          setReviewMovies(reviewMovieList);
          setLoading(false);
        })
        .catch(error => {
          setError(error);  // 에러 처리
          setLoading(false);
        });
  }, []);  // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="screen">
      <div className="div">
        <footer className="footer">
          <div className="div-2">
            <div className="div-3">
              <div className="heading">Home</div>
              <div className="links-container">
                <div className="text-button">Categories</div>
                <div className="text-wrapper">Devices</div>
                <div className="text-wrapper">Pricing</div>
                <button className="button">FAQ</button>
              </div>
            </div>
            <div className="div-3">
              <div className="heading">Movies</div>
              <div className="links-container">
                <div className="text-button">Gernes</div>
                <div className="text-wrapper">Trending</div>
                <div className="text-wrapper">New Release</div>
                <div className="text-wrapper">Popular</div>
              </div>
            </div>
            <div className="div-3">
              <div className="heading">Shows</div>
              <div className="links-container">
                <div className="text-button">Gernes</div>
                <div className="text-wrapper">Trending</div>
                <div className="text-wrapper">New Release</div>
                <div className="text-wrapper">Popular</div>
              </div>
            </div>
            <div className="div-3">
              <div className="heading">Support</div>
              <button className="button">Contact Us</button>
            </div>
            <div className="div-3">
              <div className="heading">Subscription</div>
              <div className="links-container">
                <div className="text-button">Plans</div>
                <div className="text-wrapper">Features</div>
              </div>
            </div>
            <div className="div-3">
              <div className="heading">Connect With Us</div>
              <img className="buttons-container" alt="Buttons container" src={buttonsContainer}/>
            </div>
          </div>
          <div className="container">
            <img className="line" alt="Line" src={line}/>
            <div className="container-2">
              <p className="text-wrapper-2">@2023 streamvib, All Rights Reserved</p>
              <div className="buttons-container-2">
                <div className="text-wrapper-2">Terms of Use</div>
                <img className="img" alt="Line" src={line2}/>
                <div className="text-wrapper-2">Privacy Policy</div>
                <img className="img" alt="Line" src={line2}/>
                <div className="text-wrapper-2">Cookie Policy</div>
              </div>
            </div>
          </div>
        </footer>
        <div className="frame">
          <img className="line-2" alt="Line" src={line7}/>
          <div className="container-3">
            <div className="sub-container">
              <div className="text-container">
                <div className="heading-2">평점 순</div>
              </div>
            </div>
            <div className="div-2">
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {ratingMovies.length >= 1 && (
                        <img className="image" src={ratingMovies[0].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {ratingMovies.length >= 1 && (
                        <>
                          <div className="heading-3">{ratingMovies[0].title}</div>
                          <div className="heading-3">{ratingMovies[0].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {ratingMovies.length >= 2 && (
                        <img className="image" src={ratingMovies[1].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {ratingMovies.length >= 2 && (
                        <>
                          <div className="heading-3">{ratingMovies[1].title}</div>
                          <div className="heading-3">{ratingMovies[1].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {ratingMovies.length >= 3 && (
                        <img className="image" alt="Image" src={ratingMovies[2].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {ratingMovies.length >= 3 && (
                        <>
                          <div className="heading-3">{ratingMovies[2].title}</div>
                          <div className="heading-3">{ratingMovies[2].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {ratingMovies.length >= 4 && (
                        <img className="image" alt="Image" src={ratingMovies[3].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {ratingMovies.length >= 4 && (
                        <>
                          <div className="heading-3">{ratingMovies[3].title}</div>
                          <div className="heading-3">{ratingMovies[3].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {ratingMovies.length >= 5 && (
                        <img className="image" alt="Image" src={ratingMovies[4].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {ratingMovies.length >= 5 && (
                        <>
                          <div className="heading-3">{ratingMovies[4].title}</div>
                          <div className="heading-3">{ratingMovies[4].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
            </div>
          </div>
          <img className="line-3" alt="Line" src={line7}/>
          <div className="container-3">
            <div className="sub-container">
              <div className="text-container">
                <div className="heading-2">찜 많은 순</div>
              </div>
            </div>
            <div className="div-2">
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {dibMovies.length >= 1 && (
                        <img className="image" alt="Image" src={dibMovies[0].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {dibMovies.length >= 1 && (
                        <>
                          <div className="heading-3">{dibMovies[0].title}</div>
                          <div className="heading-3">{dibMovies[0].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {dibMovies.length >= 2 && (
                        <img className="image" alt="Image" src={dibMovies[1].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {dibMovies.length >= 2 && (
                        <>
                          <div className="heading-3">{dibMovies[1].title}</div>
                          <div className="heading-3">{dibMovies[1].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {dibMovies.length >= 3 && (
                        <img className="image" alt="Image" src={dibMovies[2].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {dibMovies.length >= 3 && (
                        <>
                          <div className="heading-3">{dibMovies[2].title}</div>
                          <div className="heading-3">{dibMovies[2].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {dibMovies.length >= 4 && (
                        <img className="image" alt="Image" src={dibMovies[3].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {dibMovies.length >= 4 && (
                        <>
                          <div className="heading-3">{dibMovies[3].title}</div>
                          <div className="heading-3">{dibMovies[3].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {dibMovies.length >= 5 && (
                        <img className="image" alt="Image" src={dibMovies[4].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {dibMovies.length >= 5 && (
                        <>
                          <div className="heading-3">{dibMovies[4].title}</div>
                          <div className="heading-3">{dibMovies[4].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
            </div>
          </div>
          <img className="line-4" alt="Line" src={line8}/>
          <div className="container-3">
            <div className="sub-container">
              <div className="text-container">
                <div className="heading-2">리뷰 많은 순</div>
              </div>
            </div>
            <div className="div-2">
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {reviewMovies.length >= 1 && (
                        <img className="image" alt="Image" src={reviewMovies[0].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {reviewMovies.length >= 1 && (
                        <>
                          <div className="heading-3">{reviewMovies[0].title}</div>
                          <div className="heading-3">{reviewMovies[0].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {reviewMovies.length >= 2 && (
                        <img className="image" alt="Image" src={reviewMovies[1].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {reviewMovies.length >= 2 && (
                        <>
                          <div className="heading-3">{reviewMovies[1].title}</div>
                          <div className="heading-3">{reviewMovies[1].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {reviewMovies.length >= 3 && (
                        <img className="image" alt="Image" src={reviewMovies[2].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {reviewMovies.length >= 3 && (
                        <>
                          <div className="heading-3">{reviewMovies[2].title}</div>
                          <div className="heading-3">{reviewMovies[2].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {reviewMovies.length >= 4 && (
                        <img className="image" alt="Image" src={reviewMovies[3].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {reviewMovies.length >= 4 && (
                        <>
                          <div className="heading-3">{reviewMovies[3].title}</div>
                          <div className="heading-3">{reviewMovies[3].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
              <div className="card">
                <div className="container-4">
                  <div className="image-container">
                    {reviewMovies.length >= 5 && (
                        <img className="image" alt="Image" src={reviewMovies[4].posterUrl}/>
                    )}
                  </div>
                  <div
                      className="fade-out-bottom"
                      onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
                  />
                </div>
                <div className="container-5">
                  <div className="frame-2">
                    {reviewMovies.length >= 5 && (
                        <>
                          <div className="heading-3">{reviewMovies[4].title}</div>
                          <div className="heading-3">{reviewMovies[4].releaseDate}</div>
                        </>
                    )}
                  </div>
                  <img className="button-2" alt="Button" src={button14}/>
                </div>
              </div>
            </div>
          </div>
          <img className="line-5" alt="Line" src={line9}/>
          <div className="text-wrapper-3">장르</div>
          <div className="frame-3">
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">로맨스</div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">공포</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="SF">SF&amp;판타지</div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">범죄</div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">코메디</div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">드라마</div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">모험</div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper-4">액션</div>
              </div>
            </div>
          </div>
          <img className="line-5" alt="Line" src={line9}/>
        </div>
        <div className="overlap-group-wrapper">
          <input className = "input" type="text"/>
          {/*<div className="overlap-2">*/}
            <img className="icon-2" alt="Icon" src={icon}/>
            <div className="rectangle"/>
          {/*</div>*/}
        </div>
        <div className="overlap-3">
          <div className="sub-container-wrapper">
            <div className="sub-container-2">
              <div className="image-container-2">
                <img className="topImage" alt="Image" src={image60}/>
                <img className="topImage" alt="Image" src={image61}/>
                <img className="topImage" alt="Image" src={image62}/>
                <img className="topImage" alt="Image" src={image63}/>
                <img className="topImage" alt="Image" src={image64}/>
                <img className="topImage" alt="Image" src={image65}/>
                <img className="topImage" alt="Image" src={image66}/>
                <img className="topImage" alt="Image" src={image67}/>
                <img className="topImage" alt="Image" src={image68}/>
              </div>
              <div className="image-container-2">
                <img className="topImage" alt="Image" src={image69}/>
                <img className="topImage" alt="Image" src={image70}/>
                <img className="topImage" alt="Image" src={image71}/>
                <img className="topImage" alt="Image" src={image72}/>
                <img className="topImage" alt="Image" src={image73}/>
                <img className="topImage" alt="Image" src={image74}/>
                <img className="topImage" alt="Image" src={image75}/>
                <img className="topImage" alt="Image" src={image76}/>
                <img className="topImage" alt="Image" src={image77}/>
              </div>
              <div className="image-container-2">
                <img className="topImage" alt="Image" src={image78}/>
                <img className="topImage" alt="Image" src={image79}/>
                <img className="topImage" alt="Image" src={image80}/>
                <img className="topImage" alt="Image" src={image81}/>
                <img className="topImage" alt="Image" src={image82}/>
                <img className="topImage" alt="Image" src={image83}/>
                <img className="topImage" alt="Image" src={image84}/>
                <img className="topImage" alt="Image" src={image85}/>
                <img className="topImage" alt="Image" src={image86}/>
              </div>
              <div className="image-container-2">
                <img className="topImage" alt="Image" src={image87}/>
                <img className="topImage" alt="Image" src={image88}/>
                <img className="topImage" alt="Image" src={image89}/>
                <img className="topImage" alt="Image" src={image90}/>
                <img className="topImage" alt="Image" src={image91}/>
                <img className="topImage" alt="Image" src={image92}/>
                <img className="topImage" alt="Image" src={image93}/>
                <img className="topImage" alt="Image" src={image94}/>
                <img className="topImage" alt="Image" src={image95}/>
              </div>
              <img className="image-2" alt="Image" src={image96}/>
              <div className="fade-out-top"/>
              <div className="fade-out-bottom-2"/>
              <img className="abstract-design" alt="Abstract design" src={abstractDesign}/>
            </div>
          </div>
          <div className="view">
            <img className="logo" alt="Logo" src={logo}/>
            <div className="buttons-container-3">
              <div className="text-wrapper-5">로그인</div>
              <div className="text-wrapper-6">회원가입</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
