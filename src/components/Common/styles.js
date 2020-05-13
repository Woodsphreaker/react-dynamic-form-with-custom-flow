import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const InfoPannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #999;
`

const PreviewDataPannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 0 0;
  font-size: 18px;
  color: #999;

  div {
    margin: 10px 0 0 0;
  }
`

export { Container, InfoPannel, PreviewDataPannel }
