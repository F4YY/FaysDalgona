import styled from "styled-components";

export const NavList = styled.div`
  align-items: flex-start;
  bottom: 16px;
  align-self: start;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 50px;
  background-color: rgba(250, 210, 210, 1);
  padding: 20px 40px;
  margin-top: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 20px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 19.5px;
  letter-spacing: 0.16px;
  align-self: stretch;

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;