import React from "react";
import styled from "styled-components";

const SatOver1B = () => {
  return (
    <SatOver1BStyles>
      {" "}
      <section className="so1b">
        <div className="so1b-topcontainer">
          <h3 className="so1b-branch">GET MORE DONE</h3>
          <h1 className="so1b-headline">Satisfying over 1 billion users.</h1>
          {/* <span className="so1b-subheadline"> */}
          <div className="getMoreDone-section-text">
            Your to-do lists are automatically sorted into Today, Upcoming and
            custom Filter views to help you focus on achieving your goals.
            {/* </span> */}
          </div>
        </div>
        <div className="so1b-bottomcontainer">
          <div className="so1b-BCcontainer">
            <div className="so1b-user">
              <i className="fas fa-user"></i>
              <h2 className="username">Courty Henry</h2>
              <span className="userjob">Marketing Cordinator</span>
            </div>
            <div className="so1b-text">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, officiis ex ab dolor earum suscipit, amet impedit
                atque officia nobis cupiditate fuga reiciendis nemo? Hic
                sapiente asperiores nemo aspernatur doloremque.
              </p>
            </div>
            <div className="so1b-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className="so1b-BCcontainer javascript">
            <div className="so1b-user">
              <i className="fas fa-user"></i>
              <h2 className="username">Courty Henry</h2>
              <span className="userjob">Marketing Cordinator</span>
            </div>
            <div className="so1b-text">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, officiis ex ab dolor earum suscipit, amet impedit
                atque officia nobis cupiditate fuga reiciendis nemo? Hic
                sapiente asperiores nemo aspernatur doloremque.
              </p>
            </div>
            <div className="so1b-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>
    </SatOver1BStyles>
  );
};

export default SatOver1B;

/* STYLES FOR SECTION - "SATISFYING OVER 1B" -STARTS-  */
/* STYLES FOR SECTION - "SATISFYING OVER 1B" -STARTS-  */
/* STYLES FOR SECTION - "SATISFYING OVER 1B" -STARTS-  */
/* STYLES FOR SECTION - "SATISFYING OVER 1B" -STARTS-  */
/* STYLES FOR SECTION - "SATISFYING OVER 1B" -STARTS-  */
/* STYLES FOR SECTION - "SATISFYING OVER 1B" -STARTS-  */
/* STYLES FOR SECTION - "SATISFYING OVER 1B" -STARTS-  */

