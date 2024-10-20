import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetailInfo from './component/MovieDetailPage/MovieDetailInfo'; // 경로에 맞게 수정

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/movies/:id" element={<MovieDetailInfo />} />
                {/* 다른 라우트 설정 */}
            </Routes>
        </Router>
    );
}

export default App;

