import "./ReviewWrite.css";

export const ReviewWrite = ({ className, ...props }) => {
  return (
    <div className={"div " + className}>
      <div className="footer">
        <div className="container">
          <div className="sub-container">
            <div className="heading">Home </div>
            <div className="links-container">
              <div className="text-button">Categories </div>
              <div className="text-button">Devices </div>
              <div className="text-button">Pricing </div>
              <div className="text-button">FAQ </div>
            </div>
          </div>
          <div className="sub-container">
            <div className="heading">Movies </div>
            <div className="links-container">
              <div className="text-button">Gernes </div>
              <div className="text-button">Trending </div>
              <div className="text-button">New Release </div>
              <div className="text-button">Popular </div>
            </div>
          </div>
          <div className="sub-container">
            <div className="heading">Shows </div>
            <div className="links-container">
              <div className="text-button">Gernes </div>
              <div className="text-button">Trending </div>
              <div className="text-button">New Release </div>
              <div className="text-button">Popular </div>
            </div>
          </div>
          <div className="sub-container">
            <div className="heading">Support </div>
            <div className="text-button">Contact Us </div>
          </div>
          <div className="sub-container">
            <div className="heading">Subscription </div>
            <div className="links-container">
              <div className="text-button">Plans </div>
              <div className="text-button">Features </div>
            </div>
          </div>
          <div className="links-container2">
            <div className="heading">Connect With Us </div>
            <div className="buttons-container">
              <div className="button">
                <img className="icon" src="icon0.svg" />
              </div>
              <div className="button">
                <img className="icon2" src="icon1.svg" />
              </div>
              <div className="button">
                <img className="icon3" src="icon2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="line"></div>
          <div className="container3">
            <div className="text">@2023 streamvib, All Rights Reserved </div>
            <div className="buttons-container2">
              <div className="text-container">Terms of Use </div>
              <div className="line2"></div>
              <div className="text-container">Privacy Policy </div>
              <div className="line2"></div>
              <div className="text-container">Cookie Policy </div>
            </div>
          </div>
        </div>
      </div>
      <img className="rectangle-513" src="rectangle-5130.svg" />
      <div className="line-3"></div>
      <div className="div2">리뷰 내용 </div>
      <div className="div3">리뷰 제목 </div>
      <div className="div4">리뷰 작성 </div>
      <div className="navbar">
        <div className="logo">
          <div className="vector">
            <img className="vector2" src="vector1.svg" />
            <img className="icon4" src="icon3.svg" />
          </div>
          <img className="stream-vibe" src="stream-vibe0.svg" />
        </div>
        <div className="buttons-container3">
          <div className="div5">로그인 </div>
          <div className="div6">회원가입 </div>
        </div>
      </div>
      <div className="rectangle-514"></div>
      <div className="div7">등록 </div>
      <div className="line-4"></div>
    </div>
  );
};
