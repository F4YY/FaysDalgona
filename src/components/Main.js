import { Routes, Route } from 'react-router-dom';
import ReserveTable from './pages/ReserveTable';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import AllMenus from './pages/AllMenus';
// import AllMenu from './pages/AllMenu';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/AllMenu" element={<AllMenus/>} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
      </Routes>
    </main>
  );
}

export default Main;