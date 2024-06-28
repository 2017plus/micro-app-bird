import { BrowserRouter, Link, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import ReactPage from './ReactPage';
import VuePage from './VuePage';
import StaticPage from './StaticPage';

function App() {
  return (
    <BrowserRouter basename=''>
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <div style={{ backgroundColor: 'darkseagreen', padding: 20 }}>
        <ul>
          <li><a href='/react'>菜单1</a></li>
          <li><a href='/vue'>菜单2</a></li>
          <li><a href='/static'>菜单3</a></li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          backgroundColor: 'pink', padding: 20
        }}>
            <Link to="/react">React子应用</Link>
            <Link style={{ margin: 30 }} to="/vue">Vue子应用</Link>
            <Link to="/static">静态应用</Link>
        </div>

        <div id='container' >
          
            <Routes>
              <Route path='/react/*' element={<ReactPage />}></Route>
              <Route path='/vue/*' element={<VuePage />}></Route>
              <Route path='/static/*' element={<StaticPage />}></Route>
            </Routes>
          
        </div>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
