import React from "react";
import { BrowserRouter , Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App(){
  //HashRouter(/#) -> Route -> path, component 지정
  //exact={true} : 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여줌
  return (
    <BrowserRouter>
      <Navigation/>
      <Route path='/' exact={ true } component = { Home }/>
      <Route path='/about' component = { About }/>
    </BrowserRouter>
  )
}

export default App;