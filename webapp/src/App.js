import React from 'react';
import './App.css';

function Calendar() {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=Z2V1c3F1NnY4czdrZ2Nlb2lsMm90ZG5rZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23000000&amp;showTitle=1&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1"
      style={{borderWidth:0}}
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
        <Calendar />
      </header>
    </div>
  );
}

export default App;
