const API_KEY = "f3a62866b155ee303d09a3a4f0e4a133"; 

const requests= {
   fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetNetflixOrignials:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_gneres=99`,

}
export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=f3a62866b155ee303d09a3a4f0e4a133     


//https://api.themoviedb.org/3/discover/movie?api_key=f3a62866b155ee303d09a3a4f0e4a133&with_gneres=99



// const requests = {
//    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//    fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
//  }