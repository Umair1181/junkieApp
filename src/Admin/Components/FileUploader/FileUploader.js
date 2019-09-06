import React, { Component } from "react";
import SideNav from "../AdminSideNav/SideNav";
// import jQuery from "jQuery";
import "./fileUpload.css";
import "./myWork.css";

class CompletedWork extends Component {
  state = {};
  //   componentDidMount() {
  //     +(function($) {
  //       "use strict";

  //       var dropZone = document.getElementById("drop-zone");
  //       var uploadForm = document.getElementById("js-upload-form");

  //       var startUpload = function(files) {
  //         console.log(files);
  //       };

  //       uploadForm.addEventListener("submit", function(e) {
  //         var uploadFiles = document.getElementById("js-upload-files").files;
  //         e.preventDefault();

  //         startUpload(uploadFiles);
  //       });

  //       dropZone.ondrop = function(e) {
  //         e.preventDefault();
  //         this.className = "upload-drop-zone";

  //         startUpload(e.dataTransfer.files);
  //       };

  //       dropZone.ondragover = function() {
  //         this.className = "upload-drop-zone drop";
  //         return false;
  //       };

  //       dropZone.ondragleave = function() {
  //         this.className = "upload-drop-zone";
  //         return false;
  //       };
  //     })(jQuery);
  //  }
  render() {
    return (
      <React.Fragment>
        {/* <SideNav />
        <div class="container">
          <h1>Completed Work</h1>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-content">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>24-03-2019</td>
                      <td>25-03-2019</td>
                      <td>$133</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>25-03-2019</td>
                      <td>26-03-2019</td>
                      <td>$214</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>26-03-2019</td>
                      <td>27-03-2019</td>
                      <td>$54</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <strong>Upload Files</strong>{" "}
              <small>Bootstrap files upload</small>
            </div>
            <div class="panel-body">
              <h4>Select files from your computer</h4>
              <form
                action=""
                method="post"
                enctype="multipart/form-data"
                id="js-upload-form"
              >
                <div class="form-inline">
                  <div class="form-group">
                    <input
                      type="file"
                      name="files[]"
                      id="js-upload-files"
                      multiple
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-sm btn-primary"
                    id="js-upload-submit"
                  >
                    Upload files
                  </button>
                </div>
              </form>

              <h4>Or drag and drop files below</h4>
              <div class="upload-drop-zone" id="drop-zone">
                Just drag and drop files here
              </div>

              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 60%;"
                >
                  <span class="sr-only">60% Complete</span>
                </div>
              </div>

              <div class="js-upload-finished">
                <h3>Processed files</h3>
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-success">
                    <span class="badge alert-success pull-right">Success</span>
                    image-01.jpg
                  </a>
                  <a href="#" class="list-group-item list-group-item-success">
                    <span class="badge alert-success pull-right">Success</span>
                    image-02.jpg
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default CompletedWork;
