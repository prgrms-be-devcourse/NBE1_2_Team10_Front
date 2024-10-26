import "./ReviewWrite.css";
import React, {useState, useEffect} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useLocation} from 'react-router-dom';
import axios from "axios";
import {useNavigate} from "react-router-dom"; // 이전 페이지로 돌아가기 위한 훅

export const ReviewWrite = ({className, ...props}) => {

    // 전달 받은 데이터 저장
    const location = useLocation();
    const {movie} = location.state || {}; // 전달된 데이터를 추출
    const [inputData, setInputData] = useState(""); // reviewwrite의 값
    const [editorData, setEditorData] = useState(""); // CKEditor의 값
    const navigate = useNavigate(); // 페이지 이동을 위한 navigate

    // 입력 필드의 변화 감지
    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    // 메인 화면으로 이동
    const handleLogoClick = () => {
        navigate("/");
    };

    const handleClick = () => {
        navigate('/mypage'); // '/mypage'로 이동
    };

    const handleLogout = () => {
        // accessToken을 localStorage에서 삭제 (또는 다른 저장소에서 삭제)
        localStorage.removeItem('accessToken');

        // 필요한 경우, 상태를 업데이트하거나 추가 작업 수행
        // 예를 들어, 사용자 정보를 초기화할 수 있습니다.

        // 로그아웃 후 이동할 페이지로 네비게이트 (예: 로그인 페이지)
        navigate('/');
    };

    // 컴포넌트가 마운트될 때 LocalStorage에서 데이터를 불러옴
    useEffect(() => {
        const savedData = localStorage.getItem("editorData");
        if (savedData) {
            setEditorData(savedData);
        }
    }, []);

    // 데이터 전송 및 페이지 이동
    const handleSave = async () => {

        // 로컬 스토리지에서 accessToken 불러오기
        const accessToken = localStorage.getItem("accessToken");

        // CKEditor 데이터에서 HTML 태그 제거
        const plainText = editorData.replace(/<[^>]+>/g, "");

        try {
            // 데이터를 백엔드에 POST 요청으로 전송
            await axios.post(
                `/movies/${movie}/reviews`,
                {
                    title: inputData,
                    content: plainText,
                },
                {
                    headers: {
                        'accessToken': accessToken,
                    },
                }
            );

            // 성공적으로 전송되면 이전 페이지로 이동
            navigate(-1);
        } catch (error) {
            console.error("데이터 전송 중 오류 발생:", error);
        }
    };


    return (
        <div className="reviewwritescreen">
            <div className="reviewwritediv">
                <div className="reviewwritefooter">
                    <div className="reviewwritecontainer">
                        <div className="reviewwritesub-container">
                            <div className="reviewwriteheading">Home</div>
                            <div className="reviewwritelinks-container">
                                <div className="reviewwritetext-button">Categories</div>
                                <div className="reviewwritetext-button">Devices</div>
                                <div className="reviewwritetext-button">Pricing</div>
                                <div className="reviewwritetext-button">FAQ</div>
                            </div>
                        </div>
                        <div className="reviewwritesub-container">
                            <div className="reviewwriteheading">Movies</div>
                            <div className="reviewwritelinks-container">
                                <div className="reviewwritetext-button">Gernes</div>
                                <div className="reviewwritetext-button">Trending</div>
                                <div className="reviewwritetext-button">New Release</div>
                                <div className="reviewwritetext-button">Popular</div>
                            </div>
                        </div>
                        <div className="reviewwritesub-container">
                            <div className="reviewwriteheading">Shows</div>
                            <div className="reviewwritelinks-container">
                                <div className="reviewwritetext-button">Gernes</div>
                                <div className="reviewwritetext-button">Trending</div>
                                <div className="reviewwritetext-button">New Release</div>
                                <div className="reviewwritetext-button">Popular</div>
                            </div>
                        </div>
                        <div className="reviewwritesub-container">
                            <div className="reviewwriteheading">Support</div>
                            <div className="reviewwritetext-button">Contact Us</div>
                        </div>
                        <div className="reviewwritesub-container">
                            <div className="reviewwriteheading">Subscription</div>
                            <div className="reviewwritelinks-container">
                                <div className="reviewwritetext-button">Plans</div>
                                <div className="reviewwritetext-button">Features</div>
                            </div>
                        </div>
                        <div className="reviewwritelinks-container2">
                            <div className="reviewwriteheading">Connect With Us</div>
                            <div className="reviewwritebuttons-container">
                                <div className="reviewwritebutton">
                                    <img className="reviewwriteicon" src="icon0.svg"/>
                                </div>
                                <div className="reviewwritebutton">
                                    <img className="reviewwriteicon2" src="icon1.svg"/>
                                </div>
                                <div className="reviewwritebutton">
                                    <img className="reviewwriteicon3" src="icon2.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviewwritecontainer2">
                        <div className="reviewwriteline"></div>
                        <div className="reviewwritecontainer3">
                            <div className="reviewwritetext">@2023 streamvib, All Rights Reserved</div>
                            <div className="reviewwritebuttons-container2">
                                <div className="reviewwritetext-container">Terms of Use</div>
                                <div className="reviewwriteline2"></div>
                                <div className="reviewwritetext-container">Privacy Policy</div>
                                <div className="reviewwriteline2"></div>
                                <div className="reviewwritetext-container">Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviewwriterectangle-513"/>
                <div className="reviewwriteline-3"/>
                <div className="reviewwritediv2">리뷰 내용</div>
                <div className="reviewedit">
                    <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setEditorData(data);
                        }}
                    />
                    {/* 저장 버튼 */}
                </div>
                <div className="reviewbox">
                    <div className="reviewwritediv3">리뷰 제목 :</div>
                    <input
                        className="reviewwrite"
                        value={inputData}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="reviewwritediv4">리뷰 작성</div>
                <div className="reviewwritenavbar">
                    <div className="reviewwritelogo" onClick={handleLogoClick}>
                        <div className="reviewwritevector">
                            <img className="reviewwritevector2" src="vector1.svg"/>
                            <img className="reviewwriteicon4" src="icon3.svg"/>
                        </div>
                        <img className="reviewwritestream-vibe" src="stream-vibe0.svg"/>
                    </div>
                    <div className="reviewwritebuttons-container3">
                        <div className="reviewwritediv5" onClick={handleClick}>마이페이지</div>
                        <div className="reviewwritediv6" onClick={handleLogout}>로그아웃</div>
                    </div>
                </div>
                <div className="reviewwriterectangle-514"></div>
                <div className="reviewwritediv7" onClick={handleSave}>
                    등록
                </div>
                <div className="reviewwriteline-4"></div>
            </div>
        </div>
    );
};
