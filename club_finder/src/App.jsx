import { Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home'
import ClubList from './pages/ClubList';
import ClubDetail from './pages/ClubDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return ( 
  <div className="min-h-screen bg-amber-100">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clubs" element={<ClubList />} />
      <Route path="/clubs/:clubID" element={<ClubDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </div>
  );
}

export default App;
