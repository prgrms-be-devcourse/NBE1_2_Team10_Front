import "./Signin.css";

export const Signin = () => {
    return (
        <div className="loginscreen">
            <div className="logindiv">
                <div className="loginfooter">
                    <div className="logincontainer">
                        <div className="loginsub-container">
                            <div className="loginheading">Home</div>
                            <div className="loginlinks-container">
                                <div className="logintext-button">Categories</div>
                                <div className="logintext-button">Devices</div>
                                <div className="logintext-button">Pricing</div>
                                <div className="logintext-button">FAQ</div>
                            </div>
                        </div>
                        <div className="loginsub-container">
                            <div className="loginheading">Movies</div>
                            <div className="loginlinks-container">
                                <div className="logintext-button">Gernes</div>
                                <div className="logintext-button">Trending</div>
                                <div className="logintext-button">New Release</div>
                                <div className="logintext-button">Popular</div>
                            </div>
                        </div>
                        <div className="loginsub-container">
                            <div className="loginheading">Shows</div>
                            <div className="loginlinks-container">
                                <div className="logintext-button">Gernes</div>
                                <div className="logintext-button">Trending</div>
                                <div className="logintext-button">New Release</div>
                                <div className="logintext-button">Popular</div>
                            </div>
                        </div>
                        <div className="loginsub-container">
                            <div className="loginheading">Support</div>
                            <div className="logintext-button">Contact Us</div>
                        </div>
                        <div className="loginsub-container">
                            <div className="loginheading">Subscription</div>
                            <div className="loginlinks-container">
                                <div className="logintext-button">Plans</div>
                                <div className="logintext-button">Features</div>
                            </div>
                        </div>
                        <div className="loginlinks-container2">
                            <div className="loginheading">Connect With Us</div>
                            <div className="loginbuttons-container">
                                <div className="loginbutton">
                                    <img className="loginicon" src="icon0.svg"/>
                                </div>
                                <div className="loginbutton">
                                    <img className="loginicon2" src="icon1.svg"/>
                                </div>
                                <div className="loginbutton">
                                    <img className="loginicon3" src="icon2.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logincontainer2">
                        <div className="loginline"></div>
                        <div className="logincontainer3">
                            <div className="logintext">@2023 streamvib, All Rights Reserved</div>
                            <div className="loginbuttons-container2">
                                <div className="logintext-container">Terms of Use</div>
                                <div className="loginline2"></div>
                                <div className="logintext-container">Privacy Policy</div>
                                <div className="loginline2"></div>
                                <div className="logintext-container">Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logincontainer4">
                    <div className="loginform">
                        <div className="loginitems-container">
                            <div className="logincontainer5">
                                <div className="loginheading2">이메일</div>
                                <div className="logininput-field">
                                    <div className="logintext2">Enter your Email</div>
                                </div>
                            </div>
                        </div>
                        <div className="loginitems-container">
                            <div className="logincontainer5">
                                <div className="loginheading2">비밀번호</div>
                                <div className="logininput-field2">
                                    <div className="logintext2">Enter your Password</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logincontainer6">
                    <div className="logintext3">로그인</div>
                </div>
                <div className="loginnavbar">
                    <div className="loginlogo">
                        <div className="loginvector">
                            <img className="loginvector2" src="vector1.svg"/>
                            <img className="loginicon4" src="icon3.svg"/>
                        </div>
                        <img className="loginstream-vibe" src="stream-vibe0.svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
