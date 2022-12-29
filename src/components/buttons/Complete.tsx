import { IParts } from "../../models/IPart";

interface IComplete {
  setEmail: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
  sendPart: IParts;
}

const Complete = (props: IComplete) => {
  const handleCompleteClick = () => {
    if (props.sendPart.part === "") {
      console.log("No part added");
      return;
    }
    props.setEmail(true);
    props.handleScroll();
  };
  return (
    <>
      <button
        className="change-step"
        id="complete-btn"
        onClick={handleCompleteClick}
      >
        Complete
      </button>
    </>
  );
};

export default Complete;
