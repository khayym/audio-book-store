import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;200;300;400;500;600;700&display=swap');

  ${reset}

  * {
    font-family: 'IBM Plex Sans Thai Looped', sans-serif;
    font-style: normal;
    font-weight:400;
    font-size:16px;
  }
  
  body {
    font-family: 'IBM Plex Sans Thai Looped', sans-serif;
    font-style: normal;
    font-weight:400;
    font-size:16px;
  }
  /* other styles */
`
export default GlobalStyle