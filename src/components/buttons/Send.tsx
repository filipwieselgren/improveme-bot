import { useState } from "react";
import { IBugReport } from "../../models/IBugReport";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";

interface ISend {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  featureRequest: IFeatureRequest;
  bugReport: IBugReport;
  generalImprovement: IGeneralImprovements;
  kindOfErrend: string;
}

const Send = (props: ISend) => {
  const [loading, setLoading] = useState(false);
  const sendFetch = () => {
    console.log("props.kindOfErrend:", props.kindOfErrend);

    try {
      (async () => {
        setLoading(true);
        if (props.kindOfErrend === "fr") {
          await fetch("http://localhost:8080/api/v1/featurerequest", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              mode: "no-cors",
            },
            body: JSON.stringify(props.featureRequest),
          });
        } else if (props.kindOfErrend === "br") {
          await fetch("http://localhost:8080/api/v1/bugreport", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              mode: "no-cors",
            },
            body: JSON.stringify(props.bugReport),
          });
        } else if (props.kindOfErrend === "gi") {
          await fetch("http://localhost:8080/api/v1/generalimprovement", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              mode: "no-cors",
            },
            body: JSON.stringify(props.generalImprovement),
          });
        }

        setLoading(false);
        props.setSuccess(true);
      })();
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <button className="change-step" id="send-btn" onClick={() => sendFetch()}>
      {!loading ? "Send request" : "Sending..."}
    </button>
  );
};

export default Send;
