import React, {useEffect} from 'react'
import {useState} from "react";
import {useParams} from "react-router-dom"
import Spinner from "../../components/Spinner";
import axios from "axios";
import NotFound from "../NotFound";

const NewsDetails = () =>{
    const [newsDetails, setNewsDetails] = useState({})
    const {id} = useParams ()
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        axios(`https://611675ae1c592d0017bb7f0d.mockapi.io/news/${id}`)
            .then(({data}) =>setNewsDetails(data))
            .catch(() => setNotFound(true))
            .finally(() => setIsLoading(false))
    },[id])
    if (isLoading) {
        return <Spinner/>
    }
    if (notFound){
        return <NotFound />
    }

    return(
        <div>
            <h2>{newsDetails.title}</h2>
            <img src={newsDetails.image} alt=""/>
            <p>{newsDetails.data}</p>
            <p>{newsDetails.author}</p>
            <p>{newsDetails.description}</p>

        </div>
    )
}

export default NewsDetails