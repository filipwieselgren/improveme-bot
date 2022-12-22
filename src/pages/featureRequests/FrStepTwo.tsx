import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";

interface IStepTwo {
  setFrStepThree: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
}
const FrStepTwo = (props: IStepTwo) => {
  const [txtAreaValue, setTxtAreaValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTxtAreaValue(e.target.value);
  };
  return (
    <>
      <h4 className="txt-400 step-title">Step 2:</h4>
      <div className="txt-300">What problem does the function solve?</div>
      <form action="">
        <textarea
          className="txt-area"
          name=""
          id=""
          cols={30}
          rows={10}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </form>
      <ChangeStep
        setFrStep={props.setFrStepThree}
        stepNumber={3}
        txtAreaValue={txtAreaValue}
        part={{
          id: "",
          part: " ",
        }}
        handleScroll={props.handleScroll}
      />
    </>
  );
};

export default FrStepTwo;