import React, { Component } from "react";
import Customer from "./Customer";
import Account from "./Account";
import { connect } from "react-redux";
import { submitForm } from "../redux/actions";
import Spinner from "./Spinner";

export class Content extends Component {
  // state = {
  //   //name: "",
  //   //accountType: "",
  //   //nameComplete: false,
  //   //accountSelected: false,
  //   //submitDisabled: true
  // };
  // formSubmitted = () => {
  //   alert(
  //     `Submitted for ${this.props.name} with account type ${
  //       this.props.accountType
  //     }`
  //   );
  // };
  render() {
    const { name, accountType, submitDisabled, formSubmitted } = this.props;
    return (
      <div id="content">
        <h1>Hello, React!</h1>
        {formSubmitted && (
          <div className="alert alert-success">{`Submitted for ${name} with account type ${accountType}`}</div>
        )}
        <Customer
        // onChangeName={value =>
        //   this.setState({
        //     name: value,
        //     nameComplete: !!value,
        //     submitDisabled: !value || !this.state.accountSelected
        //   })
        // }
        />

        <Account
        // disabled={this.props.selectionDisabled}
        // onSelected={value =>
        //   this.setState({
        //     accountSelected: true,
        //     submitDisabled: false,
        //     accountType: value
        //   })
        // }
        />

        <button
          className="btn btn-primary"
          disabled={submitDisabled}
          onClick={() => this.props.submitForm()}
        >
          Submit
        </button>
        {this.props.isLoading && <Spinner />}
        {this.props.users.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  accountType: state.accountType,
  submitDisabled: state.submitDisabled,
  formSubmitted: state.formSubmitted,
  isLoading: state.isLoading,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  submitForm: () => {
    dispatch(submitForm());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
