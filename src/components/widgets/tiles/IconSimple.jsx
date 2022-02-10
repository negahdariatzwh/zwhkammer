function IconSimple({ text, icon, color, action }) {
  return (
    <div className="col-6 col-md-4 col-xl-2" onClick={() => action}>
      <span className="block block-link-shadow text-center">
        <div className="block-content">
          <p className="mt-1">
            <i className={`${icon}  fa-4x ${color}`}></i>
          </p>
          <p className="fw-medium">{text}</p>
        </div>
      </span>
    </div>
  );
}

export default IconSimple;
