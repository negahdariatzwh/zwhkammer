import { React } from "react";

function Card({
  title,
  color = "bg-gd-sea",
  topBtn = "",
  children,
  topBtnClick,
}) {
  const handleClick = () => {
    topBtnClick();
  };
  return (
    <div className="block block-themed block-rounded">
      <div className={`block-header ${color}`}>
        <h3 className="block-title">{title}</h3>
        <div className="block-options">
          {topBtn ? (
            <button
              type="button"
              className="btn-block-option"
              onClick={() => handleClick()}
            >
              <i className={`${topBtn}`}></i>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="block-content">{children}</div>
    </div>
  );
}
export default Card;
