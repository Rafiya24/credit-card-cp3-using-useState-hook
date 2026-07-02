// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  LeftCard,
  Heading,
  Line,
  CardContainer,
  CardHolderText,
  CardNumber,
  HolderName,
  RightContainer,
  InputsContainer,
  PaymentHeading,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [numberInput, setNumber] = useState('')
  const [nameInput, setName] = useState('')

  const onChangeNumber = event => setNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)

  return (
    <MainContainer>
      <LeftCard>
        <Heading>CREDIT CARD</Heading>
        <Line />
        <CardContainer data-testid="creditCard">
          <CardNumber>{numberInput}</CardNumber>
          <CardHolderText>CARDHOLDER NAME</CardHolderText>
          <HolderName>{nameInput}</HolderName>
        </CardContainer>
      </LeftCard>
      <RightContainer>
        <InputsContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputElement
            placeholder="Card Number"
            type="text"
            value={numberInput}
            onChange={onChangeNumber}
          />
          <InputElement
            placeholder="Cardholder Name"
            type="text"
            value={nameInput}
            onChange={onChangeName}
          />
        </InputsContainer>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
