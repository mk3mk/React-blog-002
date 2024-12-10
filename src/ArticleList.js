import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setArticles(response.data);
            setLoading(false);
        };
        fetchArticles();
    }, []);

    if (loading) return <Loader />;

    return (
        <div>
            <h1>Список статей</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>
                            <h2>{article.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;