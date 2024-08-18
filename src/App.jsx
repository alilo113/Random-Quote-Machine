import { useState, useEffect } from "react";

function App() {  
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The way to get started is to quit talking and begin doing. - Walt Disney"
  ];

  const [quote, setQuote] = useState("");

  const getQuotes = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  };

  useEffect(() => {
    getQuotes(); // Initial quote on load
  }, []); // Run only once when the component mounts

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center bg-white rounded w-fit p-4 m-3">
        <h1>Random Quote Machine</h1>
        <div className="text-3xl mt-3 text-center">{quote}</div>
        <button 
          className="bg-blue-600 p-2 text-white rounded hover:bg-blue-800 mt-4"
          onClick={getQuotes}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;