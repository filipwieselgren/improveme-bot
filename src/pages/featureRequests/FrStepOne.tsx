import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";

interface IStepOne {
  setFrStepTwo: React.Dispatch<React.SetStateAction<boolean>>;
}

const FrStepOne = (props: IStepOne) => {
  const [txtAreaValue, setTxtAreaValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTxtAreaValue(e.target.value);
  };
  return (
    <>
      <div className="txt-200">
        I love people with ideas! The quality of your request is very important
        for the developer team.
      </div>

      <div className="txt-200">
        Therefore a feature request is done in three steps.
      </div>
      <h4 className="txt-400 step-title">Step 1:</h4>
      <div className="txt-300 ">
        Briefly describe the function and what it does.
      </div>
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
        setFrStep={props.setFrStepTwo}
        stepNumber={2}
        txtAreaValue={txtAreaValue}
      />
    </>
  );
};

export default FrStepOne;
