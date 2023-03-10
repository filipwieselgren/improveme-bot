import bug from "../../../assets/bug.png";
import feature from "../../../assets/newFeature.png";
import increase from "../../../assets/increase.png";
import ChatWrapper from "../../../components/wrappers/ChatWrapper";

interface IWelcome {
  setWelcomeChat: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomeChat = (props: IWelcome) => {
  return (
    <ChatWrapper scroll={false}>
      <h3 className="title">Welcome! I'm the improveMe bot.</h3>
      <div className="txt-200">
        I’m here to create a better feedback loop between you and the
        development team.
      </div>
      <div className="txt-300">By clicking on me you can:</div>

      <ul className="errend-ul">
        <li className="errend-li">
          <img src={bug} alt="of a bug" className="errend-img" />
          <span> Report bugs</span>
        </li>
        <li className="errend-li">
          <img src={feature} alt="of a new feature" className="errend-img" />
          <span> Send feature requests</span>
        </li>
        <li className="errend-li">
          <img src={increase} alt="of a bug" className="errend-img" />
          <span> Send ideas of generel improvments</span>
        </li>
      </ul>

      <button className="close-btn" onClick={() => props.setWelcomeChat(false)}>
        Close me
      </button>
    </ChatWrapper>
  );
};

export default WelcomeChat;
