import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 0 40px;
  `;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  min-width: 300px;
  margin: 10px 0 40px 12px;

  @media (max-width: 991px) {
    margin-top: 20px;
    min-width: 230px;
    margin: 0 0 40px 12px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Category = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  width: 123px;
  max-width: 100%;
  flex-direction: column;
  margin: 30px 30px 20px;
`;

export const Link = styled.a`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto Condensed, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28.5px;
  letter-spacing: 0.16px;
  align-self: start;
`;

export const Text = styled.div`
  color: rgba(0, 0, 0, 0.58);
  font-family: Roboto Condensed, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  align-self: start;
  width: 222px;
  margin-top: 19px;

  @media (max-width: 991px) {
    width: 165px;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 30px 0 0;
  @media (max-width: 991px) {
    margin: 20px 0 0;
  }
  @media (max-width: 640px) {
    margin: 20px;
  }
`

export const StyledTextMenu = styled.a`
  flex: 1 0 0;
  color: azure;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 38.78px;
  letter-spacing: 0.16px;
  background-color: rgba(229, 102, 8, 1);
  width: 100%;
  padding: 5px 0 5px 20px;
  border-radius: 8px 0 0 8px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 2px 0 2px 20px;
  }
`;

export const StyledTextCategory = styled.a`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto Condensed, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.16px;
  align-self: start;
  border-style: none;
  border-width: 1px;
  margin: 20px 0 10px;

  @media (max-width: 991px) {
    margin: 20px 0 0;
  }

  @media (max-width: 640px) {
    margin-bottom: 0;
    margin-top: 30px;
  }
`;

export const DrinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);

  @media (max-width: 991px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    row-gap: 10px;
  }

  @media (max-width: 640px) {
    row-gap: 5px;
  }
`;

export const DalgonaIcedContainer = styled.div`
  align-items: flex-start;
  display: flex;
  width: auto;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 991px) {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-self: start;
    width: auto;
  }
`;

export const DrinkImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 112px;
  border-radius: 20px;
  background-blend-mode: pass_through;
  align-self: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

export const DrinkLink = styled.a`
  color: rgba(0, 0, 0, 0.58);
  font-family: Roboto Condensed, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28.5px;
  letter-spacing: 0.16px;
  align-self: center;
  min-width: 100px;
  max-width: 140px;
  margin-top: 1px;

  @media (max-width: 640px) {
    flex-grow: 1;
    max-width: 200px;
  }
`;

export const RegularIcedContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 991px) {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 640px) {
    margin-top: 10px;
  }
`;

export const RegularHotContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 991px) {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 640px) {
    margin-top: 10px;
  }
`;
