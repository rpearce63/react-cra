import React, { Component } from "react";
import { connect } from "react-redux";
import { changeName } from "../redux/actions";

export class Customer extends Component {
  // state = {
  //   name: ""
  // };
  // onChangeHandler = e => {
  //   this.setState({ name: e.target.value });
  //   this.props.onChangeName(e.target.value);
  // };
  render() {
    //console.log("name: ", this.state.name);
    return (
      <div id="customer" className="panel panel-default">
        <div className="panel-body">
          <div className="form-group">
            <label htmlFor="name">Name&nbsp; </label>
            <input
              type="text"
              id="name"
              value={this.props.name}
              onChange={e => this.props.changeName(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

const mapDispatchToProps = dispatch => ({
  changeName: value => {
    dispatch(changeName(value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customer);
