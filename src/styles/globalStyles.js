import { createGlobalStyle } from 'styled-components'

import bg from '../assets/img/bg1.png'

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-size: 14px;
    font-family: Roboto, sans-serif;
    background-image: ${`url(${bg})`};
    background-attachment: fixed;
    background-size: contain;
    background-repeat: no-repeat
  }

  a {
    text-decoration: none
  }

  ul {
    list-style: none
  }

  button {
    cursor: pointer
  }

`
