import React, { Component } from 'react';


import {Link} from 'react-router-dom'


import perdata from '../perdata.js'

import designerdata from  '../designersdata'

class Login extends Component {
    
  constructor(props){
    super(props);
    
    this.state = {
      id : ''
    }
    this.updateInput = this.updateInput.bind(this);
    }
    
    
    updateInput(event)
    {
      this.setState({id : event.target.value})
    }

    render() { 
        return (  
        
           
      <div className= "grid-container">

        
           <header className= "header">

            <div className= "brand">
              <Link to="/">Graphica</Link>
            </div>


           </header>
        

      
      <div className="container container-form">
      <h1>LOGIN</h1>
      <form className="form" >
        <div className="form-group">
          <input type="email" name="email" className="input" placeholder="..."/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-group">
          <input type="password" name="password" className="input"  placeholder="..."/>
          <label htmlFor="password">Password</label>
        </div>

        <button type="submit" className="btn btn-submit">Login</button>
        {/* <input type="text" onChange={this.updateInput} className="input"></input>
        <label>Enter ID</label>
          <Link to= {'/user/' + ((perdata.persons.find(x=> x.id === this.state.id) !== undefined)?(this.state.id):(''))}>Submit(Users)</Link> */}
      </form>
      <Link className="link link-blue underline" to="/signup">Don't have an account? Sign Up!</Link>
    </div>

      </div>
      );
    }
}
 
export default Login;