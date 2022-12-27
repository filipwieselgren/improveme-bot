import { useState } from "react";
import IFeatureRequest from "../../models/IFeatureRequest";

interface ISend {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  featureRequest: IFeatureRequest;
}

const Send = (props: ISend) => {
  const [loading, setLoading] = useState(false);
  const sendFetch = () => {
    try {
      (async () => {
        setLoading(true);
        await fetch("http://localhost:8080/api/v1/featurerequest", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            mode: "no-cors",
          },
          body: JSON.stringify(props.featureRequest),
        });

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
