import React, { Component } from "react";
import Directory from "./components/Directory";
import Jumbotron from "./components/Jumbotron";
import Table from "./components/Table";
import employees from "./employees.json";
import Search from "./components/Search"
import "./App.css";

class App extends Component {
  state = {
    employees,
  };

  // const styles = {
  //   employeeTable: {
  //     maxWidth: "95%",
  //   },
  // };

  sorter = (category) => {
    // sort employees.location alphabetically
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
        <Search/>
        <Directory />
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
