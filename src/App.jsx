import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/Moviecard/MovieCard';
function App() {

  const apiKey = '3356dc43722bcefeffa8cca7d7ac1c16'
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('')
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`

  useEffect(()=>{
    movieData()
  },[])
  const movieData = async ()=>{
    const response = await fetch(API_URL)
    const data = await response.json()
    setMovies(data.results)
  }
  // handlers
  const handleSearch = async(e)=>{
    if(query !== ''){
        e.preventDefault()
      const res = await fetch(API_SEARCH)
      const data2 = await res.json()
      setMovies(data2.results)
      setQuery('')
    }else{
      e.preventDefault()
      movieData()
    }
  }
  const handleQuery = (e)=>{
    setQuery(e.target.value)
  }

  return (
    <div className='App' >
      <div className='search_nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>
        {/* search area */}
        <div className='search_box'>
        <form onSubmit={handleSearch}>
          <input type="text" onChange={handleQuery} value={query} />
          <button>search</button>
        </form>
        </div>
        {/* end of search area */}
      </div>
      {/* //////////////////////////////////////// */}
      <div className='movies'>
        {movies.map((movie)=>(
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
