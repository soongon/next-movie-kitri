import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import React from 'react'

export default async function MovieCategoryPage({params}) {

    const {movieCat} = params;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };
      
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieCat}?language=ko-KR&page=1&region=kr`, options)
        const json = await response.json();
        const movies = json.results;

        return (
            <MovieList movies={movies}/>
        )
    } catch (e) {
        throw Error(e);
    }
}
