import { BsArrowRight } from "react-icons/bs";
import { IParts } from "../../models/IPart";

interface IChange {
  setFrStep: React.Dispatch<React.SetStateAction<boolean>>;
  stepNumber: number;
  txtAreaValue: string;
  part: IParts;
  handleScroll(): void;
}

const ChangeStep = (props: IChange) => {
  const changeStep = () => {
    if (props.txtAreaValue.length === 0) {
      console.log("No value");
      return;
    } else if (
      props.txtAreaValue.length !== 0 &&
      props.part.section.length === 0
    ) {
      console.log("No part");
      return;
    }
    props.handleScroll();
    props.setFrStep(true);
  };
  return (
    <>
      <button
        className="change-step"
        id={`step${props.stepNumber}`}
        onClick={changeStep}
      >
        Go to step {props.stepNumber} <BsArrowRight />
      </button>
    </>
  );
};

export default ChangeStep;
