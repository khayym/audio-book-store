import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
  ${reset}

  * {
 font-family: 'Noto Sans JP', sans-serif;
    font-style: normal;
    font-weight:400;
    font-size:16px;
    ::-moz-selection { background: #fe7664; color:#fff; }
    ::selection { background: #fe7664;color:#fff; }
  }
  
  a{
    text-decoration:none;
   font-family: 'Noto Sans JP', sans-serif;
  }

  body {
   font-family: 'Noto Sans JP', sans-serif;
    font-style: normal;
    font-weight:400;
    font-size:16px;
  }
  /* other styles */
`
export default GlobalStyle