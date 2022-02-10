function TextSimple({ down_text, top_text, color, action }) {
  return (
    <div className="col-6 col-md-4 col-xl-2" onClick={() => action}>
      <span className="block block-link-pop text-center">
        <div className="block-content">
          <p className={`fs-1 ${color} `}>
            <strong>{top_text}</strong>
          </p>
          <p className="fw-medium">{down_text}</p>
        </div>
      </span>
    </div>
  );
}

export default TextSimple;
