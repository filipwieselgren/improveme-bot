import logo from "../../assets/ImproveMe.png";

const Success = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div className="success-wrapper">
      <h3>Your request has been sent</h3>
      <img src={logo} alt="Logo image" />
    </div>
  );
};

export default Success;
