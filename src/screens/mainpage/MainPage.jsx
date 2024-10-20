import abstractDesign from './static/img/abstract-design.svg'
import buttonsContainer from './static/img/buttons-container.svg'
import icon from './static/img/icon.svg'
import image60 from './static/img/image-60.png'
import image61 from './static/img/image-61.png'
import image62 from './static/img/image-62.png'
import image63 from './static/img/image-63.png'
import image64 from './static/img/image-64.png'
import image65 from './static/img/image-65.png'
import image66 from './static/img/image-66.png'
import image67 from './static/img/image-67.png'
import image68 from './static/img/image-68.png'
import image69 from './static/img/image-69.png'
import image70 from './static/img/image-70.png'
import image71 from './static/img/image-71.png'
import image72 from './static/img/image-72.png'
import image73 from './static/img/image-73.png'
import image74 from './static/img/image-74.png'
import image75 from './static/img/image-75.png'
import image76 from './static/img/image-76.png'
import image77 from './static/img/image-77.png'
import image78 from './static/img/image-78.png'
import image79 from './static/img/image-79.png'
import image80 from './static/img/image-80.png'
import image81 from './static/img/image-81.png'
import image82 from './static/img/image-82.png'
import image83 from './static/img/image-83.png'
import image84 from './static/img/image-84.png'
import image85 from './static/img/image-85.png'
import image86 from './static/img/image-86.png'
import image87 from './static/img/image-87.png'
import image88 from './static/img/image-88.png'
import image89 from './static/img/image-89.png'
import image90 from './static/img/image-90.png'
import image91 from './static/img/image-91.png'
import image92 from './static/img/image-92.png'
import image93 from './static/img/image-93.png'
import image94 from './static/img/image-94.png'
import image95 from './static/img/image-95.png'
import image96 from './static/img/image-96.png'
import line from './static/img/line.svg'
import line2 from './static/img/line-2.svg'
import line7 from './static/img/line-7.svg'
import line8 from './static/img/line-8.svg'
import line9 from './static/img/line-9.svg'
import logo from './static/img/logo.svg'

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../mainpage/Mainstyle.css"

