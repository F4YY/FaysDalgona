import { Routes, Route } from 'react-router-dom';
import ReserveTable from './pages/ReserveTable';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Menu from './pages/Menu';
import { MainMenu } from './pages/AllMenu/MainMenu';
import { DalgonaIced } from './pages/AllMenu/DalgonaIced';
import { RegularIced } from './pages/AllMenu/RegularIced';
import { RegularHot } from './pages/AllMenu/RegularHot';
import { MieNyemek } from './pages/AllMenu/MieNyemek';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/AllMenu" element={<Menu/>}>
          <Route path="MainMenu" element={<MainMenu />} />
          <Route path="Dalgona Iced" element={<DalgonaIced />} />
          <Route path="Regular Iced" element={<RegularIced />} />
          <Route path="Regular Hot" element={<RegularHot />} />
          <Route path="Mie Nyemek" element={<MieNyemek />} />
        </Route>
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
      </Routes>
    </main>
  );
}

export default Main;