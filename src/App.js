import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './ArticleList';
import Article from './Article';
import UserList from './UserList';
import User from './User';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<ArticleList/>} />
                <Route path="/article/:id" element={<Article/>} />
                <Route path="/users" exact element={<UserList/>} />
                <Route path="/user/:id" element={<User/>} />
            </Routes>
        </Router>
    );
};

export default App;