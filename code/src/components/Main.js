import React from 'react';
import { Switch,Route } from 'react-router-dom'
import Authors from './authors/Authors'
import Publishers from './publishers/Publishers'
import Books from './books/Books'
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Books}/>
        <Route path='/authors' component={Authors}/>
        <Route path='/publishers' component={Publishers}/>
      </Switch>
    </main>
  )
  
  export default Main