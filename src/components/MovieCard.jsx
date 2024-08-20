import Image from 'next/image'
import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div className="m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <Image 
                className="rounded-t-lg" 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={500}
                height={200} 
                alt={movie.title} />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie.title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {movie.overview}
            </p>
        </div>
    </div>
  )
}
