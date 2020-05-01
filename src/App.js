import React, { Component } from "react";
import Directory from "./components/Directory";
import Jumbotron from "./components/Jumbotron";
import Table from "./components/Table";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
  };

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
        <Directory />
        <table>
          <tr>
            <th onClick={() => this.sorter('id')}><a href="#">Id</a></th>
            <th onClick={() => this.sorter('name')}><a href="#">Name</a></th>
            <th onClick={() => this.sorter('occupation')}><a href="#">Occupation</a></th>
            <th onClick={() => this.sorter('spouse')}><a href="#">Spouse</a></th>
            <th onClick={() => this.sorter('location')}>
              <a href="#">Location</a>
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
