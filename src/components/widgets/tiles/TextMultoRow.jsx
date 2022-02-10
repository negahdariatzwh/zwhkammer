function TextMultoRow({ action, top, down }) {
  return (
    <div className="col-6 col-md-4 col-xl-2">
      <span className="block block-link-pop text-center" onClick={() => action}>
        <div className="block-content bg-body-light py-3">
          <p className="fw-medium mb-0">{top}</p>
        </div>
        <div className="block-content">
          <p className="fs-1">
            <strong>{down}</strong>
          </p>
        </div>
      </span>
    </div>
  );
}

export default TextMultoRow;
