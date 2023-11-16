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
import { RegIcedChocSilv } from './AllMenu/Drinks/RegularIced/RegIcedChocSilv';
import { RegIcedCapu } from './AllMenu/Drinks/RegularIced/RegIcedCapu';
import { RegIcedGreenTea } from './AllMenu/Drinks/RegularIced/RegIcedGreenTea';
import { RegIcedOriThaiTea } from './AllMenu/Drinks/RegularIced/RegIcedOriThaiTea';
import { RegIcedChocMilo } from './AllMenu/Drinks/RegularIced/RegIcedChocMilo';
import { RegIcedMocca } from './AllMenu/Drinks/RegularIced/RegIcedMocca';
import { RegIcedRedV } from './AllMenu/Drinks/RegularIced/RegIcedRedV';
import { RegIcedTaro } from './AllMenu/Drinks/RegularIced/RegIcedTaro';
import { RegIcedNescafe } from './AllMenu/Drinks/RegularIced/RegIcedNescafe';
import { RegIcedTira } from './AllMenu/Drinks/RegularIced/RegIcedTira';
import { RegHotChocSilv } from './AllMenu/Drinks/RegularHot/RegHotChocSilv';
import { RegHotCapu } from './AllMenu/Drinks/RegularHot/RegHotCapu';
import { RegHotGreenTea } from './AllMenu/Drinks/RegularHot/RegHotGreenTea';
import { RegHotOriThaiTea } from './AllMenu/Drinks/RegularHot/RegHotOriThaiTea';
import { RegHotChocMilo } from './AllMenu/Drinks/RegularHot/RegHotChocMilo';
import { RegHotMocca } from './AllMenu/Drinks/RegularHot/RegHotMocca';
import { RegHotRedV } from './AllMenu/Drinks/RegularHot/RegHotRedV';
import { RegHotTaro } from './AllMenu/Drinks/RegularHot/RegHotTaro';
import { RegHotNescafe } from './AllMenu/Drinks/RegularHot/RegHotNescafe';
import { RegHotTira } from './AllMenu/Drinks/RegularHot/RegHotTira';
import { MieNyemekOriginal } from './AllMenu/Food/MieNyemek/MieNyemekOriginal';
import { MieNyemekBaksoSapi } from './AllMenu/Food/MieNyemek/MieNyemekBaksoSapi';
import { MieNyemekBaksoSeafood } from './AllMenu/Food/MieNyemek/MieNyemekBaksoSeafood';
import { CroffleOriginal } from './AllMenu/Food/Croffle/CroffleOriginal';

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
        <Route path="Choco Silverqueen Iced" element={<RegIcedChocSilv />} />
        <Route path="Capuccino Iced" element={<RegIcedCapu />} />
        <Route path="Green Tea Iced" element={<RegIcedGreenTea />} />
        <Route path="Original Thai Tea Iced" element={<RegIcedOriThaiTea />} />
        <Route path="Choco Milo Iced" element={<RegIcedChocMilo />} />
        <Route path="Moccaccino Iced" element={<RegIcedMocca />} />
        <Route path="Red Velvet Iced" element={<RegIcedRedV />} />
        <Route path="Taro Iced" element={<RegIcedTaro />} />
        <Route path="Nescafe Classic Iced" element={<RegIcedNescafe />} />
        <Route path="Tiramisu Iced" element={<RegIcedTira />} />
        <Route path="Hot Choco Silverqueen" element={<RegHotChocSilv />} />
        <Route path="Hot Capuccino" element={<RegHotCapu />} />
        <Route path="Hot Green Tea" element={<RegHotGreenTea />} />
        <Route path="Hot Original Thai Tea" element={<RegHotOriThaiTea />} />
        <Route path="Hot Choco Milo" element={<RegHotChocMilo />} />
        <Route path="Hot Moccaccino" element={<RegHotMocca />} />
        <Route path="Hot Red Velvet" element={<RegHotRedV />} />
        <Route path="Hot Taro" element={<RegHotTaro />} />
        <Route path="Hot Nescafe Classic" element={<RegHotNescafe />} />
        <Route path="Hot Tiramisu" element={<RegHotTira />} />
        <Route path="Mie Nyemek Original" element={<MieNyemekOriginal />} />
        <Route path="Mie Nyemek Bakso Sapi Sosis" element={<MieNyemekBaksoSapi />} />
        <Route path="Mie Nyemek Bakso Seafood" element={<MieNyemekBaksoSeafood />} />
        <Route path="Croffle Original" element={<CroffleOriginal />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
      </Routes>
    </main>
  );
}

export default Main;