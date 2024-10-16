import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {MainPage} from "./screens/MainPage/MainPage";
import {AnotherPage} from "./AnotherPage";

const App = () => {
  return(
      <Routes>
        {/*기본 페이지*/}
        <Route path="/" element={<MainPage />} />

        {/*클릭 시 이동할 페이지*/}
        <Route path="/another-page" element={<AnotherPage />} />

      </Routes>
  );
};

export default App;