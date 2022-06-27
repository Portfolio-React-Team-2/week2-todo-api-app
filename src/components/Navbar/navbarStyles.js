import styled from "styled-components";

const NavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-light);
  padding: 10px 5%;

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

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    background-color: lightcyan;
    padding: 10px 5%;
    position: relative;

    div.logo {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: gray; */

      div.strokes-container {
        display: flex;
        justify-content: flex-end;

        * {
          padding: 0;
          margin: 0;
        }
        div.strokes {
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: max-content;
          justify-content: space-around;
          padding: 5px;
          /* height: max-content; */
          /* background-color: blue; */
          aspect-ratio: 1/1;

          div.stroke {
            width: 60px;
            height: 5px;
            background-color: var(--btn-try);
            /* align-self: flex-end;
        justify-self: flex-end; */
          }
        }
      }
    }

    div.lists {
      /* position: ; */
      /* top: 0;
      left: 0; */
      padding: 20px 0;
      width: 90%;
      height: 100%;
      display: flex;
      /* flex-direction: column; */
      justify-content: space-between;
      align-items: center;
      background-color: yellow;

      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 35px;
        list-style: none;

        a {
          color: black;
          text-decoration: none;
        }
      }

      div.nav--right {
        display: flex;
        flex-direction: column-reverse;
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
  }
`;
export default NavStyles;
