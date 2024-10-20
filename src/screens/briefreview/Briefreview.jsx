import "./Briefreview.css";

export const Briefreview = ({ className, ...props }) => {
  return (
    <div className={"div " + className}>
      <img className="div2" src="div0.svg" />
      <div className="div3">감상평을 등록해 주세요 </div>
      <div className="heading">닉네임 </div>
      <div className="_0-500">0/500 </div>
      <div className="line-3"></div>
      <div className="line-4"></div>
      <div className="line-6"></div>
      <div className="group-5">
        <div className="rectangle-514"></div>
        <div className="div4">등록 </div>
      </div>
      <div className="div5">한 줄 평 작성 </div>
      <div className="navbar">
        <div className="logo">
          <div className="vector">
            <img className="vector2" src="vector1.svg" />
            <img className="icon" src="icon0.svg" />
          </div>
          <img className="stream-vibe" src="stream-vibe0.svg" />
        </div>
        <div className="buttons-container">
          <div className="div6">로그인 </div>
          <div className="div7">회원가입 </div>
        </div>
      </div>
      <div className="div8">별점 : </div>
      <div className="frame-6">
        <img className="heroicons-solid-star" src="heroicons-solid-star0.svg" />
        <img
          className="heroicons-solid-star2"
          src="heroicons-solid-star1.svg"
        />
        <img
          className="heroicons-outline-star"
          src="heroicons-outline-star0.svg"
        />
        <img
          className="heroicons-outline-star2"
          src="heroicons-outline-star1.svg"
        />
        <img
          className="heroicons-outline-star3"
          src="heroicons-outline-star2.svg"
        />
      </div>
    </div>
  );
};
