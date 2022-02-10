function IconColorfull({ action, icon, color }) {
  return (
    <div className="col-6 col-md-4 col-xl-2">
      <span
        className={`block block-transparent text-center ${color}`}
        onClick={() => action}
      >
        <div className="block-content">
          <p className="mt-1">
            <i className={`si ${icon}  fa-4x text-white-75`}></i>
          </p>
          <p className="fw-semibold text-white">Badges</p>
        </div>
      </span>
    </div>
  );
}

export default IconColorfull;
