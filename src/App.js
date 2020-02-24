import React from 'react';
import './App.css';
import { ListItem, TextField, Button, List } from '@material-ui/core';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      items: []
    };
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ item: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const items = [...this.state.items, this.state.item];
    console.log(items);

    this.setState({
      item: '',
      items
    });
  }

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.onSubmit}>
          <TextField value={this.state.item} onChange={this.onChange}></TextField>
          <Button onClick={this.onSubmit}>Submit</Button>
        </form>

        <List>
          {
            this.state.items.map((item, index) => <ListItem key={index}>{index + 1}. {item}</ListItem>)
          }
        </List>
      </div>
    );
  }
}

export default App;
