import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
//import EmployeeTable from "./components/EmployeeTable";
import Card from "./components/Card";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      employees: [],
    }
  }

  componentDidMount() {

    axios.get("https://randomuser.me/api/?results=20&nat=us&gender=female")
      .then((responce) => {
        this.setState({ employees: responce.data.results });
      })
  }

  render() {
    console.log(this.state)
    return (

      <div className="App" >
        {/* <EmployeeTable employeeData={this.state.employees} /> */}
        {this.state.employees.map(employee => <Card data={employee} />)}
        {/* <Card employeeData={this.state.employees} /> */}
      </div>
    );
  }

}

export default App;
