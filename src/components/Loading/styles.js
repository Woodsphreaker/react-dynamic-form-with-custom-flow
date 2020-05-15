import styled, { keyframes } from 'styled-components'

import { MdFlare } from 'react-icons/md'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

const spinetAnimation = keyframes`
 0% {
   transform: rotate(0deg)
 }
 100% {
  transform: rotate(359deg)
 }
`

const LoadingImage = styled(MdFlare)`
  height: 150px;
  width: 150px;
  color: #7159c1;
  animation: ${spinetAnimation} 2s infinite;
`

export { Container, LoadingImage }
