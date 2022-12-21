import logo from "../../assets/ImproveMe.png";
import bug from "../../assets/bug.png";
import feature from "../../assets/newFeature.png";
import increase from "../../assets/increase.png";
import { useState } from "react";

const Main = () => {
  const [welcomeChat, setWelcomeChat] = useState(true);

  return (
    <>
      <div className="main-wrapper">
        {welcomeChat ? (
          <div className="chat-wrapper">
            <h3 className="welcome-title">Welcome! I'm the improveMe bot.</h3>
            <div className="welcome-txt">
              I’m here since I assume you will be here quite often, or from time
              to time?
            </div>
            <div className="explain-txt">By clicking on me you can:</div>

            <ul className="errend-ul">
              <li className="errend-li">
                <img src={bug} alt="image of a bug" className="errend-img" />
                <span> Report bugs</span>
              </li>
              <li className="errend-li">
                <img
                  src={feature}
                  alt="image of a bug"
                  className="errend-img"
                />
                <span> Send feature requests</span>
              </li>
              <li className="errend-li">
                <img
                  src={increase}
                  alt="image of a bug"
                  className="errend-img"
                />
                <span> Send ideas of generel improvments</span>
              </li>
            </ul>

            <button className="close-btn" onClick={() => setWelcomeChat(false)}>
              Close me
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="logo-wrapper" onClick={() => setWelcomeChat(true)}>
          <img src={logo} alt="Logo image" />
        </div>
      </div>
    </>
  );
};

export default Main;
