import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

  :root {
  --bg-light:	 rgb(207, 220, 232);
  --bg-white: rgb(255, 255, 250);

  --color-1: rgba(0, 239, 139, 0.456);
  --color-2: rgba(0, 0, 0, 0.256);

  --btn-try: #0b5a79;
  --btn-color-2: #ff6200;


  /* screen size */
  --mediumWidth: 1280px;
  --smallWidth: 750px;



  /* font size */
  --fontSuperBig: 2.5rem;
  --fontBigger: 2rem;
  --fontBig: 1.7rem;
  --fontMed: 1.3rem;
  --fontSmall: 1.1rem;
  --fontSuperSmall: .8rem;
  }

  * {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;

    .App{
      display: flex;
      justify-content:center;
    }
    
    @media screen and (max-width: 800px) {
      overflow: hidden auto;
    }
  }
`;

export default GlobalStyle;
