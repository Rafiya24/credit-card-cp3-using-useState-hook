// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: green;
  display: flex;
`
export const LeftCard = styled.div`
  height: 100%;
  width: 50%;
  background-color: #3b4b69;
  text-align: center;
  padding: 3%;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: Roboto;
  color: #ffffff;
`
export const Line = styled.hr`
  width: 20%;
  height: 2px;
  border: none;
  background-color: #ffd773;
  margin-bottom: 20%;
`
export const CardContainer = styled.div`
  height: 40%;
  width: 55%;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 30px;
  padding-left: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const CardNumber = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-family: Roboto;
`
export const CardHolderText = styled.p`
  font-size: 11px;
  font-family: Roboto;
  color: #ffffff;
  margin-top: 15px;
  font-weight: 350;
`
export const HolderName = styled.p`
  font-size: 14px;
  font-family: Roboto;
  color: #ffffff;
  font-weight: 400;
`

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputsContainer = styled.div`
  height: 35%;
  width: 50%;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 3px 3px #c3cad9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
`
export const PaymentHeading = styled.h1`
  font-size: 15px;
  font-family: Roboto;
  color: #344e7a;
  padding-bottom: 3%;
  margin-top: 10%;
`
export const InputElement = styled.input`
  height: 15%;
  width: 75%;
  border: 2px solid #d3d9e0;
  margin-top: 5%;
`
