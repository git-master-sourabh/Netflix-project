import React,{useState,useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}){
   const [movies,setMovies]=useState([]); // initializing with empty array
   const [trailerUrl, setTrailerUrl]= useState("");
   // a snippet of code which runs based on a specific condition/variable
   useEffect(()=>{
       async function fetchData(){
             const request= await axios.get(fetchUrl);
             setMovies(request.data.results);
             return request;
       }
       fetchData();
      //if [], run once when the row loads, and don't run again. 
      //if [fetchUrl], run once when the row loads and then it(useEffect) runs every time the fetchUrl  changes.
   },[fetchUrl]);

   const opts={
      height: "390",
      width: "100%",
      playerVars: {
         
         autoplay:1,
      },
   };
   const handleClick = (movie)=>{
      if(trailerUrl){
         setTrailerUrl('');          // if video is already open on clicking it again close it.
      }
      else{
         movieTrailer(movie?.name || "")
         .then((url) =>{
            // https://www.youtube.com/watch?v=XtMThylkj
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
         }).catch((error) =>console.log(error));
      }
   };
  
   return(
      
      <div className="row">
         <h2>{title}</h2>
         <div className="row_posters">
            {movies.map((movie) => (
          
            <img 
            key={movie.id}         //optimization
            onClick={()=> handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ?movie.poster_path: movie.backdrop_path}`} 
            alt={movie.name}      
            />
            ))}
         </div>
        { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>         
   )
}

export default Row;