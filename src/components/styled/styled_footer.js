import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 2.5rem;
  background-color: #18181b;
  padding: 1.8rem;
`
export const FootWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
export const VisitSosmed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.1rem;
  gap: 1rem;
  color: #fff;
  @media screen and (max-width: 991px) {
    font-size: .8rem;
  }
`
export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  .icon {
    margin: 0 0.3rem;
    &:hover {
      color: #D15B05;
    }
  }
`
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem;
  h1{
    font-size: 1.1rem;
    color: #fff;
  }
  p{
    font-size: 1rem;
    color: grey;
  }
  @media screen and (max-width: 991px) {
    h1{
      font-size: .9rem;
    }
    p{
      font-size: .8rem;
    }
  }
  @media screen and (max-width: 640px) {
    align-items: center;
  }
`
export const OpenHours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem;
  h2{
    font-size: 1.1rem;
    color: #fff;
  }
  p{
    font-size: 1rem;
    color: grey;
  }
  @media screen and (max-width: 991px) {
    h2{
      font-size: .9rem;
    }
    p{
      font-size: .8rem;
    }
  }
  @media screen and (max-width: 640px) {
    align-items: center;
  }
`
export const Copyright = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #fff;
`
export const FDlogo = styled.img`
  width: 15%;
  height: auto;
  @media screen and (max-width: 640px) {
    width: 30%;
  }
`
