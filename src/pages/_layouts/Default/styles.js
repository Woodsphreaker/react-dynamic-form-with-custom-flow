import styled from 'styled-components'

import bg from '../../../assets/img/bg1.png'

const Container = styled.div`
  background-image: ${`url(${bg})`};
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
`

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 100vh;
`

export { Container, Content }
