const Email = () => {
  return (
    <>
      <div className="txt-300 thank-you-txt">
        Thank you for all the information!
      </div>
      <div className="txt-200">
        Sometimes the tech team will have additional questions regarding the
        feature, since they want to understand your request better.
      </div>
      <div className="txt-300">
        Leave your work e-mail so they can get back to you.{" "}
        <span className="txt-400">You can leave it blank as well.</span>
      </div>
      <form action="">
        <input className="email-input" placeholder="Email..."></input>
      </form>
    </>
  );
};

export default Email;