const SatOver1BStyles = styled.div`
  section.so1b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: 24px auto;
  }

  div.so1b-topcontainer {
    padding: 10px 115px;
  }

  h3.so1b-branch {
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }

  h1.so1b-headline {
    display: flex;
    justify-content: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 28px;
  }

  span.so1b-subheadline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 19px;
    margin: 34px 10px;
  }

  .so1b-bottomcontainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    padding: 10px 0px;
  }

  div.so1b-BCcontainer {
    position: relative;
    display: inline;
    justify-content: space-around;
    align-content: space-around;
    box-sizing: border-box;
    height: minheight(100px, auto);
    width: 35pc;
    border-radius: 20px;
    box-shadow: 0px 10px 12px -12px rgb(104, 104, 104);
    border: 1px solid gray;
    padding: 40px 20px;
  }

  .so1b-user {
    position: relative;
    display: inline-flex;
    flex-direction: column;
  }

  .so1b-user i {
    position: absolute;
    height: 2rem;
    width: 2rem;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid gray;
    color: gray;
    margin-top: 10px;
  }

  h2.username {
    padding-left: 35px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }

  span.userjob {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 22px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    margin-left: 35px;
  }

  .so1b-stars {
    margin: 20px 0px;
  }

  .so1b-stars i {
    margin: 3px;
    color: rgb(44, 44, 66);
  }

  @media (min-width: 1070px) and (max-width: 1120px) {
    div.so1b-BCcontainer {
      width: 30pc;
    }
  }

  @media (min-width: 945px) and (max-width: 1069px) {
    div.so1b-BCcontainer {
      width: 28pc;
    }

    div.so1b-topcontainer {
      padding: 10px 95px;
    }
  }

  @media (min-width: 667px) and (max-width: 845px) {
    section.so1b {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      margin: 24px auto;
    }

    div.so1b-topcontainer {
      padding: 10px 15px;
    }

    h3.so1b-branch {
      position: relative;
      display: flex;
      justify-content: center;
      color: rgba(160, 143, 143, 0.877);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 10px;
    }

    h1.so1b-headline {
      display: flex;
      justify-content: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 21px;
    }

    span.so1b-subheadline {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
      margin: 14px 0px;
    }

    .so1b-bottomcontainer {
      display: inline-flex;
      align-items: center;
      padding: 10px 10px;
    }

    div.so1b-BCcontainer {
      position: relative;
      display: inline;
      justify-content: space-between;
      align-content: space-between;
      box-sizing: border-box;
      width: 20pc;
      padding: 20px 20px;
    }

    .so1b-user {
      display: inline-flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
    }

    h2.username {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 6px;
      font-size: 20x;
    }

    span.userjob {
      display: block;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 22px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
    }

    div.so1b-text p.text {
      display: inline;
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
    }
  }

  @media (max-width: 666px) {
    section.so1b {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      margin: 24px auto;
    }

    div.so1b-topcontainer {
      padding: 10px 15px;
    }

    h3.so1b-branch {
      font-size: 1.1rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      text-transform: uppercase;
    }

    h1.so1b-headline {
      display: flex;
      justify-content: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 18px;
    }

    span.so1b-subheadline {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
      margin: 14px 0px;
    }

    .so1b-bottomcontainer {
      display: inline-flex;
      align-items: center;
      padding: 10px 10px;
    }

    div.so1b-BCcontainer {
      position: relative;
      display: inline;
      justify-content: space-between;
      align-content: space-between;
      box-sizing: border-box;
      width: 20pc;
      padding: 20px 20px;
    }

    div.so1b-BCcontainer.javascript {
      display: none;
    }

    .so1b-user {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
    }

    h2.username {
      display: inline-block;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 6px;
      font-size: 20x;
    }

    span.userjob {
      display: inline;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 22px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
    }

    div.so1b-text p.text {
      display: inline;
      font-family: "Montserrat", sans-serif;
      font-size: 12px;
    }
  }

  @media (min-width: 667px) and (max-width: 900px) {
    section.so1b {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      margin: 24px auto;
    }

    div.so1b-topcontainer {
      padding: 10px 15px;
    }

    h3.so1b-branch {
      position: relative;
      display: flex;
      justify-content: center;
      color: rgba(160, 143, 143, 0.877);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 10px;
    }

    h1.so1b-headline {
      display: flex;
      justify-content: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 21px;
    }

    span.so1b-subheadline {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
      margin: 14px 0px;
    }

    .so1b-bottomcontainer {
      display: inline-flex;
      align-items: center;
      padding: 10px 10px;
    }

    div.so1b-BCcontainer {
      position: relative;
      display: inline;
      justify-content: space-between;
      align-content: space-between;
      box-sizing: border-box;
      width: 20pc;
      padding: 20px 20px;
    }

    .so1b-user {
      display: inline-flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
    }

    h2.username {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 6px;
      font-size: 20x;
    }

    span.userjob {
      display: block;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 22px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
    }

    div.so1b-text p.text {
      display: inline;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 19px;
    }
  }

  @media (max-width: 700px) {
    section.so1b {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      margin: 24px auto;
    }

    div.so1b-topcontainer {
      padding: 10px 15px;
    }

    h3.so1b-branch {
      position: relative;
      display: flex;
      justify-content: center;
      color: rgba(160, 143, 143, 0.877);
      font-family: "Times New Roman", Times, serif;
      font-size: 14px;
    }

    h1.so1b-headline {
      display: flex;
      justify-content: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 18px;
    }

    span.so1b-subheadline {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
      margin: 14px 0px;
    }

    .so1b-bottomcontainer {
      display: inline-flex;
      align-items: center;
      padding: 10px 10px;
    }

    div.so1b-BCcontainer {
      position: relative;
      display: inline;
      justify-content: space-between;
      align-content: space-between;
      box-sizing: border-box;
      width: 20pc;
      padding: 20px 20px;
    }

    div.so1b-BCcontainer.javascript {
      display: none;
    }

    .so1b-user {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
    }

    h2.username {
      display: inline-block;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 6px;
      font-size: 20x;
    }

    span.userjob {
      display: inline;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 22px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
    }

    div.so1b-text p.text {
      display: inline;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 19px;
    }
  }
`;
