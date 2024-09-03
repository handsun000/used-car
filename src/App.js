import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './component/page/MainPage';
import CarViewPage from './component/page/CarViewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='car/:carId' element={<CarViewPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
