import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import React from 'react'

export default async function searchTermPage({params}) {

    const {searchTerm} = params;

    // 검색어로 API 호출을 수행 (데이터 페칭)
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDM3YTAwN2ZhMmE5MzM1NTdmNWYyMzBlMGYyZTYwZiIsIm5iZiI6MTcyNDEyMTgzNS45Mzg1OTEsInN1YiI6IjY0OTkzOGVkNmY0M2VjMDBjNWM3MmY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lKLi0NyV3qV0XNsDaZbeHw6IWrAjDam7TWu0nq9wxnc'
        }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=ko-KR&page=1&region=kr`, options)
    const json = await response.json();
    const movies = json.results;
    console.log(movies);

    return (
        <MovieList movies={movies} />
    )
}
