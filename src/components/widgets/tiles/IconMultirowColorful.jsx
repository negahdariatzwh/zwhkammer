function IconMultirowColorful({ action, top, icon, color }) {
  return (
    <div className="col-6 col-md-4 col-xl-2">
      <span
        className={`block block-transparent text-center ${color}`}
        onClick={() => action}
      >
        <div className="block-content bg-black-5 py-3">
          <p className="fw-semibold text-white mb-0">{top}</p>
        </div>
        <div className="block-content">
          <p>
            <i className={`si ${icon} fa-4x text-white-75`}></i>
          </p>
        </div>
      </span>
    </div>
  );
}

export default IconMultirowColorful;
