import React from "react";

function Form() {
  return (
    <div className="col-md-6">
      <form action="be_blocks_forms.html" method="POST">
        <div className="block block-rounded">
          <div className="block-header block-header-default">
            <h3 className="block-title">Block Form</h3>
            <div className="block-options">
              <button type="button" className="btn-block-option">
                <i className="si si-settings"></i>
              </button>
            </div>
          </div>
          <div className="block-content">
            <div className="row justify-content-center py-sm-3 py-md-5">
              <div className="col-sm-10 col-md-8">
                <div className="mb-4">
                  <label className="form-label" for="block-form7-username">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-alt"
                    id="block-form7-username"
                    name="block-form7-username"
                    placeholder="Enter your username.."
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" for="block-form7-password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-alt"
                    id="block-form7-password"
                    name="block-form7-password"
                    placeholder="Enter your password.."
                  />
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="block-form7-remember-me"
                      name="block-form7-remember-me"
                    />
                    <label
                      className="form-check-label"
                      for="block-form7-remember-me"
                    >
                      Remember Me?
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-content block-content-full block-content-sm bg-body-light">
            <button type="submit" className="btn btn-alt-primary">
              <i className="fa fa-check opacity-50 me-1"></i> Submit
            </button>
            <button type="reset" className="btn btn-alt-secondary">
              <i className="fa fa-sync-alt opacity-50 me-1"></i> Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
