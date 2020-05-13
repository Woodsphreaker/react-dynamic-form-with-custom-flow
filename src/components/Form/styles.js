import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 0 8px 0 #fff;

  form {
    display: flex;
    flex-direction: column;

    input,
    select,
    textarea {
      border: none;
      margin: 10px 0;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 6px;
      transition: border-color 0.6s;
      font-size: 16px;

      :focus {
        outline: none;
      }

      :hover {
        border-color: #ccc;
      }

      ::placeholder {
        color: #999;
      }
    }

    button {
      width: 200px;
      height: 50px;
      margin: 20px 0 0 0;
      border: none;
      border-radius: 5px;
      background: ${(props) => (props.disabled ? '#ccc' : '#3b93ff')};
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.3s;
      &:hover {
        background: ${(props) => (props.disabled ? '#ccc' : '#215ea9')};
      }
    }

    textarea {
      height: 200px;
      resize: none;
    }
  }
`

export { Container, Content }
