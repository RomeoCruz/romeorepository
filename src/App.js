import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { varias } from './varias.json';

import VariasForm from './navegacion/VariasForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      varias
    }
    this.handleAddVarias = this.handleAddVarias.bind(this);
  }

  removeTodo(index) {
    this.setState({
      varias: this.state.varias.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddVarias(varia) {
    this.setState({
      varias: [...this.state.varias, varia]
    })
  }

 render() {
   const varias = this.state.varias.map((varia, i) => {
     return (
      <div className="col-md-4" key={i}>
       <div className="card mt-4">
         <div className="card-title text-center">
          <h3>{varia.titulo}</h3>
          <span className="badge badge-pill badge-danger ml-2">
            {varia.prioridad}
          </span>
         </div>
         <div className="card-body">
          {varia.descripcion}
         </div>
         <div className="card-footer">
             <button
               className="btn btn-danger"
               onClick={this.removeTodo.bind(this, i)}>
               Delete
             </button>
           </div>
         </div>
       </div>
     )
   });

  return (
    <div className="App">

      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Tareas
          <span className="badge badge-pill badge-light ml-2">
           { this.state.varias.length }
          </span>
         </a>
      </nav>

      <div className="container">
       <div className="row mt-4">

       <div className="col-md-4 text-center">
           <img src={logo} className="App-logo" alt="logo" />
         <VariasForm onAddVaria={this.handleAddVarias}></VariasForm>
       </div>

       <div className="col-md-8">
         <div className="row">
          { varias }
        </div>
       </div>
      </div>
     </div>
    </div>
  );
 }
}

export default App;
