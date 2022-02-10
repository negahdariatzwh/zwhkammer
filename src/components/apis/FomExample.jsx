import React from "react";

function FomExample() {
  return (
    <form
      action="be_forms_elements.html"
      method="POST"
      enctype="multipart/form-data"
      onsubmit="return false;"
    >
      <div class="row push">
        <div class="col-lg-4">
          <p class="text-muted">The most often used inputs you know and love</p>
        </div>
        <div class="col-lg-8 col-xl-5">
          <div class="mb-4">
            <label class="form-label" for="example-text-input">
              Text
            </label>
            <input
              type="text"
              class="form-control"
              id="example-text-input"
              name="example-text-input"
              placeholder="Text Input"
            />
          </div>
          <div class="mb-4">
            <label class="form-label" for="example-email-input">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="example-email-input"
              name="example-email-input"
              placeholder="Emai Input"
            />
          </div>
          <div class="mb-4">
            <label class="form-label" for="example-password-input">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="example-password-input"
              name="example-password-input"
              placeholder="Password Input"
            />
          </div>
          <div class="mb-4">
            <label class="form-label" for="example-textarea-input">
              Textarea
            </label>
            <textarea
              class="form-control"
              id="example-textarea-input"
              name="example-textarea-input"
              rows="4"
              placeholder="Textarea content.."
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row push">
        <div class="col-lg-4">
          <p class="text-muted">
            Browser’s default select boxes, showcasing both simple and multiple
            selections
          </p>
        </div>
        <div class="col-lg-8 col-xl-5">
          <div class="mb-4">
            <label class="form-label" for="example-select">
              Select
            </label>
            <select
              class="form-select"
              id="example-select"
              name="example-select"
            >
              <option selected>Open this select menu</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
              <option value="4">Option #4</option>
              <option value="5">Option #5</option>
              <option value="6">Option #6</option>
              <option value="7">Option #7</option>
              <option value="8">Option #8</option>
              <option value="9">Option #9</option>
              <option value="10">Option #10</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="form-label" for="example-select-multiple">
              Multiple Select
            </label>
            <select
              class="form-select"
              id="example-select-multiple"
              name="example-select-multiple"
              size="5"
              multiple
            >
              <option selected>Open this select menu</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
              <option value="4">Option #4</option>
              <option value="5">Option #5</option>
              <option value="6">Option #6</option>
              <option value="7">Option #7</option>
              <option value="8">Option #8</option>
              <option value="9">Option #9</option>
              <option value="10">Option #10</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row push">
        <div class="col-lg-4">
          <p class="text-muted">
            Checkboxes, radios and switches in various layouts
          </p>
        </div>
        <div class="col-lg-8 col-xl-5">
          <div class="mb-4">
            <label class="form-label">Checkboxes</label>
            <div class="space-y-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-checkbox-default1"
                  name="example-checkbox-default1"
                  checked
                />
                <label class="form-check-label" for="example-checkbox-default1">
                  Option 1
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-checkbox-default2"
                  name="example-checkbox-default2"
                />
                <label class="form-check-label" for="example-checkbox-default2">
                  Option 2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-checkbox-default3"
                  name="example-checkbox-default3"
                  disabled
                />
                <label class="form-check-label" for="example-checkbox-default3">
                  Option 3
                </label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label">Inline Checkboxes</label>
            <div class="space-x-2">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-checkbox-inline1"
                  name="example-checkbox-inline1"
                  checked
                />
                <label class="form-check-label" for="example-checkbox-inline1">
                  Option 1
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-checkbox-inline2"
                  name="example-checkbox-inline2"
                />
                <label class="form-check-label" for="example-checkbox-inline2">
                  Option 2
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-checkbox-inline3"
                  name="example-checkbox-inline3"
                  disabled
                />
                <label class="form-check-label" for="example-checkbox-inline3">
                  Option 3
                </label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label">Radios</label>
            <div class="space-y-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="example-radios-default1"
                  name="example-radios-default"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="example-radios-default1">
                  Option 1
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="example-radios-default2"
                  name="example-radios-default"
                  value="option2"
                />
                <label class="form-check-label" for="example-radios-default2">
                  Option 2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="example-radios-default3"
                  name="example-radios-default"
                  value="option2"
                  disabled
                />
                <label class="form-check-label" for="example-radios-default3">
                  Option 3
                </label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label">Inline Radios</label>
            <div class="space-x-2">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="example-radios-inline1"
                  name="example-radios-inline"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="example-radios-inline1">
                  Option 1
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="example-radios-inline2"
                  name="example-radios-inline"
                  value="option2"
                />
                <label class="form-check-label" for="example-radios-inline2">
                  Option 2
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="example-radios-inline3"
                  name="example-radios-inline"
                  value="option2"
                  disabled
                />
                <label class="form-check-label" for="example-radios-inline3">
                  Option 3
                </label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label">Switches</label>
            <div class="space-y-2">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-switch-default1"
                  name="example-switch-default1"
                  checked
                />
                <label class="form-check-label" for="example-switch-default1">
                  Option 1
                </label>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-switch-default2"
                  name="example-switch-default2"
                />
                <label class="form-check-label" for="example-switch-default2">
                  Option 2
                </label>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-switch-default3"
                  name="example-switch-default3"
                  disabled
                />
                <label class="form-check-label" for="example-switch-default3">
                  Option 3
                </label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label">Inline Switches</label>
            <div class="space-x-2">
              <div class="form-check form-switch form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-switch-inline1"
                  name="example-switch-inline1"
                  checked
                />
                <label class="form-check-label" for="example-switch-inline1">
                  Option 1
                </label>
              </div>
              <div class="form-check form-switch form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-switch-inline2"
                  name="example-switch-inline2"
                />
                <label class="form-check-label" for="example-switch-inline2">
                  Option 2
                </label>
              </div>
              <div class="form-check form-switch form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="example-switch-inline3"
                  name="example-switch-inline3"
                  disabled
                />
                <label class="form-check-label" for="example-switch-inline3">
                  Option 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row push">
        <div class="col-lg-4">
          <p class="text-muted">
            File inputs, showcasing both single and multiple files
          </p>
        </div>
        <div class="col-lg-8 col-xl-5 overflow-hidden">
          <div class="mb-4">
            <label class="form-label" for="example-file-input">
              File Input
            </label>
            <input class="form-control" type="file" id="example-file-input" />
          </div>
          <div class="mb-4">
            <label class="form-label" for="example-file-input-multiple">
              File Input (Multiple)
            </label>
            <input
              class="form-control"
              type="file"
              id="example-file-input-multiple"
              multiple
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default FomExample;
