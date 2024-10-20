import icon0 from './public/icon0.svg'
import icon1 from './public/icon1.svg'
import icon2 from './public/icon2.svg'
import icon3 from './public/icon3.svg'
import icon4 from './public/icon4.svg'
import stream from './public/stream-vibe0.svg'
import vector1 from './public/vector1.svg'

import "./Search.css";
import React, {useState} from "react";
import {useLocation} from 'react-router-dom';
import axios from "axios"; // 전달된 데이터를 가져오기 위한 useLocation

export const Search = ({className, ...props}) => {

    const location = useLocation();
    const initialData = location.state ? location.state.data : {}; // navigate에서 전달된 데이터 가져오기
    const [inputValue, setInputValue] = useState(""); // 입력값 상태 관리
    const [stateData, setData] = useState(initialData); // 초기 데이터 상태 관리

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // 입력값 변화 시 상태 업데이트
    };

    const handleSearchClick = async () => {
        try {
            const response = await axios.get('/movies/search', {
                params: {
                    query: inputValue, // 입력 값을 쿼리 파라미터로 전송
                },
            });
            setData(response.data); // 응답 데이터 상태 업데이트
            console.log('사용자 검색 데이터 : ', response.data); // 응답 데이터 출력
        } catch (error) {
            console.error('Error fetching data:', error); // 에러 처리
        }
    };

    // JSON 데이터의 result 속성만 추출
    const resultData = stateData?.result || []; // 상태에서 result 속성 추출

    return (
        <div className="searchscreen">
            <div className="searchdiv">
                <div className="searchfooter">
                    <div className="searchcontainer">
                        <div className="searchsub-container">
                            <div className="searchheading">Home</div>
                            <div className="searchlinks-container">
                                <div className="searchtext-button">Categories</div>
                                <div className="searchtext-button">Devices</div>
                                <div className="searchtext-button">Pricing</div>
                                <div className="searchtext-button">FAQ</div>
                            </div>
                        </div>
                        <div className="searchsub-container">
                            <div className="searchheading">Movies</div>
                            <div className="searchlinks-container">
                                <div className="searchtext-button">Gernes</div>
                                <div className="searchtext-button">Trending</div>
                                <div className="searchtext-button">New Release</div>
                                <div className="searchtext-button">Popular</div>
                            </div>
                        </div>
                        <div className="searchsub-container">
                            <div className="searchheading">Shows</div>
                            <div className="searchlinks-container">
                                <div className="searchtext-button">Gernes</div>
                                <div className="searchtext-button">Trending</div>
                                <div className="searchtext-button">New Release</div>
                                <div className="searchtext-button">Popular</div>
                            </div>
                        </div>
                        <div className="searchsub-container">
                            <div className="searchheading">Support</div>
                            <div className="searchtext-button">Contact Us</div>
                        </div>
                        <div className="searchsub-container">
                            <div className="searchheading">Subscription</div>
                            <div className="searchlinks-container">
                                <div className="searchtext-button">Plans</div>
                                <div className="searchtext-button">Features</div>
                            </div>
                        </div>
                        <div className="searchlinks-container2">
                            <div className="searchheading">Connect With Us</div>
                            <div className="searchbuttons-container">
                                <div className="searchbutton">
                                    <img className="searchicon" src={icon0}/>
                                </div>
                                <div className="searchbutton">
                                    <img className="searchicon2" src={icon1}/>
                                </div>
                                <div className="searchbutton">
                                    <img className="searchicon3" src={icon2}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="searchcontainer2">
                        <div className="searchline"></div>
                        <div className="searchcontainer3">
                            <div className="searchtext">@2023 streamvib, All Rights Reserved</div>
                            <div className="searchbuttons-container2">
                                <div className="searchtext-container">Terms of Use</div>
                                <div className="searchline2"></div>
                                <div className="searchtext-container">Privacy Policy</div>
                                <div className="searchline2"></div>
                                <div className="searchtext-container">Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchsub-container2">
                    <div className="searchbuttons-container3">
                        <div className="searchdiv2">제작연도순</div>
                        <div className="searchdiv3">정확도순</div>
                    </div>
                    {resultData.length >= 1 && (
                    <div className="searchcontainer4">
                        <div className="searchsub-container3">
                            <div className="searchcard">
                                <img className="searchimage" src={resultData[0].posterUrl}/>
                            </div>
                        </div>
                        <div className="searchframe-5">
                            <div className="searchdiv4">{resultData[0].title}</div>
                            <div className="searchdiv5">{resultData[0].producedYear}</div>
                        </div>
                    </div>
                        )}
                    {resultData.length >= 2 && (
                    <div className="searchcontainer4">
                        <div className="searchsub-container3">
                            <div className="searchcard">
                                <img className="searchimage" src={resultData[1].posterUrl}/>
                            </div>
                        </div>
                        <div className="searchframe-5">
                            <div className="searchdiv4">{resultData[1].title}</div>
                            <div className="searchdiv5">{resultData[1].producedYear}</div>
                        </div>
                    </div>
                        )}
                    {resultData.length >= 3 && (
                    <div className="searchcontainer4">
                        <div className="searchsub-container3">
                            <div className="searchcard">
                                <img className="searchimage" src={resultData[2].posterUrl}/>
                            </div>
                        </div>
                        <div className="searchframe-5">
                            <div className="searchdiv4">{resultData[2].title}</div>
                            <div className="searchdiv5">{resultData[2].producedYear}</div>
                        </div>
                    </div>
                        )}
                    {resultData.length >= 4 && (
                    <div className="searchcontainer4">
                        <div className="searchsub-container3">
                            <div className="searchcard">
                                <img className="searchimage" src={resultData[3].posterUrl}/>
                            </div>
                        </div>
                        <div className="searchframe-5">
                            <div className="searchdiv4">{resultData[3].title}</div>
                            <div className="searchdiv5">{resultData[3].producedYear}</div>
                        </div>
                    </div>
                        )}
                    {resultData.length >= 5 && (
                    <div className="searchcontainer4">
                        <div className="searchsub-container3">
                            <div className="searchcard">
                                <img className="searchimage" src={resultData[4].posterUrl}/>
                            </div>
                        </div>
                        <div className="searchframe-5">
                            <div className="searchdiv4">{resultData[4].title}</div>
                            <div className="searchdiv5">{resultData[4].producedYear}</div>
                        </div>
                    </div>
                        )}
                </div>
                <input className="searchinput"
                       type="text"
                       value={inputValue}
                       onChange={handleInputChange} // 입력값 변화 시 상태 업데이트
                />
                <img className="searchicon4"
                     alt="Icon"
                     src={icon3}
                     onClick={handleSearchClick} // 이미지 클릭 시 전역 변수 업데이트 및 페이지 이동
                     style={{cursor: 'pointer'}} // 클릭 가능하게 커서 스타일 추가
                />
                <div
                    className="searchcontainer5"
                    style={{
                        background: "url('/container8.png') center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="searchsub-container4">
                        <div className="searchtext-container2">
                            <div className="searchheading2">Avengers : Endgame</div>
                            <div className="searchparagraph">
                                With the help of remaining allies, the Avengers must assemble once
                                more in order to undo Thanos&#039;s actions and undo the chaos to
                                the universe, no matter what consequences may be in store, and no
                                matter who they face... Avenge the fallen.{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchnavbar">
                    <div className="searchlogo">
                        <div className="searchvector">
                            <img className="searchvector2" src={vector1}/>
                            <img className="searchicon5" src={icon4}/>
                        </div>
                        <img className="searchstream-vibe" src={stream}/>
                    </div>
                    <div className="searchbuttons-container3">
                        <div className="searchdiv2">로그인</div>
                        <div className="searchdiv3">회원가입</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
