import { React } from "react";
import { useHistory } from "react-router";
function Block({
  image,
  backImage,
  content,
  description,
  clickAction,
  color = "",
  title,
  goTo,
}) {
  const history = useHistory();
  const handleClick = () => {
    console.log(goTo);
    history.push(goTo);
  };
  return (
    <div className="col-sm-6 col-md-3 ">
      <div
        style={{ backgroundImage: `url(${backImage})` }}
        className={`block block-rounded block-link-pop  text-center  ${color}  `}
      >
        <div className="block-content block-content-full block-content-sm bg-gd-sun">
          <div className="fw-semibold text-white">{title}</div>
        </div>
        <div className="block-content block-content-full">
          <img
            //src={require(`${image}`)}
            src={image}
            alt=""
            style={{ width: "60%", border: "1px" }}
          />
        </div>
        <div className="block-content block-content-full bg-primary-light">
          <div className="fw-semi-bold text-white mb-1">{content}</div>
          {goTo ? (
            <div
              className="fs-sm text-white-75 pointer"
              onClick={() => handleClick()}
            >
              öffnen <i class="fas fa-chevron-circle-right"></i>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Block;
