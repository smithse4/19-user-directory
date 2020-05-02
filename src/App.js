import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Table from "./components/Table";
import employees from "./employees.json";
import "./App.css";

class App extends Component {

  state = {
    employees,
    employeesToDisplay: [],
    searchTerm: "",
  };

  // Reach searchTerm input
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Filter employee names through searchTerm
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("HandleSubmit");
    console.log(this.state.searchTerm);
    const employees = this.state.employees.filter((employee) => {
        return employee.name.includes(this.state.searchTerm);
    });
    this.setState({
      employees
    });
  };
    // Sort columns
  sorter = (category) => {
    const employees = this.state.employees.sort(function (a, b) {
      var textA = a[category];
      var textB = b[category];
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    this.setState({ employees });
  };

  render() {
    return (
      <>
        <Jumbotron />
        <div className="container">
          <div className="row row justify-content-end">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3 searchBar">
                <input
                  type="text"
                  name="searchTerm"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary searchBtn"
                    type="submit"
                    id="button-addon2 "
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <table className="table employeeTable">
          <tr>
            <th onClick={() => this.sorter("id")} className="tableHead">
              <button className="tableButton">Id</button>
            </th>
            <th onClick={() => this.sorter("name")} className="tableHead">
              <button className="tableButton">Name</button>
            </th>
            <th onClick={() => this.sorter("occupation")} className="tableHead">
              <button className="tableButton">Occupation</button>
            </th>
            <th onClick={() => this.sorter("spouse")} className="tableHead">
              <button className="tableButton">Spouse</button>
            </th>
            <th onClick={() => this.sorter("location")} className="tableHead">
              <button className="tableButton">Location</button>
            </th>
          </tr>
          {this.state.employees.map((employee) => (
            <Table
              id={employee.id}
              key={employee.id}
              name={employee.name}
              occupation={employee.occupation}
              spouse={employee.spouse}
              location={employee.location}
            />
          ))}
        </table>
      </>
    );
  }
}

export default App;
