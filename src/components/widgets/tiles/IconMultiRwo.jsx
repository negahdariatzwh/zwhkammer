function IconMultiRwo({ text, icon, color, action }) {
  return (
    <div className="col-6 col-md-4 col-xl-2">
      <span
        className="block block-link-shadow text-center"
        onClick={() => action}
      >
        <div className="block-content bg-body-light py-3">
          <p className="fw-medium mb-0">{text}</p>
        </div>
        <div className="block-content">
          <p className="mt-1">
            <i className={`si ${icon} fa-4x ${color}`}></i>
          </p>
        </div>
      </span>
    </div>
  );
}

export default IconMultiRwo;
