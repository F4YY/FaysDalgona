import styled from "styled-components";
import bgintrodesktop from "../images/bg-pattern-intro-desktop.svg";

export const Testipage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  gap: 1rem;
  padding: 0 40px;
  margin: 0 auto 40px;
  h1{
    font-size: 38px;
    font-weight: bold;
    color: darkorange;
    margin: 40px 0;
    @media (max-width: 991px) {
      font-size: 30px;
      margin: 20px 0;
    }
    @media (max-width: 640px) {
      font-size: 24px;
    }
  }
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  @media (max-width: 640px) {
    padding: 0 10px;
  }
`;

export const Testifeeds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 2rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Testicard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 500px;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-image: url(${bgintrodesktop}),linear-gradient(135deg, hsl(273, 75%, 66%), hsl(240, 73%, 65%));
  box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.2);
  q{
    font-size:2em;
    text-align:center;
    color: hsl(217, 19%, 24%);
    margin: 0 1rem;
  }
  @media (max-width: 991px) {
    min-height: auto;
  }
`
export const TestiProfpicName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: auto;
  border-radius: 3rem;
  background-color: azure;
  p{
    font-size: 1.5rem;
    color: hsl(217, 19%, 24%);
    padding: 0 .5rem 0 0;
  }
`;
export const Profpic = styled.img`
  display: flex;
  width: 100px;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  aspect-ratio: 1/1;
  padding: 0.5rem;
  @media (max-width: 991px) {
    width: 90px;
  }
`
export const MenuAndRating = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: .4rem solid hsl(240, 53%, 65%);
  background-color: hsl(193, 38%, 86%);
  padding: .5rem 0;
  q{
    font-size: 1.8rem;
    font-family: Ubuntu, sans-serif;
    @media (max-width: 991px) {
      font-size: 1.5rem;
    }
  }
`;
export const MenuPicName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
`;
export const Menupic = styled.img`
  display: flex;
  width: 20%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 20%;
  aspect-ratio: 1/1;
  @media (max-width: 991px) {
    width: 10%;
  }
  @media (max-width: 640px) {
    width: 22%;
  }
`
export const MenuNameRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: .7rem;
`;
export const StarRating = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: .5rem;
`