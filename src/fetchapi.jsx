import { useEffect, useState } from "react";

function GetMovieList({year}) {

    const api = "https://jsonmock.hackerrank.com/api/movies?Year="

    const año = year

    const url = `${api}${año}`

    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then(data => { 
            if (data.data.length !== 0 ) {
                setPeliculas(data)
        } else {
            console.log("No hay data");
        }})
    }, [url])

    console.log(peliculas)


    return peliculas.length === 0 ? <h1>Loading...</h1> : (
        <>
            {peliculas.data.map( (pelicula) =>{
                return(
                    <h1>{pelicula.Title} </h1>
                )
            })}
        </>
    );
}


export default GetMovieList;