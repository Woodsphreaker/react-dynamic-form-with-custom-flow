import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  Root,
  FlowTitle,
  Container,
  Content,
  Card,
  CardContainer,
  Section,
  NextArrow,
  FieldLabel,
  Button,
} from './styles'

function Dashboard() {
  const history = useHistory()

  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <>
      <Root>
        <Container>
          <FlowTitle> Flow 1 </FlowTitle>
          <Content>
            <Card bgColor="#758ee6">
              <Section bgColor="#758ee6">Flow 1</Section>
            </Card>
            <NextArrow />
            <Card borderColor="#758ee6">
              <Section bgColor="#264653">Screen 1</Section>
              <Section bgColor="#2a9d8f">Screen 2</Section>
              <Section bgColor="#e9c46a">Screen 3</Section>
              <Section bgColor="#f4a261">Screen 4</Section>
              <Section bgColor="#e76f51">Screen 5</Section>
              <Section bgColor="#028090">Screen 6</Section>
            </Card>
            <NextArrow />
            <CardContainer>
              <Card direction="column" bgColor="#264653">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#2a9d8f">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#e9c46a">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#f4a261">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#e76f51">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#028090">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
              </Card>
            </CardContainer>
            <Button onClick={() => handleClick('/screen-1')}>Go to flow</Button>
          </Content>

          <FlowTitle> Flow 2 </FlowTitle>
          <Content>
            <Card bgColor="#758ee6">
              <Section bgColor="#758ee6">Flow 2</Section>
            </Card>
            <NextArrow />
            <Card>
              <Section bgColor="#264653">Screen 1</Section>
              <Section bgColor="#2a9d8f">Screen 2</Section>
              <Section bgColor="#e9c46a">Screen 3</Section>
              <Section bgColor="#f4a261">Screen 4</Section>
              <Section bgColor="#e76f51">Screen 5</Section>
              <Section bgColor="#028090">Screen 6</Section>
            </Card>
            <NextArrow />
            <CardContainer>
              <Card direction="column" bgColor="#264653">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#2a9d8f">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#e9c46a">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#f4a261">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#e76f51">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
                <FieldLabel>Telefone</FieldLabel>
                <FieldLabel>Cep</FieldLabel>
                <FieldLabel>Estado</FieldLabel>
                <FieldLabel>Cidade</FieldLabel>
              </Card>

              <Card direction="column" bgColor="#028090">
                <FieldLabel>Nome</FieldLabel>
                <FieldLabel>Endereço</FieldLabel>
              </Card>
            </CardContainer>
            <Button onClick={() => handleClick('/screen-2')}>Go to flow</Button>
          </Content>
        </Container>
      </Root>
    </>
  )
}

export default Dashboard
