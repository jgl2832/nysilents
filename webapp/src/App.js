import React from 'react';
import './App.css';

function Calendar() {
  const url = "https://calendar.google.com/calendar/embed?src=geusqu6v8s7kgceoil2otdnkfk%40group.calendar.google.com&ctz=Europe%2FBerlin"
  return (
    <iframe
      src={url}
      style={{border: 0}}
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          NY Silents
        </h1>
        <p>
          Coming Soon
        </p>
        <Calendar />
      </header>
    </div>
  );
}

export default App;
