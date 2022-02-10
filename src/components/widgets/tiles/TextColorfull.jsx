function TextColorfull({ action, top, down, color }) {
  return (
    <div className="col-6 col-md-4 col-xl-2">
      <span
        className={`block block-transparent text-center ${color}`}
        onClick={() => action}
      >
        <div className="block-content">
          <p className="fs-1 text-white">
            <strong>{top}</strong>
          </p>
          <p className="fw-semibold text-white-75">{down}</p>
        </div>
      </span>
    </div>
  );
}

export default TextColorfull;
