import styled from "styled-components";

const NavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-light);
  padding: 10px 5%;

  input#navToggle {
    position: absolute;
    left: -200px;
    display: none;
    appearance: none;
  }

  div.lists {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      gap: 35px;
      list-style: none;

      a {
        color: black;
        text-decoration: none;
      }
    }

    div.nav--right {
      display: flex;
      gap: 10px;
      a {
        text-decoration: none;
        color: black;
      }

      span {
        word-wrap: nowrap;
      }
      .tryforfree {
        box-sizing: border-box;
        padding: 10px 10px;
        background-color: #0b5a79;
        font-weight: 700;
        color: #fff;
        border-radius: 10px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .lists > ul > li {
      font-size: 0.8em;
    }
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    background-color: lightcyan;
    padding: 10px 0;

    div.logo {
      width: 70%;
      display: flex;
      justify-content: space-between;
      margin: 0 10%;
      /* grid-template-columns: 1fr 1fr; */

      /* @media screen and (max-width: 800px) {
        justify-content: space-around;
      } */

      div.strokes-container {
        display: flex;
        justify-content: flex-end;

        * {
          padding: 0;
          margin: 0;
        }

        input#navToggle {
          position: absolute;
          left: -200px;
          display: none;
          appearance: none;
        }

        div.strokes {
          box-sizing: border-box;
          display: flex;
          border-radius: 50%;
          aspect-ratio: 1/1;
          overflow: hidden;
          flex-direction: column;
          gap: 3px;
          width: max-content;
          justify-content: space-around;
          margin: 5px;
          aspect-ratio: 1/1;
          transition: all 0.45s ease-in-out;
          z-index: 5;

          @media screen and (max-width: 750px) {
            /* transform: rotate(90deg); */
            /* background-color: gray; */
          }

          div.stroke {
            width: 50px;
            height: 8px;
            background-color: var(--btn-try);

            /* @media screen and (max-width: 500px) {
              width: 40px;
            } */
          }
        }
      }
    }

    div.lists {
      /* position: sticky; */
      /* top: -1000; */
      width: 100%;
      height: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 60px;
      overflow: hidden;
      /* background-color: red; */
      transition: height 4s linear;
      transition-property: height;

      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 35px;
        list-style: none;
        padding: 20px 0;

        a {
          color: black;
          text-decoration: none;
        }
      }

      div.nav--right {
        display: flex;
        align-items: center;
        gap: 50px;

        a {
          text-decoration: none;
          color: black;
        }

        span {
          word-wrap: nowrap;
        }
        .tryforfree {
          box-sizing: border-box;
          padding: 10px 10px;
          background-color: var(--btn-try);
          font-weight: 700;
          color: #fff;
          border-radius: 10px;
        }
      }
    }

    input#navToggle:checked ~ .lists {
      height: 100%;
    }

    /* #open {
      height: 100%;
    } */
  }
`;

export default NavStyles;
