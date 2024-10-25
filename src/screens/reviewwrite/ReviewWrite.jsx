import "./ReviewWrite.css";
import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const ReviewWrite = ({className, ...props}) => {

    // 전달 받은 데이터 저장
    const location = useLocation();
    const { movie } = location.state || {}; // 전달된 데이터를 추출

    const navigate = useNavigate();

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

    const [editorData, setEditorData] = useState("");

    // 컴포넌트가 마운트될 때 LocalStorage에서 데이터를 불러옴
    useEffect(() => {
        const savedData = localStorage.getItem("editorData");
        if (savedData) {
            setEditorData(savedData);
        }
    }, []);

    // 데이터를 저장하는 함수
    const handleSave = () => {
        localStorage.setItem("editorData", editorData);  // 데이터를 LocalStorage에 저장
        alert("내용이 저장되었습니다!");
        console.log("내용이 저장되었습니다!");
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
                            setEditorData(data);  // 상태에 에디터 데이터를 저장
                        }}
                    />
                    {/* 저장 버튼 */}
                </div>
                <div className="reviewbox">
                    <div className="reviewwritediv3">리뷰 제목 : </div>
                    <input className="reviewwrite"/>
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
                <div className="reviewwritediv7"onClick={handleSave}>등록</div>
                <div className="reviewwriteline-4"></div>
            </div>
        </div>
    );
};
