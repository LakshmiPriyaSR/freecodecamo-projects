import React, { Component } from 'react';
import '../style/App.css';
import quotes from '../quotesList.json';
import GenerateQuote from './GenerateQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      quoteAuthor: ''
    }
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  componentWillMount() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      quote: randomQuote.quote,
      quoteAuthor: randomQuote.author
    });
  }

  render() {
    return (
      <div className="App">
        <GenerateQuote quote={this.state.quote} author={this.state.quoteAuthor} getRandomQuote={this.getRandomQuote}/>
      </div>
    );
  }
}

export default App;