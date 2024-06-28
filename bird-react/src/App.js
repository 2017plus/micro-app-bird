import logo from './logo.svg';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

function About() {
  return <div style={{ height: 600, display: 'flex' }}>
    <div style={{ margin: 'auto' }}>这是关于内容</div>
  </div>
}

function App() {
  return (
    <BrowserRouter basename='/react'>
      <div style={{ textAlign: 'center' }}>

        <Link to={'/'}>首页</Link>
        <Link to={'/about'} style={{ marginLeft: 20 }}>关于</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
