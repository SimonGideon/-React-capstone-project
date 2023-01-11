import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Details from './components/Details';
import { fetchCountries } from './store/Countries';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
