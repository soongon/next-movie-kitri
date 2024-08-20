import React from 'react'

export default function MovieCategoryPage({params}) {

    const {movieCat} = params;

    return (
        <div>{movieCat}</div>
    )
}
