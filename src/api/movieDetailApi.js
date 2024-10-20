import axios from 'axios';

export const getMovieDetail = async (movieId) => {
    try {
        const response = await axios.get(`/movies/${movieId}`);

        if (response.data.isSuccess) {
            console.log("서버에서 받은 데이터 :", response.data.result);
            return response.data.result;  // 서버에서 반환하는 영화 상세 정보
        }

    } catch (error) {
        if (error.response) {
            return { error: error.response.data.message };
        }
        throw error;
    }
}