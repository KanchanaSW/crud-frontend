import React, { Component } from "react";
import EmployeesServices from "../services/EmployeesServices";

class ViewEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }
  componentDidMount() {
    EmployeesServices.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <table class="table table-dark">
          <thead>
            <h4 className="text-center">View Employee Details</h4>
          </thead>
          <tbody>
            <tr>
              <th class="bg-primary" scope="row">
                Employee First Name
              </th>
              <td class="bg-primary">{this.state.employee.firstName}</td>
            </tr>
            <tr>
              <th class="bg-success" scope="row">
                Employee Last Name
              </th>
              <td class="bg-success">{this.state.employee.lastName}</td>
            </tr>
            <tr>
              <th class="bg-danger" scope="row">
                Employee Email Id
              </th>
              <td class="bg-danger">{this.state.employee.emailId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewEmployees;
