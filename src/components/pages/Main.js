import { Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
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
import { SateBaksoSeafood } from './AllMenu/Food/SateBaksoSeafood/SateBaksoSeafood';
import { DalCroChocSilv } from './AllMenu/Combo/DalCro/DalCroChocSIlv';
import { DalCroCapu } from './AllMenu/Combo/DalCro/DalCroCapu';
import { DalCroGreenTea } from './AllMenu/Combo/DalCro/DalCroGreenTea';
import { DalCroOriThaiTea } from './AllMenu/Combo/DalCro/DalCroOriThaiTea';
import { DalCroChocMilo } from './AllMenu/Combo/DalCro/DalCroChocMilo';
import { DalCroMocca } from './AllMenu/Combo/DalCro/DalCroMocca';
import { DalCroRedV } from './AllMenu/Combo/DalCro/DalCroRedV';
import { DalCroTaro } from './AllMenu/Combo/DalCro/DalCroTaro';
import { DalCroNescafe } from './AllMenu/Combo/DalCro/DalCroNescafe';
import { DalCroTira } from './AllMenu/Combo/DalCro/DalCroTira';
import { ComboSolo1 } from './AllMenu/Combo/Combo123/ComboSolo1';
import { ComboSolo2 } from './AllMenu/Combo/Combo123/ComboSolo2';
import { ComboDuo1 } from './AllMenu/Combo/Combo123/ComboDuo1';
import { ComboDuo2 } from './AllMenu/Combo/Combo123/ComboDuo2';
import { ComboTrio1 } from './AllMenu/Combo/Combo123/ComboTrio1';
import { ComboTrio2 } from './AllMenu/Combo/Combo123/ComboTrio2';
import AuthContext from '../../context/authContext';

function Main() {
  const stars = Array(5).fill(0);
  const [currentRating, setCurrentRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(undefined);
  const [rateMenu, setRateMenu] = React.useState(false);
  const {user, authReady} = useContext(AuthContext);
  const [showAlert, setShowAlert] = React.useState(false);
  const [feedbackValue, setFeedbackValue] = React.useState('');
  const [menuPic, setMenuPic] = React.useState('');
  const [menuName, setMenuName] = React.useState('');

  const handleRateMenu = (e) => {
    if(user){
      e.preventDefault();
      setRateMenu(true);
    } else {
      setShowAlert(true);
    }
  }
  // const handleSubmit = (e) => {
  //   setRateMenu(false);
  //   setCurrentRating(0);
  // }
  const handleSubmit = () => {
    fetch("https://fays-dalgona.onrender.com/Testimonials")
      .then(response => response.json())
      .then(testimonials => {
        const lastId = testimonials[testimonials.length - 1].id;
        const newId = lastId + 1;
        const postData = {
          id: newId,
          name: user?.user_metadata.full_name,
          prof_pic: user?.user_metadata.avatar_url || "avatar.jpg",
          email: user?.email || "NA",
          menu_pic: menuPic,
          menu_name: menuName,
          star_rating: currentRating,
          review: feedbackValue
        };
        return fetch("https://fays-dalgona.onrender.com/Testimonials", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
        });
      })
      .then(postResponse => {
        if (postResponse.ok) {
          alert('Thank you for your feedback!');
          setRateMenu(false);
          setFeedbackValue("");
          setCurrentRating(0);
        } else {
          alert("Error submitting feedback. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error submitting feedback. Please try again.");
      });
  };

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
        <Route path="Dalgona Choco Silverqueen" element={<DalgonaChocSilv stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue}/>} />
        <Route path="Dalgona Capuccino" element={<DalgonaCapu stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} menuPic={menuPic} setMenuPic={setMenuPic} menuName={menuName} setMenuName={setMenuName}/>} />
        <Route path="Dalgona Green Tea" element={<DalgonaGreenTea stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue}/>} />
        <Route path="Dalgona Original Thai Tea" element={<DalgonaOriThaiTea stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue}/>} />
        <Route path="Dalgona Choco Milo" element={<DalgonaChocMilo stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue}/>} />
        <Route path="Dalgona Moccaccino" element={<DalgonaMocca stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} menuPic={menuPic} setMenuPic={setMenuPic} menuName={menuName} setMenuName={setMenuName}/>} />
        <Route path="Dalgona Red Velvet" element={<DalgonaRedV stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Dalgona Taro" element={<DalgonaTaro stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Dalgona Nescafe Classic" element={<DalgonaNescafe stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Dalgona Tiramisu" element={<DalgonaTira stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Choco Silverqueen Iced" element={<RegIcedChocSilv stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Capuccino Iced" element={<RegIcedCapu stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Green Tea Iced" element={<RegIcedGreenTea stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Original Thai Tea Iced" element={<RegIcedOriThaiTea stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Choco Milo Iced" element={<RegIcedChocMilo stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Moccaccino Iced" element={<RegIcedMocca stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Red Velvet Iced" element={<RegIcedRedV stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Taro Iced" element={<RegIcedTaro stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Nescafe Classic Iced" element={<RegIcedNescafe stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Tiramisu Iced" element={<RegIcedTira stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Choco Silverqueen" element={<RegHotChocSilv stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Capuccino" element={<RegHotCapu stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Green Tea" element={<RegHotGreenTea stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Original Thai Tea" element={<RegHotOriThaiTea stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Choco Milo" element={<RegHotChocMilo stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Moccaccino" element={<RegHotMocca stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Red Velvet" element={<RegHotRedV stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Taro" element={<RegHotTaro stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Nescafe Classic" element={<RegHotNescafe stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Hot Tiramisu" element={<RegHotTira stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Mie Nyemek Original" element={<MieNyemekOriginal stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Mie Nyemek Bakso Sapi Sosis" element={<MieNyemekBaksoSapi stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Mie Nyemek Bakso Seafood" element={<MieNyemekBaksoSeafood stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Croffle Original" element={<CroffleOriginal stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Sate Bakso Seafood" element={<SateBaksoSeafood stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Choco Silverqueen" element={<DalCroChocSilv stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Capuccino" element={<DalCroCapu stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Green Tea" element={<DalCroGreenTea stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Original Thai Tea" element={<DalCroOriThaiTea stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Choco Milo" element={<DalCroChocMilo stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Moccaccino" element={<DalCroMocca stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Red Velvet" element={<DalCroRedV stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Taro" element={<DalCroTaro stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Nescafe Classic" element={<DalCroNescafe stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="DalCro Tiramisu" element={<DalCroTira stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Combo Solo 1" element={<ComboSolo1 stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Combo Solo 2" element={<ComboSolo2 stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Combo Duo 1" element={<ComboDuo1 stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Combo Duo 2" element={<ComboDuo2 stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Combo Trio 1" element={<ComboTrio1 stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="Combo Trio 2" element={<ComboTrio2 stars={stars} rateMenu={rateMenu} setRateMenu={setRateMenu} currentRating={currentRating} setCurrentRating={setCurrentRating} hoverRating={hoverRating} setHoverRating={setHoverRating} authReady={authReady} handleRateMenu={handleRateMenu}  handleSubmit={handleSubmit} showAlert={showAlert} setShowAlert={setShowAlert} feedbackValue={feedbackValue} setFeedbackValue={setFeedbackValue} />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable />} />
      </Routes>
    </main>
  );
}

export default Main;