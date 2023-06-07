const api_key = 'f6edc35820bf0d9a669dd0cc64236c2e'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`
}

export default requests;