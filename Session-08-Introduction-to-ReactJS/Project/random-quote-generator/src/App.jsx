import React, { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import "./App.css";

const quotes = [

  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },

];

function App() {

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (

    <div className="app">
      <h1>Random Quote Generator</h1>
      <QuoteBox quote={currentQuote} onGenerate={generateRandomQuote} />
    </div>

  );
  
}

export default App;
