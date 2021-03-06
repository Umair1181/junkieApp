import React, { Component } from "react";

import { AddTranscriptorsAction } from "../../Actions/TranscriptorsActions/AddTranscriptorsAction";
import { DisplayTranscriptorsAction } from "../../Actions/TranscriptorsActions/DisplaytranscriptorsAction";
import AddTranscriptorsClass from "../../BusinessLogics/ActionLogics/TranscriptorsClassses/AddTranscriptorsClass";
import { connect } from "react-redux";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors, ...rest) => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  console.log(valid);
  return valid;
};

class AddTranscriptorsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _TranscriptorName: null,
      _Email: null,
      _Password: null,
      formValidity: false,
      loading: false,
      errors: {
        _TranscriptorName: "",
        _Email: "",
        _Password: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "_TranscriptorName":
        errors._TranscriptorName =
          value.length < 5 ? "User Name must be 5 characters long!" : "";
        State._LName = value;
        break;
      case "_Email":
        errors._Email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        State._Email = value;
        break;
      case "_Password":
        errors._Password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        State._Password = value;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      this.setState({ formValidity: true });
      console.log(this.state.formValidity);
    } else {
      this.setState({ formValidity: false });
      console.log(this.state.formValidity);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div style={{ marginTop: "-100px" }} class="container">
          <div class="row">
            <center>
              <h1
                style={{
                  textAlign: "center",
                  alignContent: "center",
                  padding: "20% 0% 0% 0%"
                }}
              >
                Add Transcriptors
              </h1>
            </center>
            <div class="col-md-12" id="login">
              <section id="inner-wrapper" class="login">
                <article>
                  <form onSubmit={this.handleSubmit} noValidate>
                    <div class="form-group">
                      <div class="input-group">
                        <input
                          type="text"
                          name="_TranscriptorName"
                          value={this.state._TranscriptorName}
                          onChange={this.handleChange}
                          disabled={this.state.loading}
                          class="form-control"
                          placeholder="Transcriptor Name"
                          noValidate
                        />
                      </div>
                      <div class="input-group">
                        {errors._TranscriptorName.length > 0 && (
                          <span style={{ fontSize: "11px", color: "red" }}>
                            {errors._TranscriptorName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <input
                          type="email"
                          noValidate
                          value={this.state._Email}
                          name="_Email"
                          onChange={this.handleChange}
                          disabled={this.state.loading}
                          class="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div class="input-group">
                        {errors._Email.length > 0 && (
                          <span style={{ fontSize: "11px", color: "red" }}>
                            {errors._Email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <input
                          type="password"
                          noValidate
                          value={this.state._Password}
                          name="_Password"
                          onChange={this.handleChange}
                          disabled={this.state.loading}
                          class="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <div class="input-group">
                        {errors._Password.length > 0 && (
                          <span style={{ fontSize: "11px", color: "red" }}>
                            {errors._Password}
                          </span>
                        )}
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      {this.props.errorMessage ===
                      "Transcriptor Added Successfully" ? (
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#00ff00"
                          }}
                        >
                          {this.props.errorMessage}
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "red"
                          }}
                        >
                          {this.props.errorMessage}
                        </span>
                      )}
                    </div>
                    <button
                      disabled={this.state.loading}
                      onClick={() => {
                        if (!this.state.loading) {
                          this.setState(
                            {
                              loading: true
                            },
                            () => {
                              this.timer = setTimeout(() => {},
                              this.state.loading === false);
                              this.props.AddTranscriptorsAction(
                                new AddTranscriptorsClass(
                                  this.state._TranscriptorName,
                                  this.state._Email,
                                  this.state._Password
                                ),
                                this
                              );
                            }
                          );
                        }
                      }}
                      class="btn btn-block"
                    >
                      {this.state.loading && (
                        <i class="spinner-border" role="status" />
                      )}
                      {!this.state.loading && <span>Add Transcriptor</span>}
                    </button>
                  </form>
                </article>
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.TranscriptorsReducer.addTranscriptorsMessage
});

export default connect(
  mapStateToProps,
  { AddTranscriptorsAction, DisplayTranscriptorsAction }
)(AddTranscriptorsForm);
