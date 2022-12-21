import ChatWrapper from "../../components/wrappers/ChatWrapper";
import bug from "../../assets/bug.png";
import feature from "../../assets/newFeature.png";
import increase from "../../assets/increase.png";

const ChooseErrend = () => {
  return (
    <ChatWrapper>
      <h3 className="title">Time to send some feedback!</h3>
      <div className="txt-300">What would you like to send?</div>
      <div className="btn-wrapper">
        <button className="errend-btn">
          <span> Feature request</span>
          <img src={feature} alt="image new feature" className="errend-img" />
        </button>
        <button className="errend-btn">
          <span> Bug report </span>
          <img src={bug} alt="image of a bug" className="errend-img" />
        </button>
        <button className="errend-btn">
          <span> Generel improvment</span>
          <img
            src={increase}
            alt="image of a generel improvment"
            className="errend-img"
          />
        </button>
      </div>
    </ChatWrapper>
  );
};

export default ChooseErrend;
