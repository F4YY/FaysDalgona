import styled from 'styled-components';

export const HighlightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, rgba(209, 100, 32, 1), rgba(165, 72, 32, 1), rgba(209, 91, 20, 1));
`;

export const ThisWeekandOrder = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 20px 100px;
  @media (max-width: 991px) {
    margin: 20px 40px;
  }
  @media (max-width: 640px) {
    margin: 20px 15px;
  }
`;

export const HighlightHeading = styled.h1`
  display: flex;
  font-size: 36px;
  color: azure;
  @media (max-width: 991px) {
    font-size: 30px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const OrderButton = styled.a`
  display: flex;
  font-size: 22px;
  color: yellow;
  font-weight: bold;
  width: auto;
  border-radius: 10px;
  padding: 10px 15px;
  border: 1px solid yellow;
  &:hover {
    color: azure;
    border: 2px solid azure;
  }
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    padding: 5px 8px;
  }
`;

export const SpecialMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  margin: 20px 0;
`

export const SpecialItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: azure;
  cursor: pointer;
  border-radius: 20px 20px 0 0;
  &:hover {
    opacity: 80%;
  }
  @media (max-width: 640px) {
    width: 95%;
  }
`;

export const StyledImage = styled.img`
  display: flex;
  width: 340px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px 20px 0 0;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const TopMenuDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: rgba(51, 51, 51, 1);
  background-color: azure;
  width: 340px;
  padding: 10px;
  min-height: 180px;
  @media (max-width: 640px) {
    width: auto;
  }
`
export const NameAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  h3{
    font-size: 20px;
  }
  h4{
    font-size: 20px;
    color: rgba(238,153,114,1);
  }
`
export const MenuDescription = styled.div`
  display: flex;
  font-size: 14px;
  color: #64748b;
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const OrderDelivery = styled.div`
  display: flex;
  font-size: 22px;
  color: #333333;
  font-family: Karla;
`;
