import { fetchMoviesWithSearchTerm } from '@/actions/fetchMovies';
import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import React from 'react'

export default async function searchTermPage({params}) {

    const {searchTerm} = params;

    const movies = await fetchMoviesWithSearchTerm(searchTerm);

    return (
        <MovieList movies={movies} />
    )
}
