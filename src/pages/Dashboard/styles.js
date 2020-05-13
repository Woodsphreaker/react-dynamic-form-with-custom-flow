import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
import { darken } from 'polished'

const hoverColor = ({ bgColor }) => {
  if (bgColor) {
    return darken(0.09, bgColor)
  }

  return ''
}

const FlowTitle = styled.h1`
  margin: 20px 0;
  color: #ccc;
`

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0 60px 0;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 0 8px 0 #fff;
  cursor: pointer;
`
const NextArrow = styled(FaChevronDown)`
  height: 50px;
  width: 50px;
  color: #ccc;
`
const Card = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor || 'unset'};
  box-shadow: 0 0 10px -1px ${(props) => props.borderColor || '#fff'};
  transition: background 0.5s;

  :hover {
    background-color: ${hoverColor};
  }

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`
const Section = styled.div`
  width: 100%;
  margin: 10px 5px;
  padding: 10px;
  min-height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor || 'unset'};
  color: #fff;
  font-size: 18px;
  text-align: center;
  transition: background 0.5s;

  :hover {
    background-color: ${hoverColor};
  }
`
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex: 1;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`
const FieldLabel = styled.span`
  align-self: flex-start;
  color: #fff;
  font-size: 15px;
`

const Button = styled.button`
  height: 50px;
  padding: 0 20px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  background-color: #758ee6;
  color: #fff;
  font-weight: bold;
  transition: background 0.5s;

  :hover {
    background: ${darken(0.09, '#758ee6')};
  }
`

export {
  FlowTitle,
  Container,
  Content,
  Card,
  Section,
  NextArrow,
  CardContainer,
  FieldLabel,
  Button,
}
