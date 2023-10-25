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
import { DalCro } from './pages/AllMenu/DalCro';
import { Combo123 } from './pages/AllMenu/Combo123';
import { Croffle } from './pages/AllMenu/Croffle';
import { SateSeafood } from './pages/AllMenu/SateSeafood';

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
          <Route path="Simple DalCro" element={<DalCro />} />
          <Route path="Combo 123" element={<Combo123 />} />
          <Route path="Croffle Original" element={<Croffle />} />
          <Route path="Sate Bakso Seafood" element={<SateSeafood />} />
        </Route>
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
      </Routes>
    </main>
  );
}

export default Main;