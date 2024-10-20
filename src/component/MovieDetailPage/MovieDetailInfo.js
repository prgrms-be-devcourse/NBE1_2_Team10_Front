import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from "../../api/movieDetailApi";
import '../../style/MovieDetailInfo.css';
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MovieDetailInfo = () => {
    const { id } = useParams(); // URL에서 id 가져오기
    const [movieDetailInfo, setMovieDetailInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetailInfo = async () => {
            console.log("Fetching movie details for ID:", id);
            try {
                const data = await getMovieDetail(id);
                console.log("Fetched data:", data);
                setMovieDetailInfo(data);
            } catch (err) {
                console.error("Error fetching movie details:", err);
                setError(err.message);
            }
        };

        fetchMovieDetailInfo();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movieDetailInfo) {
        return <div>Loading...</div>;
    }

    // 응답에서 필요한 데이터를 가져옵니다.
    const { title, posterUrl, plot, releaseDate, genre, runningTime, actors, director, sumOfRating, dibCount } = movieDetailInfo;

    // 개봉일 포맷팅 함수
    const formatReleaseDate = (date) => {
        return date.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
    };

    // 별점 표시 생성 함수
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating); // 정수 부분
        const halfStar = rating % 1 >= 0.5; // 반별 여부

        // 전체 별 생성
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star filled">★</span>);
        }

        // 반별이 있으면 추가
        if (halfStar) {
            stars.push(<span key={fullStars} className="star half">★</span>);
        }

        // 나머지 별은 빈 별로 생성
        for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
            stars.push(<span key={i} className="star empty">★</span>);
        }

        return stars;
    };

    return (
        <div className="movie-detail">
            <h1>{title}</h1>
            <img src={posterUrl} alt={title} />
            <div className="dib-count">
                <FontAwesomeIcon icon={faThumbsUp} />
                <div>{dibCount}</div> {/* dibCount를 새로운 div로 감쌈 */}
            </div>
            <div className="description-container">
                <div className="left-column">
                    <div className="item-box">
                        <p><strong>Description</strong></p>
                        <p>{plot}</p>
                    </div>
                    <div className="item-box">
                        <p><strong>Cast</strong></p>
                        <p>{actors}</p>
                    </div>
                    <div className="item-box">
                        <p><strong>Director</strong></p>
                        <p>{director}</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="item-box">
                        <p><strong>Released Date</strong></p>
                        <p>{formatReleaseDate(releaseDate)}</p>
                    </div>
                    <div className="item-box">
                        <p><strong>Ratings</strong></p>
                        <p>{renderStars(sumOfRating)} {sumOfRating}</p>
                    </div>
                    <div className="item-box">
                        <p><strong>Genres</strong></p>
                        <p>{genre}</p>
                    </div>
                    <div className="item-box">
                        <p><strong>Running Time</strong></p>
                        <p>{runningTime} 분</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailInfo;

