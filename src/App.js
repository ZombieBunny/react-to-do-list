import React from 'react';
import './App.css';
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
          <input value={this.state.item} onChange={this.onChange} />
          <button onClick={this.onSubmit}>Submit</button>
        </form>

        <ul>
          {
            this.state.items.map((item, index) => <li key={index}>{index + 1}. {item}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
