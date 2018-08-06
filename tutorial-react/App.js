import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

var App = function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(Route, { path: '/', exact: true, component: HomePage }),
        React.createElement(Route, { path: '/login', exact: true, component: LoginPage })
    );
};

export default App;