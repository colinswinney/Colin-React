import React from 'react';

class NameForm extends React.Component {
  constructor(props){
    super();
    this.state = {
      name: ''
    };
  }
  handleChange(e){
    this.setState({
      name: e.target.value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    var newName = document.getElementById("name-input").value;
    document.getElementById("name-result").innerHTML = "React is pretty cool, huh " +  newName + "?";  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input id="name-input" type="text" placeholder="Enter your name!" value={this.state.name}
            onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Submit" />
        </form>
        
        <h3 id="name-result">When you're ready, hit submit to change this text!</h3>
        <h3>{this.state.name}</h3>
      </div>
    )
  }
}

export default NameForm