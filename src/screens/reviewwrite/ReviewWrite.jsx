import "./ReviewWrite.css";
import React, {useState, useEffect, useRef} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";

//<editor-fold desc="imports">
import {
    ClassicEditor,
    AccessibilityHelp,
    Alignment,
    Autoformat,
    AutoImage,
    Autosave,
    BalloonToolbar,
    BlockQuote,
    BlockToolbar,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Heading,
    Highlight,
    HorizontalLine,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    Markdown,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SelectAll,
    SimpleUploadAdapter,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline,
    Undo
} from 'ckeditor5';
//</editor-fold>

import translations from 'ckeditor5/translations/ko.js';
import 'ckeditor5/ckeditor5.css';
import './ReviewWrite.css'


import {useLocation} from 'react-router-dom';
import axios from "axios";
import {useNavigate} from "react-router-dom";


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
        console.log(accessToken)

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

    //<editor-fold desc="CKEditor 설정">
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const editorConfig = {
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'findAndReplace',
                '|',
                'heading',
                '|',
                'fontSize',
                'fontFamily',
                'fontColor',
                'fontBackgroundColor',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'subscript',
                'superscript',
                'code',
                'removeFormat',
                '|',
                'specialCharacters',
                'horizontalLine',
                'link',
                'insertImage',
                'insertImageViaUrl',
                'mediaEmbed',
                'insertTable',
                'highlight',
                'blockQuote',
                'codeBlock',
                '|',
                'alignment',
                '|',
                'bulletedList',
                'numberedList',
                'todoList',
                'outdent',
                'indent'
            ],
            shouldNotGroupWhenFull: false
        },
        plugins: [
            AccessibilityHelp,
            Alignment,
            Autoformat,
            AutoImage,
            Autosave,
            BalloonToolbar,
            BlockQuote,
            BlockToolbar,
            Bold,
            Code,
            CodeBlock,
            Essentials,
            FindAndReplace,
            FontBackgroundColor,
            FontColor,
            FontFamily,
            FontSize,
            Heading,
            Highlight,
            HorizontalLine,
            ImageBlock,
            ImageCaption,
            ImageInline,
            ImageInsert,
            ImageInsertViaUrl,
            ImageResize,
            ImageStyle,
            ImageTextAlternative,
            ImageToolbar,
            ImageUpload,
            Indent,
            IndentBlock,
            Italic,
            Link,
            LinkImage,
            List,
            ListProperties,
            Markdown,
            MediaEmbed,
            Paragraph,
            PasteFromOffice,
            RemoveFormat,
            SelectAll,
            SimpleUploadAdapter,
            SpecialCharacters,
            SpecialCharactersArrows,
            SpecialCharactersCurrency,
            SpecialCharactersEssentials,
            SpecialCharactersLatin,
            SpecialCharactersMathematical,
            SpecialCharactersText,
            Strikethrough,
            Subscript,
            Superscript,
            Table,
            TableCaption,
            TableCellProperties,
            TableColumnResize,
            TableProperties,
            TableToolbar,
            TextTransformation,
            TodoList,
            Underline,
            Undo
        ],
        balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
        blockToolbar: [
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            '|',
            'link',
            'insertImage',
            'insertTable',
            '|',
            'bulletedList',
            'numberedList',
            'outdent',
            'indent'
        ],
        fontFamily: {
            supportAllValues: true
        },
        fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 22],
            supportAllValues: true
        },
        heading: {
            options: [
                {
                    model: 'paragraph',
                    title: 'Paragraph',
                    class: 'ck-heading_paragraph'
                },
                {
                    model: 'heading1',
                    view: 'h1',
                    title: 'Heading 1',
                    class: 'ck-heading_heading1'
                },
                {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2'
                },
                {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3'
                },
                {
                    model: 'heading4',
                    view: 'h4',
                    title: 'Heading 4',
                    class: 'ck-heading_heading4'
                },
                {
                    model: 'heading5',
                    view: 'h5',
                    title: 'Heading 5',
                    class: 'ck-heading_heading5'
                },
                {
                    model: 'heading6',
                    view: 'h6',
                    title: 'Heading 6',
                    class: 'ck-heading_heading6'
                }
            ]
        },
        image: {
            toolbar: [
                'toggleImageCaption',
                'imageTextAlternative',
                '|',
                'imageStyle:inline',
                'imageStyle:wrapText',
                'imageStyle:breakText',
                '|',
                'resizeImage'
            ]
        },
        language: 'ko',
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file'
                    }
                }
            }
        },
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true
            }
        },
        menuBar: {
            isVisible: true
        },
        placeholder: 'Type or paste your content here!',
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
        },
        translations: [translations]
    };

    editorConfig.simpleUpload = {
        uploadUrl: "http://localhost:8080/ckeditor/image-upload",
        withCredentials: false,
        // headers: {
        //     'Authorization': 'Bearer ' + token
        // }
    }
    //</editor-fold>


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
                        config={
                            editorConfig
                        }
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
