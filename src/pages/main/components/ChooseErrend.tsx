import ChatWrapper from "../../../components/wrappers/ChatWrapper";
import bug from "../../assets/bug.png";
import feature from "../../assets/newFeature.png";
import increase from "../../assets/increase.png";
import { useEffect, useState } from "react";
import Email from "../../featureRequests";
import Success from "../../../components/text/Success";
import IFeatureRequest from "../../../models/IFeatureRequest";
import StepOne from "../../../components/steps/StepOne";
import StepTwo from "../../../components/steps/StepTwo";
import StepThree from "../../../components/steps/StepThree";
import StepFour from "../../../components/steps/StepFour";
import StepFive from "../../../components/steps/StepFive";
import { IBugReport } from "../../../models/IBugReport";
import IGeneralImprovements from "../../../models/IGeneralImprovements";
import { IParts } from "../../../models/IPart";

const ChooseErrend = () => {
  const [fr, setFr] = useState(true);
  const [br, setBr] = useState(true);
  const [gi, setGi] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);
  const [stepFive, setStepFive] = useState(false);
  const [email, setEmail] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [success, setSuccess] = useState(false);
  const [kindOfErrend, setKindOfErrend] = useState("");

  const [featureRequest, setFeatureRequest] = useState<IFeatureRequest>({
    description: "",
    solvesWhat: "",
    part: "",
    email: "",
    approved: false,
    status: "",
    assignedTo: "",
  });
  const [bugReport, setBugReport] = useState<IBugReport>({
    description: "",
    background: "",
    part: "",
    reproduce: "",
    files: [{ file: "" }],
    email: "",
    approved: true,
    status: "",
    assignedTo: "",
  });
  const [generalImprovement, setGeneralImprovement] =
    useState<IGeneralImprovements>({
      description: "",
      solvesWhat: "",
      part: "",
      email: "",
      approved: false,
      status: "",
      assignedTo: "",
    });
  const [parts, setParts] = useState<IParts[]>([
    {
      _id: "",
      section: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/section")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  const handleClick = (errend: string) => {
    if (errend === "fr") {
      setKindOfErrend("fr");
      setBr(false);
      setGi(false);
    } else if (errend === "br") {
      setKindOfErrend("br");
      setFr(false);
      setGi(false);
    } else if (errend === "gi") {
      setKindOfErrend("gi");
      setBr(false);
      setFr(false);
    }
  };

  const handleScroll = () => {
    setScroll(!scroll);
  };

  return (
    <ChatWrapper scroll={scroll}>
      {success === false ? (
        <>
          <h3 className="title">Time to send some feedback!</h3>
          <div className="txt-300">What would you like to send?</div>
          <div className="btn-wrapper">
            {fr ? (
              <>
                <button
                  className="errend-btn"
                  id="f-errend"
                  onClick={() => handleClick("fr")}
                >
                  <span> Feature request</span>
                  <img src={feature} alt="new feature" className="errend-img" />
                </button>
                {!br && !gi ? (
                  <StepOne
                    setStep={setStepTwo}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    paragraphOne={
                      "I love people with ideas! The quality of your request is very important for the development team."
                    }
                    paragraphTwo={
                      "Therefore a feature request is done in three steps."
                    }
                    stepDescription={
                      "Briefly describe the function and what it does."
                    }
                    placeHolder={
                      "e.g. Add an alphabetic sort function to dropdowns."
                    }
                    kindOfErrend={kindOfErrend}
                  />
                ) : (
                  <></>
                )}

                {stepTwo ? (
                  <StepTwo
                    setStep={setStepThree}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    stepDescription={"What problem does the function solve?"}
                    placeHolder={
                      "e.g. It's hard to find in the dropdowns. This would make it a lot easier to find."
                    }
                    kindOfErrend={kindOfErrend}
                  />
                ) : (
                  <></>
                )}

                {stepThree ? (
                  <StepThree
                    setStep={setEmail}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    stepDescription={
                      "In which part of the platform does the feature belongs to?"
                    }
                    kindOfErrend={kindOfErrend}
                    parts={parts}
                  />
                ) : (
                  <></>
                )}

                {email ? (
                  <Email
                    setSuccess={setSuccess}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    kindOfErrend={kindOfErrend}
                    text={
                      "Sometimes the tech team will have additional questions regarding the feature, since they want to understand your request better."
                    }
                  />
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}

            {br ? (
              <>
                <button
                  className="errend-btn"
                  id="b-errend"
                  onClick={() => handleClick("br")}
                >
                  <span> Bug report </span>
                  <img src={bug} alt="of a bug" className="errend-img" />
                </button>
                {!fr && !gi ? (
                  <StepOne
                    setStep={setStepTwo}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    paragraphOne={
                      "Sorry to hear that you have experienced a bug. The quality of your report is very important for the development team."
                    }
                    paragraphTwo={
                      "Therefore a bug report is done in five steps."
                    }
                    stepDescription={
                      "Describe the bug. What happens? What should happen instead?"
                    }
                    placeHolder={"e.g. Dropdown won't show."}
                    kindOfErrend={kindOfErrend}
                  />
                ) : (
                  <></>
                )}

                {stepTwo ? (
                  <StepTwo
                    setStep={setStepThree}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    stepDescription={
                      "Background information. What was the user/you trying to do when this happened? Does this happen to one person or everyone? Add all info that may be relevant."
                    }
                    placeHolder={"e.g. I tried to do A then B happend."}
                    kindOfErrend={kindOfErrend}
                  />
                ) : (
                  <></>
                )}

                {stepThree ? (
                  <StepThree
                    setStep={setStepFour}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    stepDescription={
                      "In which part of the platform does the bug occur?"
                    }
                    kindOfErrend={kindOfErrend}
                    parts={parts}
                  />
                ) : (
                  <></>
                )}

                {stepFour ? (
                  <StepFour
                    setStep={setStepFive}
                    handleScroll={handleScroll}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    bugReport={bugReport}
                    stepDescription={
                      "How do you reproduce the bug? How can the developers reproduce this problem? What are the actual steps to do that?"
                    }
                    placeHolder={"e.g. Go to Part1 and click on the dropdown."}
                    kindOfErrend={kindOfErrend}
                  />
                ) : (
                  <></>
                )}

                {stepFive ? (
                  <StepFive
                    setStep={setEmail}
                    handleScroll={handleScroll}
                    setBugReport={setBugReport}
                    bugReport={bugReport}
                    stepDescription={
                      "If possible please add an Image/screenshot of the bug. You can for example take a screenshot of the errormessage in the console. Keep in mind that you can only add one image."
                    }
                    placeHolder={"e.g. Go to Part1 and click on the dropdown."}
                    kindOfErrend={kindOfErrend}
                  />
                ) : (
                  <></>
                )}

                {email ? (
                  <Email
                    setSuccess={setSuccess}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    kindOfErrend={kindOfErrend}
                    text={
                      "Sometimes the tech team will have additional questions regarding the bug."
                    }
                  />
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
            {gi ? (
              <>
                <button
                  className="errend-btn"
                  id="g-errend"
                  onClick={() => handleClick("gi")}
                >
                  <span> Generel improvment</span>
                  <img
                    src={increase}
                    alt="of a generel improvment"
                    className="errend-img"
                  />
                </button>
                {!br && !fr ? (
                  <StepOne
                    setStep={setStepTwo}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    paragraphOne={
                      "I love people with ideas! The quality of your errend is very important for the development team."
                    }
                    paragraphTwo={
                      "Therefore this type of errand is done in three steps."
                    }
                    stepDescription={"What should be improved and how?"}
                    placeHolder={
                      "e.g. The dropdown. Add an alphabetic sort function to dropdowns."
                    }
                    kindOfErrend={kindOfErrend}
                  />
                ) : (
                  <></>
                )}

                {stepTwo ? (
                  <StepTwo
                    setStep={setStepThree}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    stepDescription={"Why should it be improved?"}
                    placeHolder={
                      "e.g. It's hard to find in the dropdowns. This would make it a lot easier to find."
                    }
                    kindOfErrend={kindOfErrend}
                  />
                ) : (
                  <></>
                )}

                {stepThree ? (
                  <StepThree
                    setStep={setEmail}
                    handleScroll={handleScroll}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    stepDescription={
                      "Which part of the platform does it apply to?"
                    }
                    kindOfErrend={kindOfErrend}
                    parts={parts}
                  />
                ) : (
                  <></>
                )}

                {email ? (
                  <Email
                    setSuccess={setSuccess}
                    setFeatureRequest={setFeatureRequest}
                    setBugReport={setBugReport}
                    setGeneralImprovement={setGeneralImprovement}
                    generalImprovement={generalImprovement}
                    featureRequest={featureRequest}
                    bugReport={bugReport}
                    kindOfErrend={kindOfErrend}
                    text={
                      "Sometimes the tech team will have additional questions regarding your errend, since they want to understand it better."
                    }
                  />
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <Success kindOfErrend={kindOfErrend} />
      )}
    </ChatWrapper>
  );
};

export default ChooseErrend;
