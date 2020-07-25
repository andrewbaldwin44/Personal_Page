import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --navbar-height: 100px;
    --redBG: #BB0A21;
    --blackBG: #444146;
    --orangeBG: #E89005;
    --shadow: #6D545D;
  }

  @font-face {
    font-family: 'Linotte';
    src: url(/assets/fonts/linotte_regular.woff) format("woff");
  }

  @font-face {
    font-family: 'Linotte Heavy';
    src: url(/assets/fonts/linotte_heavy.woff) format("woff");
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--navbar-height);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, p,
  text {
    font-family: 'Oswald', sans-serif;;
  }
  html, body {
    max-width: 100vw;
  }
  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  body {
    font-size: 26px;
    color: white;
    background: var(--blackBG);
    line-height: 1.2;
    text-shadow: 2px 2px 8px black;
    width: 100vw;
    overflow-x: hidden;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
  }
  a:hover {
    text-shadow: 5px 5px 8px black;
  }
`;
