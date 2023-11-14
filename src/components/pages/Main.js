import { Routes, Route } from 'react-router-dom';
import ReserveTable from './ReserveTable';
import Testimonials from './Testimonials';
import About from './About';
import Menu from './AllMenu/Menu';
import { MainMenu } from './AllMenu/MainMenu';
import { DalgonaIced } from './AllMenu/Drinks/DalgonaIced/DalgonaIced';
import { RegularIced } from './AllMenu/Drinks/RegularIced/RegularIced';
import { RegularHot } from './AllMenu/Drinks/RegularHot/RegularHot';
import { MieNyemek } from './AllMenu/Food/MieNyemek/MieNyemek';
import { DalCro } from './AllMenu/Combo/DalCro/DalCro';
import { Combo123 } from './AllMenu/Combo/Combo123/Combo123';
import { Croffle } from './AllMenu/Food/Croffle/Croffle';
import { SateSeafood } from './AllMenu/Food/SateBaksoSeafood/SateSeafood';
import { DalgonaChocSilv } from './AllMenu/Drinks/DalgonaIced/DalgonaChocSilv';
import { DalgonaCapu } from './AllMenu/Drinks/DalgonaIced/DalgonaCapu';
import { DalgonaGreenTea } from './AllMenu/Drinks/DalgonaIced/DalgonaGreenTea';
import { DalgonaChocMilo } from './AllMenu/Drinks/DalgonaIced/DalgonaChocMilo';
import { DalgonaOriThaiTea } from './AllMenu/Drinks/DalgonaIced/DalgonaOriThaiTea';
import { DalgonaMocca } from './AllMenu/Drinks/DalgonaIced/DalgonaMocca';
import { DalgonaRedV } from './AllMenu/Drinks/DalgonaIced/DalgonaRedV';
import { DalgonaTaro } from './AllMenu/Drinks/DalgonaIced/DalgonaTaro';
import { DalgonaNescafe } from './AllMenu/Drinks/DalgonaIced/DalgonaNescafe';
import { DalgonaTira } from './AllMenu/Drinks/DalgonaIced/DalgonaTira';

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
        <Route path="Dalgona Choco Silverqueen" element={<DalgonaChocSilv />} />
        <Route path="Dalgona Capuccino" element={<DalgonaCapu />} />
        <Route path="Dalgona Green Tea" element={<DalgonaGreenTea />} />
        <Route path="Dalgona Original Thai Tea" element={<DalgonaOriThaiTea />} />
        <Route path="Dalgona Choco Milo" element={<DalgonaChocMilo />} />
        <Route path="Dalgona Moccaccino" element={<DalgonaMocca />} />
        <Route path="Dalgona Red Velvet" element={<DalgonaRedV />} />
        <Route path="Dalgona Taro" element={<DalgonaTaro />} />
        <Route path="Dalgona Nescafe Classic" element={<DalgonaNescafe />} />
        <Route path="Dalgona Tiramisu" element={<DalgonaTira />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
      </Routes>
    </main>
  );
}

export default Main;