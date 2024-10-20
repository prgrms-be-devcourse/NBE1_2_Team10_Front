import "./MyPage.css";

export const MyPage = ({ className, ...props }) => {
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
      <div className="container4">
        <div className="form">
          <div className="container5">
            <div className="text2">회원 정보 수정 </div>
          </div>
          <div className="items-container">
            <div className="container6">
              <div className="heading2">별명 </div>
              <div className="input-field">
                <div className="text3">alias </div>
              </div>
            </div>
            <div className="container6">
              <div className="heading2">이름 </div>
              <div className="input-feild">
                <div className="text3">이름 </div>
              </div>
            </div>
          </div>
          <div className="items-container">
            <div className="container6">
              <div className="heading2">이메일 </div>
              <div className="input-field2">
                <div className="text3">이메일 </div>
              </div>
            </div>
            <div className="container6">
              <div className="heading2">전화번호 </div>
              <div className="input-feild2">
                <div className="container7">
                  <div className="text3">전화번호 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <div className="vector">
            <img className="vector2" src="vector1.svg" />
            <img className="icon4" src="icon3.svg" />
          </div>
          <img className="stream-vibe" src="stream-vibe0.svg" />
        </div>
      </div>
      <div className="container8">
        <div className="sub-container2">
          <div className="card">
            <img className="image" src="image0.png" />
            <div className="div2">영화 제목 </div>
          </div>
        </div>
      </div>
      <div className="container9">
        <div className="sub-container2">
          <div className="card">
            <img className="image" src="image1.png" />
            <div className="div2">영화 제목 </div>
          </div>
        </div>
      </div>
      <div className="container10">
        <div className="sub-container2">
          <div className="card">
            <img className="image" src="image2.png" />
            <div className="div2">영화 제목 </div>
          </div>
        </div>
      </div>
      <div className="container11">
        <div className="sub-container2">
          <div className="card">
            <img className="image" src="image3.png" />
            <div className="div2">영화 제목 </div>
          </div>
        </div>
      </div>
      <div className="frame-9">
        <div className="group-15">
          <div className="rectangle-518"></div>
          <div className="div3">&lt; </div>
        </div>
        <div className="group-15">
          <div className="rectangle-5182"></div>
          <div className="_1">1 </div>
        </div>
        <div className="group-14">
          <div className="rectangle-5183"></div>
          <div className="_2">2 </div>
        </div>
        <div className="group-17">
          <div className="rectangle-5184"></div>
          <div className="_3">3 </div>
        </div>
        <div className="group-23">
          <div className="rectangle-5185"></div>
          <div className="_4">4 </div>
        </div>
        <div className="group-22">
          <div className="rectangle-5186"></div>
          <div className="_5">5 </div>
        </div>
        <div className="group-21">
          <div className="rectangle-5187"></div>
          <div className="_6">6 </div>
        </div>
        <div className="group-20">
          <div className="rectangle-5188"></div>
          <div className="_7">7 </div>
        </div>
        <div className="group-24">
          <div className="rectangle-5189"></div>
          <div className="_8">8 </div>
        </div>
        <div className="group-19">
          <div className="rectangle-51810"></div>
          <div className="_9">9 </div>
        </div>
        <div className="group-18">
          <div className="rectangle-51811"></div>
          <div className="_10">10 </div>
        </div>
        <div className="group-25">
          <div className="rectangle-51812"></div>
          <div className="div4">&gt; </div>
        </div>
      </div>
    </div>
  );
};
