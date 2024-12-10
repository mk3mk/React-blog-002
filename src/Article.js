import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setArticle(response.data);
            setLoading(false);
        };
        fetchArticle();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    );
};

export default Article;