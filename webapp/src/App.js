import React from 'react';
import './App.css';

function Calendar() {
  return (
    <div className="Calendar-container">
      <iframe
        title="nysilentscal"
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=white&amp;src=cmpjb2xvNmpzcjlwMWNnNXNvZzEwZTNtZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=black&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1"
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          NY Silents
        </h1>
        <small className="App-header-subtitle">
          A listing of silent film screenings and early cinema-related events happening in the NYC area
        </small>
        <br />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
