import { BsArrowRight } from "react-icons/bs";

interface IChange {
  setFrStep: React.Dispatch<React.SetStateAction<boolean>>;
  stepNumber: number;
  txtAreaValue: string;
}

const ChangeStep = (props: IChange) => {
  const changeStep = () => {
    if (props.txtAreaValue.length === 0) {
      console.log("No value");
      return;
    }
    props.setFrStep(true);
  };
  return (
    <>
      <button className="change-step" onClick={changeStep}>
        Go to step {props.stepNumber} <BsArrowRight />
      </button>
    </>
  );
};

export default ChangeStep;
