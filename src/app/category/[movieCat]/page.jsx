import { fetchMoviesWithCategory } from '@/actions/fetchMovies';
import MovieList from '@/components/MovieList';
import React from 'react'

export default async function MovieCategoryPage({params}) {

    const {movieCat} = params;

    const movies = await fetchMoviesWithCategory(movieCat);

    return (
        <MovieList movies={movies}/>
    )
}
