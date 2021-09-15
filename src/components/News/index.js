import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const News = () =>{
    const [news, setNews] = useState([])

    useEffect(() => {
        axios("https://611675ae1c592d0017bb7f0d.mockapi.io/news")
            .then(({data}) => setNews(data))
    },[])

    return(
       <div>
        <div className="container">
            <div className="row">
                {
                    news.map(e =>
                        <div className="col-6">
                          <Link to={`/news/${e.id}`}>
                              <h2 className="title">{e.title}</h2>
                              <p className="desc">{e.author}</p>
                              <p className="caption">{e.date}</p>
                              <img className="images" src={e.image} alt=""/>
                              <p className="title">{e.description}</p>
                          </Link>
                        </div>
                    )
                }
            </div>
        </div>
       </div>
    )
}

export default News