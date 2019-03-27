import React, { Component } from 'react';
import './MarkdownPreviewer.css';
import marked from 'marked';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getText: ''
    }
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }

  getMarkdownText(e) {
    var rawMarkup = marked(e.target.value, { sanitize: true });
    this.setState({
      getText: { __html: rawMarkup }
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Editor</h3>
        <textarea id="editor" onChange={e => this.getMarkdownText(e)}>
        </textarea>
        <h3>Previewer</h3>
        <div id="previewContainer">
          {this.state.getText ? <div id="preview" dangerouslySetInnerHTML={this.state.getText} /> : ''}
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
