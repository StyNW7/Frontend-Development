import React from "react";
import "./QuoteBox.css";

function QuoteBox({ quote, onGenerate }) {

  return (
    
    <div className="quote-box">

      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">- {quote.author}</p>
      <button className="generate-btn" onClick={onGenerate}>
        Generate New Quote
      </button>
      
    </div>

  );

}

export default QuoteBox;