import React from 'react'
import './Nav.css'
import {BiBell} from 'react-icons/bi'
import {BiSearch} from 'react-icons/bi'


const nav = () => {
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='News-text'>
            <h1><i>News</i></h1>

          </div>
          <div className='navbar'>
            <div className='nav-elements'>
            
              <a href="#">Home</a>
              <h1>|</h1>
              <a href="#about">About</a>
              <h1>|</h1>
              <a href="#contact">Contact</a>
              <h1>|</h1>
              <a href="#liveNews">Live News</a>

            </div>

          </div>
            <div className='nav-right'>
              <div className='weather'>
                <a href="">Delhi 25*</a>
              </div>

              <div>
                <BiBell className='bell'/>
              </div>
            </div>

        </div>

        <div className='nav-2'>
          <div className='nav-news-left'>
              <a href="">Search</a>
              <BiSearch />
          </div>

        <div className='nav-news'>
            <a href="#science">Science</a>
            <h1>|</h1>
            <a href="#sports">Sports</a>
            <h1>|</h1>
            <a href="#news">News</a>
            <h1>|</h1>
            <a href="#automobile">Automobile</a>
            <h1>|</h1>
            <a href="#movies">Trending Movies</a>
            <h1>|</h1>
            <a href="#hollywood">Hollywood</a>
        </div>

          <div className='nav-news-left'>
            <a href="">CU</a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default nav