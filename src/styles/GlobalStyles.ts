import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }
  html {
    /* Ant Desing 기준으로 설정  */
    font-size: 14px;
  }
  body{
    /* Ant Desing 기준으로 설정  */
    line-height: 22px;
    background-color: #ffffff;
    /*TODO: 전역 폰트 설정 필요 */
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
export default GlobalStyle;
