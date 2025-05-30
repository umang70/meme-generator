import React, { useEffect, useState } from 'react'
import BasicExample from '../components/BasicExample';
import { getData } from '../api/memes'
import './Home.css'

const Home = () => {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data.memes);
    });
  }, []);

  // Function to refresh the page
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar">
        <span className="navbar-title" onClick={refreshPage}>
          Meme Generator
        </span>
      </nav>
      <div className={`home-container${darkMode ? ' dark' : ''}`}>
        <button
          className="dark-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <div className='row'>
          {data.map(el => <BasicExample key={el.id} img={el.url} name={el.name} />)}
        </div>
      </div>
    </>
  )
}

export default Home;