export const MainPage = () => {

  // 다른 페이지로 이동
  const navigate = useNavigate(); // navigate 훅을 사용하여 페이지 전환

  // 회원 가입 페이지로 이동
  const handleSignupClick = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  // 로그인 페이지로 이동
  const handleLoginClick = () => {
    navigate('/signin'); // 로그인 페이지로 이동
  };

  // 평점 순 상세 페이지 이동 핸들러
  const ratingHandleImageClick = async (index) => {
    try {
      const response = await axios.get(`/movies/${ratingMovies[index].movieId}`); // 백엔드 서버에 요청
      const movieData = response.data.result; // 받은 데이터

      // 다른 페이지로 데이터와 함께 이동
      navigate('/detail-page', { state: { movie: movieData } });
    } catch (error) {
      console.error('Error fetching movie data:', error); // 오류 처리
    }
  };

  const dibHandleImageClick = async (index) => {
    try {
      const response = await axios.get(`/movies/${dibMovies[index].movieId}`); // 백엔드 서버에 요청
      const movieData = response.data.result; // 받은 데이터

      // 다른 페이지로 데이터와 함께 이동
      navigate('/detail-page', { state: { movie: movieData } });
    } catch (error) {
      console.error('Error fetching movie data:', error); // 오류 처리
    }
  };

  const reviewHandleImageClick = async (index) => {
    try {
      const response = await axios.get(`/movies/${ratingMovies[index].movieId}`); // 백엔드 서버에 요청
      const movieData = response.data.result; // 받은 데이터

      // 다른 페이지로 데이터와 함께 이동
      navigate('/detail-page', { state: { movie: movieData } });
    } catch (error) {
      console.error('Error fetching movie data:', error); // 오류 처리
    }
  };

  const [inputValue, setInputValue] = useState(''); // 입력 값을 상태로 관리

  // 검색 입력 값 변화 처리 함수
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 검색 이미지 클릭 시 서버 요청 및 페이지 이동 처리 함수
  const handleSearchClick = async () => {
    try {
      // 백엔드에 입력 값을 전송하여 데이터를 요청
      const response = await axios.get('/movies/search', {
        params: {
          query: inputValue, // 입력 값을 쿼리 파라미터로 전송
        },
      });

      const responseData = response.data;
      // 콘솔에 서버 응답 데이터를 출력
      console.log('서버 응답 데이터:', responseData);

      // 서버에서 받은 데이터를 기반으로 페이지 이동
      navigate('/movie-search', { state: { data: responseData } }); // 페이지로 이동하며 데이터를 함께 전달
    } catch (error) {
      console.error('Error fetching data from server:', error);
    }
  };

  // 장르를 선택할 경우 서버 요청 및 페이지 이동 처리 함수
  const handleGenreClick = async (event) => {
    var genre = event.target.innerText; // 클릭한 태그의 텍스트를 가져옴

    switch (genre){
      case "액션":
        genre = "action";
        break;
      case "SF":
        genre = "SF";
        break;
      case "로맨스":
        genre = "romance";
        break;
      case "애니메이션":
        genre = "animation";
        break;
      case "드라마":
        genre = "drama";
        break;
      case "스릴러":
        genre = "thriller";
        break;
      case "코메디":
        genre = "comedy";
        break;
      default:
        console.log('유효하지 않은 장르입니다.');
        break;
    }

    try {
      // 클릭한 태그의 텍스트 데이터를 서버로 전송
      const response = await axios.get(`/movies/genre/${encodeURIComponent(genre)}`);

      const responseData = response.data;
      // 콘솔에 서버 응답 데이터를 출력
      console.log('서버 응답 데이터:', responseData);

      // 데이터를 받은 후, 페이지 이동 (예: /movies 페이지로)
      if (response.status === 200) {
        navigate('/movie-search', { state: { data: responseData } }); // 페이지로 이동하며 데이터를 함께 전달
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      // 에러 처리 로직 (필요시)
    }
  };

  // 메인 페이지 첫 로딩 시 백엔드 서버에 데이터 요청
  const [ratingMovies, setRatingMovies] = useState([]);  // 영화 데이터를 저장할 상태
  const [dibMovies, setDibMovies] = useState([]);  // 영화 데이터를 저장할 상태
  const [reviewMovies, setReviewMovies] = useState([]);  // 영화 데이터를 저장할 상태]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 백엔드에서 영화 데이터를 요청
    axios.get('/movies/list')  // 영화 데이터를 가져오는 백엔드 API 엔드포인트
        .then(response => {
          console.log(response);
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
      <div className="mainscreen">
        <div className="maindiv">
          <footer className="mainfooter">
            <div className="maindiv-2">
              <div className="maindiv-3">
                <div className="mainheading">Home</div>
                <div className="mainlinks-container">
                  <div className="maintext-button">Categories</div>
                  <div className="maintext-wrapper">Devices</div>
                  <div className="maintext-wrapper">Pricing</div>
                  <button className="mainbutton">FAQ</button>
                </div>
              </div>
              <div className="maindiv-3">
                <div className="mainheading">Movies</div>
                <div className="mainlinks-container">
                  <div className="maintext-button">Gernes</div>
                  <div className="maintext-wrapper">Trending</div>
                  <div className="maintext-wrapper">New Release</div>
                  <div className="maintext-wrapper">Popular</div>
                </div>
              </div>
              <div className="maindiv-3">
                <div className="mainheading">Shows</div>
                <div className="mainlinks-container">
                  <div className="maintext-button">Gernes</div>
                  <div className="maintext-wrapper">Trending</div>
                  <div className="maintext-wrapper">New Release</div>
                  <div className="maintext-wrapper">Popular</div>
                </div>
              </div>
              <div className="maindiv-3">
                <div className="mainheading">Support</div>
                <button className="mainbutton">Contact Us</button>
              </div>
              <div className="maindiv-3">
                <div className="mainheading">Subscription</div>
                <div className="mainlinks-container">
                  <div className="maintext-button">Plans</div>
                  <div className="maintext-wrapper">Features</div>
                </div>
              </div>
              <div className="maindiv-3">
                <div className="mainheading">Connect With Us</div>
                <img className="mainbuttons-container" alt="Buttons container" src={buttonsContainer}/>
              </div>
            </div>
            <div className="maincontainer">
              <img className="mainline" alt="Line" src={line}/>
              <div className="maincontainer-2">
                <p className="maintext-wrapper-2">@2023 streamvib, All Rights Reserved</p>
                <div className="mainbuttons-container-2">
                  <div className="maintext-wrapper-2">Terms of Use</div>
                  <img className="mainimg" alt="Line" src={line2}/>
                  <div className="maintext-wrapper-2">Privacy Policy</div>
                  <img className="mainimg" alt="Line" src={line2}/>
                  <div className="maintext-wrapper-2">Cookie Policy</div>
                </div>
              </div>
            </div>
          </footer>
          <div className="mainframe">
            <img className="mainline-2" alt="Line" src={line7}/>
            <div className="maincontainer-3">
              <div className="mainsub-container">
                <div className="maintext-container">
                  <div className="mainheading-2">평점 순</div>
                </div>
              </div>
              <div className="maindiv-2">
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {ratingMovies.length >= 1 && (
                          <img className="mainimage" src={ratingMovies[0].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => ratingHandleImageClick(0)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {ratingMovies.length >= 1 && (
                          <>
                            <div className="mainheading-3">{ratingMovies[0].title}</div>
                            <div className="mainheading-3">{ratingMovies[0].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {ratingMovies.length >= 2 && (
                          <img className="mainimage" src={ratingMovies[1].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => ratingHandleImageClick(1)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {ratingMovies.length >= 2 && (
                          <>
                            <div className="mainheading-3">{ratingMovies[1].title}</div>
                            <div className="mainheading-3">{ratingMovies[1].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {ratingMovies.length >= 3 && (
                          <img className="mainimage" alt="Image" src={ratingMovies[2].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => ratingHandleImageClick(2)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {ratingMovies.length >= 3 && (
                          <>
                            <div className="mainheading-3">{ratingMovies[2].title}</div>
                            <div className="mainheading-3">{ratingMovies[2].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {ratingMovies.length >= 4 && (
                          <img className="mainimage" alt="Image" src={ratingMovies[3].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => ratingHandleImageClick(3)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {ratingMovies.length >= 4 && (
                          <>
                            <div className="mainheading-3">{ratingMovies[3].title}</div>
                            <div className="mainheading-3">{ratingMovies[3].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {ratingMovies.length >= 5 && (
                          <img className="mainimage" alt="Image" src={ratingMovies[4].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => ratingHandleImageClick(4)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {ratingMovies.length >= 5 && (
                          <>
                            <div className="mainheading-3">{ratingMovies[4].title}</div>
                            <div className="mainheading-3">{ratingMovies[4].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="mainline-3" alt="Line" src={line7}/>
            <div className="maincontainer-3">
              <div className="mainsub-container">
                <div className="maintext-container">
                  <div className="mainheading-2">찜 많은 순</div>
                </div>
              </div>
              <div className="maindiv-2">
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {dibMovies.length >= 1 && (
                          <img className="mainimage" alt="Image" src={dibMovies[0].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => dibHandleImageClick(0)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {dibMovies.length >= 1 && (
                          <>
                            <div className="mainheading-3">{dibMovies[0].title}</div>
                            <div className="mainheading-3">{dibMovies[0].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {dibMovies.length >= 2 && (
                          <img className="mainimage" alt="Image" src={dibMovies[1].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => dibHandleImageClick(1)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {dibMovies.length >= 2 && (
                          <>
                            <div className="mainheading-3">{dibMovies[1].title}</div>
                            <div className="mainheading-3">{dibMovies[1].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {dibMovies.length >= 3 && (
                          <img className="mainimage" alt="Image" src={dibMovies[2].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => dibHandleImageClick(2)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {dibMovies.length >= 3 && (
                          <>
                            <div className="mainheading-3">{dibMovies[2].title}</div>
                            <div className="mainheading-3">{dibMovies[2].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {dibMovies.length >= 4 && (
                          <img className="mainimage" alt="Image" src={dibMovies[3].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => dibHandleImageClick(3)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {dibMovies.length >= 4 && (
                          <>
                            <div className="mainheading-3">{dibMovies[3].title}</div>
                            <div className="mainheading-3">{dibMovies[3].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {dibMovies.length >= 5 && (
                          <img className="mainimage" alt="Image" src={dibMovies[4].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => dibHandleImageClick(4)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {dibMovies.length >= 5 && (
                          <>
                            <div className="mainheading-3">{dibMovies[4].title}</div>
                            <div className="mainheading-3">{dibMovies[4].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="mainline-4" alt="Line" src={line8}/>
            <div className="maincontainer-3">
              <div className="mainsub-container">
                <div className="maintext-container">
                  <div className="mainheading-2">리뷰 많은 순</div>
                </div>
              </div>
              <div className="maindiv-2">
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {reviewMovies.length >= 1 && (
                          <img className="mainimage" alt="Image" src={reviewMovies[0].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => reviewHandleImageClick(0)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {reviewMovies.length >= 1 && (
                          <>
                            <div className="mainheading-3">{reviewMovies[0].title}</div>
                            <div className="mainheading-3">{reviewMovies[0].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {reviewMovies.length >= 2 && (
                          <img className="mainimage" alt="Image" src={reviewMovies[1].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => reviewHandleImageClick(1)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {reviewMovies.length >= 2 && (
                          <>
                            <div className="mainheading-3">{reviewMovies[1].title}</div>
                            <div className="mainheading-3">{reviewMovies[1].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {reviewMovies.length >= 3 && (
                          <img className="mainimage" alt="Image" src={reviewMovies[2].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => reviewHandleImageClick(2)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {reviewMovies.length >= 3 && (
                          <>
                            <div className="mainheading-3">{reviewMovies[2].title}</div>
                            <div className="mainheading-3">{reviewMovies[2].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {reviewMovies.length >= 4 && (
                          <img className="mainimage" alt="Image" src={reviewMovies[3].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => reviewHandleImageClick(3)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {reviewMovies.length >= 4 && (
                          <>
                            <div className="mainheading-3">{reviewMovies[3].title}</div>
                            <div className="mainheading-3">{reviewMovies[3].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="maincard">
                  <div className="maincontainer-4">
                    <div className="mainimage-container">
                      {reviewMovies.length >= 5 && (
                          <img className="mainimage" alt="Image" src={reviewMovies[4].posterUrl}/>
                      )}
                    </div>
                    <div
                        className="mainfade-out-bottom"
                        onClick={() => reviewHandleImageClick(4)} // 이미지 클릭 시 이벤트 핸들러 호출
                    />
                  </div>
                  <div className="maincontainer-5">
                    <div className="mainframe-2">
                      {reviewMovies.length >= 5 && (
                          <>
                            <div className="mainheading-3">{reviewMovies[4].title}</div>
                            <div className="mainheading-3">{reviewMovies[4].releaseDate}</div>
                          </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="mainline-5" alt="Line" src={line9}/>
            <div className="maintext-wrapper-3">장르</div>
            <div className="mainframe-3">
              <div className="maingroup">
                <div className="mainoverlap-group">
                  <div className="maintext-wrapper-4" onClick={handleGenreClick}>액션</div>
                </div>
              </div>
              <div className="maingroup">
                <div className="mainoverlap-group">
                  <div className="maintext-wrapper-4" onClick={handleGenreClick}>SF</div>
                </div>
              </div>
              <div className="maingroup">
                <div className="mainoverlap-group">
                  <div className="maintext-wrapper-4" onClick={handleGenreClick}>로맨스</div>
                </div>
              </div>
              <div className="maingroup">
                <div className="mainoverlap-group">
                  <div className="maintext-wrapper-4" onClick={handleGenreClick}>애니메이션</div>
                </div>
              </div>
              <div className="maingroup">
                <div className="mainoverlap-group">
                  <div className="maintext-wrapper-4" onClick={handleGenreClick}>드라마</div>
                </div>
              </div>
              <div className="maingroup">
                <div className="mainoverlap-group">
                  <div className="maintext-wrapper-4" onClick={handleGenreClick}>스릴러</div>
                </div>
              </div>
              <div className="maingroup">
                <div className="mainoverlap-group">
                  <div className="maintext-wrapper-4" onClick={handleGenreClick}>코메디</div>
                </div>
              </div>
            </div>
            <img className="mainline-5" alt="Line" src={line9}/>
          </div>
          <input className="maininput"
                 type="text"
              value={inputValue}
              onChange={handleInputChange} // 입력값 변화 시 상태 업데이트
          />
          <img className="mainicon-2"
               alt="Icon"
               src={icon}
              onClick={handleSearchClick} // 이미지 클릭 시 전역 변수 업데이트 및 페이지 이동
              style={{ cursor: 'pointer' }} // 클릭 가능하게 커서 스타일 추가
          />
          <div className="mainoverlap-3">
            <div className="mainsub-container-wrapper">
              <div className="mainsub-container-2">
                <div className="mainimage-container-2">
                  <img className="maintopImage" alt="Image" src={image60}/>
                  <img className="maintopImage" alt="Image" src={image61}/>
                  <img className="maintopImage" alt="Image" src={image62}/>
                  <img className="maintopImage" alt="Image" src={image63}/>
                  <img className="maintopImage" alt="Image" src={image64}/>
                  <img className="maintopImage" alt="Image" src={image65}/>
                  <img className="maintopImage" alt="Image" src={image66}/>
                  <img className="maintopImage" alt="Image" src={image67}/>
                  <img className="maintopImage" alt="Image" src={image68}/>
                </div>
                <div className="mainimage-container-2">
                  <img className="maintopImage" alt="Image" src={image69}/>
                  <img className="maintopImage" alt="Image" src={image70}/>
                  <img className="maintopImage" alt="Image" src={image71}/>
                  <img className="maintopImage" alt="Image" src={image72}/>
                  <img className="maintopImage" alt="Image" src={image73}/>
                  <img className="maintopImage" alt="Image" src={image74}/>
                  <img className="maintopImage" alt="Image" src={image75}/>
                  <img className="maintopImage" alt="Image" src={image76}/>
                  <img className="maintopImage" alt="Image" src={image77}/>
                </div>
                <div className="mainimage-container-2">
                  <img className="maintopImage" alt="Image" src={image78}/>
                  <img className="maintopImage" alt="Image" src={image79}/>
                  <img className="maintopImage" alt="Image" src={image80}/>
                  <img className="maintopImage" alt="Image" src={image81}/>
                  <img className="maintopImage" alt="Image" src={image82}/>
                  <img className="maintopImage" alt="Image" src={image83}/>
                  <img className="maintopImage" alt="Image" src={image84}/>
                  <img className="maintopImage" alt="Image" src={image85}/>
                  <img className="maintopImage" alt="Image" src={image86}/>
                </div>
                <div className="mainimage-container-2">
                  <img className="maintopImage" alt="Image" src={image87}/>
                  <img className="maintopImage" alt="Image" src={image88}/>
                  <img className="maintopImage" alt="Image" src={image89}/>
                  <img className="maintopImage" alt="Image" src={image90}/>
                  <img className="maintopImage" alt="Image" src={image91}/>
                  <img className="maintopImage" alt="Image" src={image92}/>
                  <img className="maintopImage" alt="Image" src={image93}/>
                  <img className="maintopImage" alt="Image" src={image94}/>
                  <img className="maintopImage" alt="Image" src={image95}/>
                </div>
                <img className="mainimage-2" alt="Image" src={image96}/>
                <div className="mainfade-out-top"/>
                <div className="mainfade-out-bottom-2"/>
                <img className="mainabstract-design" alt="Abstract design" src={abstractDesign}/>
              </div>
            </div>
            <div className="mainview">
              <img className="mainlogo" alt="Logo" src={logo}/>
              <div className="mainbuttons-container-3">
                <div className="maintext-wrapper-5" onClick={handleLoginClick} style={{cursor: 'pointer'}}>로그인</div>
                <div className="maintext-wrapper-6" onClick={handleSignupClick} style={{cursor: 'pointer'}}>회원가입</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
