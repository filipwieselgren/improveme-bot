import ChatWrapper from "../../components/wrappers/ChatWrapper";
import bug from "../../assets/bug.png";
import feature from "../../assets/newFeature.png";
import increase from "../../assets/increase.png";
import { useState } from "react";
import FrStepOne from "../featureRequests/FrStepOne";
import FrStepTwo from "../featureRequests/FrStepTwo";
import FrStepThree from "../featureRequests/FrStepThree";

const ChooseErrend = () => {
  const [fr, setFr] = useState(true);
  const [br, setBr] = useState(true);
  const [gi, setGi] = useState(true);
  const [frStepTwo, setFrStepTwo] = useState(false);
  const [frStepThree, setFrStepThree] = useState(false);
  const [frStepFour, setFrStepFour] = useState(false);

  const handleClick = (errend: string) => {
    if (errend === "fr") {
      setBr(false);
      setGi(false);
    } else if (errend === "br") {
      setFr(false);
      setGi(false);
    } else if (errend === "gi") {
      setBr(false);
      setFr(false);
    }
  };

  return (
    <ChatWrapper>
      <h3 className="title">Time to send some feedback!</h3>
      <div className="txt-300">What would you like to send?</div>
      <div className="btn-wrapper">
        {fr ? (
          <>
            <button className="errend-btn" onClick={() => handleClick("fr")}>
              <span> Feature request</span>
              <img
                src={feature}
                alt="image new feature"
                className="errend-img"
              />
            </button>
            {!br && !gi ? <FrStepOne setFrStepTwo={setFrStepTwo} /> : <></>}
            {frStepTwo ? <FrStepTwo setFrStepThree={setFrStepThree} /> : <></>}
            {frStepThree ? (
              <FrStepThree setFrStepFour={setFrStepFour} />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}

        {br ? (
          <button className="errend-btn" onClick={() => handleClick("br")}>
            <span> Bug report </span>
            <img src={bug} alt="image of a bug" className="errend-img" />
          </button>
        ) : (
          <></>
        )}
        {gi ? (
          <button className="errend-btn" onClick={() => handleClick("gi")}>
            <span> Generel improvment</span>
            <img
              src={increase}
              alt="image of a generel improvment"
              className="errend-img"
            />
          </button>
        ) : (
          <></>
        )}
      </div>
    </ChatWrapper>
  );
};

export default ChooseErrend;
