import React, { Component } from "react";
import { connect } from "react-redux";
import { changeAccountType } from "../redux/actions";

export class Account extends Component {
  // state = {
  //   accountType: ""
  // };
  // onChangeHandler = e => {
  //   this.setState({ accountType: e.target.value });
  //   this.props.onSelected(e.target.value);
  // };
  onChangeAccountType = e => {
    this.props.changeAccountType(e.target.value);
  };
  render() {
    return (
      <div id="account" className="panel panel-default">
        <div className="panel-body">
          <label className="radio-inline" htmlFor="checking">
            <input
              type="radio"
              id="checking"
              value="checking"
              checked={this.props.accountType === "checking"}
              onChange={this.onChangeAccountType}
              disabled={this.props.selectionDisabled}
            />
            Checking{" "}
          </label>

          <label className="radio-inline" htmlFor="savings">
            <input
              type="radio"
              id="savings"
              value="savings"
              checked={this.props.accountType === "savings"}
              onChange={this.onChangeAccountType}
              disabled={this.props.selectionDisabled}
            />
            Savings{" "}
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accountType: state.accountType,
  selectionDisabled: state.selectionDisabled
});

const mapDispatchToProps = dispatch => ({
  changeAccountType: value => {
    dispatch(changeAccountType(value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
