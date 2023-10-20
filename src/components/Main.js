import { Routes, Route } from 'react-router-dom';
import ReserveTable from './pages/ReserveTable';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Menu from './pages/Menu';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/AllMenu" element={<Menu/>} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
      </Routes>
    </main>
  );
}

export default Main;