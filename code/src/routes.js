import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App'
import Authors from './components/authors/Authors'
export default(
    <BrowserRouter path="/" component={App}>
        <Route exact component={HomePage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="about" component={AboutPage}/>
    </BrowserRouter>
);
