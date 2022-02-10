function TextColorfullMultiRow({ action, color, top, down }) {
  return (
    <div className="col-6 col-md-4 col-xl-2">
      <span
        className={`block block-transparent text-center ${color}`}
        onClick={() => action}
      >
        <div className="block-content bg-black-5 py-3">
          <p className="fw-semibold text-white-75 mb-0">{top}</p>
        </div>
        <div className="block-content">
          <p className="fs-1 text-white">
            <strong>{down}</strong>
          </p>
        </div>
      </span>
    </div>
  );
}

export default TextColorfullMultiRow;
