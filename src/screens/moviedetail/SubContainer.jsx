import "./SubContainer.css";

export const SubContainer = ({ className, ...props }) => {
  return (
    <div className={"sub-container " + className}>
      <div className="sub-container2">
        <img className="container" src="container0.svg" />
        <div className="text">5 </div>
      </div>
    </div>
  );
};
