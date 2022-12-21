import logo from "../../assets/ImproveMe.png";
import { useState } from "react";
import WelcomeChat from "./WelcomeChat";
import ChooseErrend from "./ChooseErrend";

const Main = () => {
  const [welcomeChat, setWelcomeChat] = useState(true);
  const [errend, setErrend] = useState(false);

  const chooseErrend = () => {
    setWelcomeChat(false);
    setErrend(!errend);
  };

  return (
    <>
      <div className="main-wrapper">
        {welcomeChat ? <WelcomeChat setWelcomeChat={setWelcomeChat} /> : <></>}
        {errend ? <ChooseErrend /> : <></>}

        <div className="logo-wrapper" onClick={chooseErrend}>
          <img src={logo} alt="Logo image" />
        </div>
      </div>
    </>
  );
};

export default Main;
