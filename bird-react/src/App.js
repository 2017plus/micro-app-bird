import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => new Promise(resolve=>{
  setTimeout(()=>{
    resolve(import(/* webpackChunkName: "home" */ './Home'))
  },2000)
}));
const About = React.lazy(() => import(/* webpackChunkName: "about" */ './About'));

function App() {
  return (
    <BrowserRouter basename='/react'>
      <div style={{ textAlign: 'center' }}>

        <Link to={'/'}>首页</Link>
        <Link to={'/about'} style={{ marginLeft: 20 }}>关于</Link>
      </div>

      <React.Suspense fallback={<div>Loading...</div>}>

        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
