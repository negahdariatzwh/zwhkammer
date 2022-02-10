import React from "react";
import { Card } from "react-bootstrap";
function Projects() {
  return (
    <Card>
      <div
        className="card-header ui-sortable-handle"
        style={{ cursor: "move" }}
      >
        <h3 className="card-title">
          <i className="ion ion-clipboard mr-1"></i>
          Projekten
        </h3>

        <div className="card-tools">
          <ul className="pagination pagination-sm">
            <li className="page-item">
              <span className="page-link">«</span>
            </li>
            <li className="page-item">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <span className="page-link">3</span>
            </li>
            <li className="page-item">
              <span className="page-link">»</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="card-body">
        <ul className="todo-list ui-sortable" data-widget="todo-list">
          <li>
            <span className="handle ui-sortable-handle">
              <i className="fas fa-ellipsis-v"></i>
              <i className="fas fa-ellipsis-v"></i>
            </span>

            <div className="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo1" id="todoCheck1" />
              <label for="todoCheck1"></label>
            </div>

            <span className="text">Design a nice theme</span>

            <small className="badge badge-danger">
              <i className="far fa-clock"></i> 2 mins
            </small>

            <div className="tools">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span className="handle ui-sortable-handle">
              <i className="fas fa-ellipsis-v"></i>
              <i className="fas fa-ellipsis-v"></i>
            </span>
            <div className="icheck-primary d-inline ml-2">
              <input
                type="checkbox"
                value=""
                name="todo2"
                id="todoCheck2"
                checked=""
              />
              <label for="todoCheck2"></label>
            </div>
            <span className="text">Make the theme responsive</span>
            <small className="badge badge-info">
              <i className="far fa-clock"></i> 4 hours
            </small>
            <div className="tools">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span className="handle ui-sortable-handle">
              <i className="fas fa-ellipsis-v"></i>
              <i className="fas fa-ellipsis-v"></i>
            </span>
            <div className="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo3" id="todoCheck3" />
              <label for="todoCheck3"></label>
            </div>
            <span className="text">Let theme shine like a star</span>
            <small className="badge badge-warning">
              <i className="far fa-clock"></i> 1 day
            </small>
            <div className="tools">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span className="handle ui-sortable-handle">
              <i className="fas fa-ellipsis-v"></i>
              <i className="fas fa-ellipsis-v"></i>
            </span>
            <div className="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo4" id="todoCheck4" />
              <label for="todoCheck4"></label>
            </div>
            <span className="text">Let theme shine like a star</span>
            <small className="badge badge-success">
              <i className="far fa-clock"></i> 3 days
            </small>
            <div className="tools">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span className="handle ui-sortable-handle">
              <i className="fas fa-ellipsis-v"></i>
              <i className="fas fa-ellipsis-v"></i>
            </span>
            <div className="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo5" id="todoCheck5" />
              <label for="todoCheck5"></label>
            </div>
            <span className="text">Check your messages and notifications</span>
            <small className="badge badge-primary">
              <i className="far fa-clock"></i> 1 week
            </small>
            <div className="tools">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span className="handle ui-sortable-handle">
              <i className="fas fa-ellipsis-v"></i>
              <i className="fas fa-ellipsis-v"></i>
            </span>
            <div className="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo6" id="todoCheck6" />
              <label for="todoCheck6"></label>
            </div>
            <span className="text">Let theme shine like a star</span>
            <small className="badge badge-secondary">
              <i className="far fa-clock"></i> 1 month
            </small>
            <div className="tools">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-o"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-footer clearfix">
        <button type="button" className="btn btn-primary float-right">
          <i className="fas fa-plus"></i> Add item
        </button>
      </div>
    </Card>
  );
}

export default Projects;
