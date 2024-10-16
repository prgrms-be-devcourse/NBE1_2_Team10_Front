import React, { useState } from 'react';
import './AnotherPage.css'; // CSS 파일을 import

// 영화 데이터 샘플
const movieList = [
    { id: 1, title: '청년경찰', rating: 9.3, releaseDate: '1994-09-22', image: 'http://file.koreafilm.or.kr/thm/02/00/04/44/tn_DPK012482.jpg' },
    { id: 2, title: '검사외전', rating: 9.2, releaseDate: '20160203', image: 'http://file.koreafilm.or.kr/thm/02/00/04/23/tn_DPK011412.jpg' },
    { id: 3, title: 'The Dark Knight', rating: 9.0, releaseDate: '2008-07-18', image: 'https://via.placeholder.com/150' },
    { id: 4, title: '12 Angry Men', rating: 8.9, releaseDate: '1957-04-10', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Schindler\'s List', rating: 8.9, releaseDate: '1993-12-15', image: 'https://via.placeholder.com/150' },
];

export const AnotherPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchTerm}`);
    };

    return (
        <div className="container">
            {/* 상단 로그인/회원가입 버튼 */}
            <div className="header">
                <button className="auth-button">로그인</button>
                <button className="auth-button">회원가입</button>
            </div>

            {/* 상단 검색 입력창 + 돋보기 아이콘 */}
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="검색어를 입력하세요..."
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                        alt="돋보기 아이콘"
                        className="search-icon"
                    />
                </button>
            </form>

            {/* 평점순 타이틀 및 영화 리스트 */}
            <h2 className="title">평점순</h2>
            <div className="movie-list">
                {movieList.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <img src={movie.image} alt={movie.title} className="movie-image" />
                        <div className="movie-details">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-release-date">{movie.releaseDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
}
