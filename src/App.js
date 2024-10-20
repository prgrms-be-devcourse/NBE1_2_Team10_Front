import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {MainPage} from "./screens/mainpage/MainPage";
// import {DetailPage} from "./screens/detailpage/mainscreen/DetailPage"
import {Search} from "./screens/integratedsearch/Search"
import {Signup} from "./screens/signup/Signup";
import {Signin} from "./screens/signin/Signin"
import {Briefreview} from "./screens/briefreview/Briefreview"
import {MyPage} from "./screens/myPage/MyPage"
import {ReviewDetail} from "./screens/reviewdetail/ReviewDetail"
import {ReviewWrite} from "./screens/reviewwrite/ReviewWrite"


const App = () => {
  return(
      <Routes>
        {/*기본 페이지*/}
        <Route path="/" element={<MainPage />} />

        {/*클릭 시 이동할 페이지*/}
          <Route path="/briefreview" element={<Briefreview />} />
        {/*<Route path="/detail-page" element={<DetailPage />} />*/}
        <Route path="/movie-search" element={<Search />} />
          <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/reviewdetail" element={<ReviewDetail />} />
          <Route path="/reviewwrite" element={<ReviewWrite />} />
      </Routes>
  );
};

export default App;