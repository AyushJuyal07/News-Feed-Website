import React, { useEffect, useState } from 'react'
import './News.css'

const News = () => {

    const [mynews, setMyNews] = useState([]);

    const fetchData = async () => {
        let resonse = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=22ac9b3adaf048ab882e6d9a7cea2a1f");
        let data = await resonse.json();
        setMyNews(data.articles)
    }

    console.log(mynews)

    useEffect(() => {
        fetchData();
    },[])

  return (
    <div className='top'>
        {
            mynews.map((ele) => {
                return (
                    <>
                    <div className='container-2'>
                        <div className="image">
                            <img src={ele.urlToImage == null ? "https://microbiozindia.com/wp-content/uploads/2023/11/research-icon.jpg" : ele.urlToImage} alt="" />

                        </div>
                        <div className="content">
                            <h1>{ele.author}</h1>
                            <p>{ele.title}</p>
                        </div>
                        <div className='readMore'>
                            <a href={ele.url} target='_black'>Read More</a>

                        </div>

                    </div>

                    </>
                )
            })
        }

    

    </div>
    

    
  )
}

export default News
