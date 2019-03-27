import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/App.css';

class GenerateQuote extends Component {
    render() {
        var color = '#' + Math.random().toString(16).substr(-6);
        return (
            <div id="quote-box" style={{ backgroundColor: color }}>
                <h3 id="text">
                    {this.props.quote}
                </h3>
                <p id="author">
                    - {this.props.author} 
                </p>
                <div id="new-quote" >
                    <button onClick={this.props.getRandomQuote}>
                        Get Quote
                            </button>
                </div>
            </div>
        );
    }
}

GenerateQuote.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string,
    getRandomQuote: PropTypes.func
}

export default GenerateQuote;