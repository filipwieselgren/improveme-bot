import Send from "../../components/buttons/Send";
import { IBugReport } from "../../models/IBugReport";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";
interface IEmail {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setFeatureRequest: React.Dispatch<React.SetStateAction<IFeatureRequest>>;
  setBugReport: React.Dispatch<React.SetStateAction<IBugReport>>;
  setGeneralImprovement: React.Dispatch<
    React.SetStateAction<IGeneralImprovements>
  >;
  generalImprovement: IGeneralImprovements;
  featureRequest: IFeatureRequest;
  bugReport: IBugReport;
  text: string;
  kindOfErrend: string;
}

const Email = (props: IEmail) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.kindOfErrend === "fr") {
      props.setFeatureRequest({
        description: props.featureRequest.description,
        solvesWhat: props.featureRequest.solvesWhat,
        part: props.featureRequest.part,
        email: e.target.value,
      });
    } else if (props.kindOfErrend === "br") {
      props.setBugReport({
        description: props.bugReport.description,
        background: props.bugReport.background,
        part: props.bugReport.part,
        reproduce: props.bugReport.reproduce,
        files: props.bugReport.files,
        email: e.target.value,
      });
    } else if (props.kindOfErrend === "gi") {
      props.setGeneralImprovement({
        description: props.generalImprovement.description,
        reason: props.generalImprovement.reason,
        part: props.generalImprovement.part,
        email: e.target.value,
      });
    }
  };
  return (
    <>
      <div className="txt-300 thank-you-txt">
        Thank you for all the information!
      </div>
      <div className="txt-200">{props.text}</div>
      <div className="txt-300">
        Leave your work e-mail so they can get back to you.
        {/* <span className="txt-400">You can leave it blank as well.</span> */}
      </div>
      <form>
        <input
          className="email-input"
          placeholder="Email..."
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
      <Send
        setSuccess={props.setSuccess}
        featureRequest={props.featureRequest}
        bugReport={props.bugReport}
        generalImprovement={props.generalImprovement}
        kindOfErrend={props.kindOfErrend}
      />
    </>
  );
};

export default Email;
