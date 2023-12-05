import styled from "styled-components";

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
  background-color: hsl(150, 100%, 66%);
  box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.2);
  q{
    font-size:2em;
    text-align:center;
    color: hsl(217, 19%, 24%);
    margin: 0 30px;
  }
  @media (max-width: 991px) {
    min-height: auto;
  }
`
export const TestiProfpicName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  p{
    font-size: 1.5rem;
    color: hsl(217, 19%, 24%);
  }
`;
export const Profpic = styled.img`
  display: flex;
  width: 40%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border: 2px solid hsl(217, 19%, 38%);
  border-radius: 50%;
  aspect-ratio: 1/1;
  @media (max-width: 991px) {
    width: 20%;
  }
  @media (max-width: 640px) {
    width: 40%;
  }
`
export const MenuPicName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  background-color: hsl(193, 38%, 86%);
  border-radius: 10px;
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
    width: 20%;
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
  gap: 1rem;
`