import React from "react";
import EmployeesServices from "../services/EmployeesServices";

class EmployeeListComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    EmployeesServices.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  addEmployee() {
    this.props.history.push("/createEmployee/_add");
  }
  editEmployee(id) {
    this.props.history.push(`/createEmployee/${id}`);
  }
  deleteEmployee(id) {
    EmployeesServices.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }
  viewEmployee(id) {
    this.props.history.push(`/viewEmployee/${id}`);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Employee List</h1>
        <div className="btn btn-primary" onClick={this.addEmployee}>
          Add Employee
        </div>
        <br />
        <br></br>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Employee First Name</th>
              <th> Employee Last Name</th>
              <th> Employee Email Id</th>
              <th> Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button
                    onClick={() => this.editEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.deleteEmployee(employee.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeListComponents;
