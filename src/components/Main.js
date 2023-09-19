import { Routes, Route } from 'react-router-dom';
import ReserveTable from './ReserveTable';
// import Login from './Login';
// import LoginForm from './LoginNetlify';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
        {/* <Route path="/Login" element={<LoginForm />} /> */}
      </Routes>
    </main>
  );
}

export default Main;