import styled from "styled-components";
import laptopGuy from "../../images/guy-with-laptop.svg";

const SetAGoal = () => {
  return (
    <SetAGoalStyles>
      {/* SECTION - "SET A GOAL" starts */}
      <section className="sag">
        <div className="sag-container1">
          <h1 className="landingpage-topic">
            <span>
              Set a <span id="goal"> GOAL </span> &nbsp;
            </span>
            <span> and achieve it.</span>
          </h1>
          <p className="sag-text">
            Simple & Straight forward to-do management tool based on what really
            matters the most. Your goals.
          </p>
          <div className="sag-btn">
            <a className="sagbtn sagtry" href="/">
              Try for free{" "}
            </a>
            <a className="sagbtn" href="/">
              Learn More
            </a>
          </div>
        </div>
        <div className="sag-container2">
          <img
            className="landingpage-img"
            src={laptopGuy}
            alt="guy with a laptop"
          />
        </div>
      </section>
      {/* SECTION - "SET A GOAL" ends*/}
    </SetAGoalStyles>
  );
};

export default SetAGoal;

/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */
/* STYLES FOR SECTION - "SET A GOAL" -STARTS-  */

const SetAGoalStyles = styled.div`
  .sag {
    height: 500px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: row; */
    background-color: rgb(207, 220, 232);
    padding: 50px;
  }

  .sag-container1 {
    display: inline-flex;
    flex-direction: column;
  }

  .landingpage-topic {
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 45px;
  }

  #goal {
    font-weight: 1000;
  }

  .sag-btn {
    margin: 20px 10px;
    display: inline-flex;
    align-items: center;
    gap: 50px;
  }

  a.sagbtn {
    text-decoration: none;
    color: rgb(56, 56, 102);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
  }

  a.sagtry {
    color: #fff;
    border-radius: 10px;
    font-weight: 700;
    background-color: var(--btn-try);
    padding: 10px;
  }

  p.sag-text {
    display: block;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
  }

  img.landingpage-img {
    display: inline-flex;
    margin-top: 40px;
    height: 500px;
    max-width: 615px;
  }

  @media (max-width: 1100px) {
    .sag {
      height: 900px;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* text-align: center; */
    }

    .sag-container1 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
    }

    h1.landingpage-topic {
      display: flex;
      font-size: 50px;
      flex-direction: row;
      /* text-align: center; */
      @media (max-width: 800px) {
        flex-direction: column;
      }
    }

    p.sag-text {
      font-size: 17px;
      width: 80%;
      text-align: center;
    }

    .sag-btn {
      gap: 30px;
    }

    .landingpage-img {
      height: 1000px;
      width: 340px;
    }
  }

  @media (max-width: 800px) {
    /* * {
      box-sizing: border-box;
    } */

    .sag {
      height: 900px;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
      padding: 0;
      /* text-align: center; */
    }

    .sag-container1 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
    }

    h1.landingpage-topic {
      font-size: 25px;
      flex-direction: column;
    }

    p.sag-text {
      font-size: 14px;
      width: 80%;
      text-align: center;
    }

    .sag-btn {
      flex-direction: column;
      gap: 20px;
    }

    .landingpage-img {
      height: 1000px;
      width: 340px;
    }
  }
`;
