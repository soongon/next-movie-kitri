"use server"

export async function fetchMoviesWithCategory(category) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };
      
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1&region=kr`, options)
        const json = await response.json();
        return json.results;

    } catch (e) {
        throw e;
    }
}

export async function fetchMoviesWithSearchTerm(searchTerm) {
    // 검색어로 API 호출을 수행 (데이터 페칭)
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };
    
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=ko-KR&page=1&region=kr`, options)
        const json = await response.json();
        return json.results;
    } catch (e) {
        throw e;
    }
}