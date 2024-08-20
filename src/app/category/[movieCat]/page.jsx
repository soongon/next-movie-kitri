import MovieCard from '@/components/MovieCard';
import React from 'react'

export default async function MovieCategoryPage({params}) {

    const {movieCat} = params;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDM3YTAwN2ZhMmE5MzM1NTdmNWYyMzBlMGYyZTYwZiIsIm5iZiI6MTcyNDEyMTgzNS45Mzg1OTEsInN1YiI6IjY0OTkzOGVkNmY0M2VjMDBjNWM3MmY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lKLi0NyV3qV0XNsDaZbeHw6IWrAjDam7TWu0nq9wxnc'
        }
    };
      
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieCat}?language=ko-KR&page=1&region=kr`, options)
        const json = await response.json();
        const movies = json.results;

        return (
            <div className='flex flex-wrap justify-center'>
                {
                    movies.map(movie => {
                        return <MovieCard movie={movie} />
                    })
                }
            </div>
        )
    } catch (e) {
        throw Error(e);
    }
}
