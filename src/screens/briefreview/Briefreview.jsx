import "./Briefreview.css";

export const Briefreview = ({className, ...props}) => {
    return (
        <div className="briefscreen">
            <div className="briefdiv">
                <img className="briefdiv2" src="div0.svg"/>
                <div className="briefdiv3">감상평을 등록해 주세요</div>
                <div className="briefheading">닉네임</div>
                <div className="brief_0-500">0/500</div>
                <div className="briefline-3"></div>
                <div className="briefline-4"></div>
                <div className="briefline-6"></div>
                <div className="briefgroup-5">
                    <div className="briefrectangle-514"></div>
                    <div className="briefdiv4">등록</div>
                </div>
                <div className="briefdiv5">한 줄 평 작성</div>
                <div className="briefnavbar">
                    <div className="brieflogo">
                        <div className="briefvector">
                            <img className="briefvector2" src="vector1.svg"/>
                            <img className="brieficon" src="icon0.svg"/>
                        </div>
                        <img className="briefstream-vibe" src="stream-vibe0.svg"/>
                    </div>
                    <div className="briefbuttons-container">
                        <div className="briefdiv6">로그인</div>
                        <div className="briefdiv7">회원가입</div>
                    </div>
                </div>
                <div className="briefdiv8">별점 :</div>
                <div className="briefframe-6">
                    <img className="briefheroicons-solid-star" src="heroicons-solid-star0.svg"/>
                    <img
                        className="briefheroicons-solid-star2"
                        src="heroicons-solid-star1.svg"
                    />
                    <img
                        className="briefheroicons-outline-star"
                        src="heroicons-outline-star0.svg"
                    />
                    <img
                        className="briefheroicons-outline-star2"
                        src="heroicons-outline-star1.svg"
                    />
                    <img
                        className="briefheroicons-outline-star3"
                        src="heroicons-outline-star2.svg"
                    />
                </div>
            </div>
        </div>
    );
};
