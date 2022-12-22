import logo from "../../assets/ImproveMe.png";

const Success = () => {
  return (
    <div className="success-wrapper">
      <h3>Your request has been sent</h3>
      <img src={logo} alt="Logo image" />
    </div>
  );
};

export default Success;
