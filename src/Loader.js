import React from 'react';
import './App.css'; // Импортируем стили для прелоадера

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader"></div>
            <h2>Загрузка...</h2>
        </div>
    );
};

export default Loader;