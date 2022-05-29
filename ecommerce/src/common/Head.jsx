import React from 'react'

import { 
  HeadSection,
  ContainerDFlex,
  LeftRow,
  RightRowRText,
  HeadLabel,
  HeadIcon
} from './Styles'

import { BsTelephoneFill } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'


const Head = () => {
  return (
    <>
      <HeadSection>
        <ContainerDFlex>
          <LeftRow>
            <HeadIcon><BsTelephoneFill /></HeadIcon>
            <HeadLabel>+55 33 99999-9999</HeadLabel>
            <HeadIcon><FaEnvelope /></HeadIcon>
            <HeadLabel>exemplo@gmail.com</HeadLabel>
          </LeftRow>
          <RightRowRText>
            <HeadLabel>FAQ's</HeadLabel>
            <HeadLabel>Preciso de Ajuda</HeadLabel>
            <span>🏴‍☠️</span>
            <HeadLabel>PT</HeadLabel>
            <span>🏁</span>
            <HeadLabel>BR</HeadLabel>
          </RightRowRText>
        </ContainerDFlex>
      </HeadSection>
    </>
  )
}

export default Head