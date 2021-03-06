import React from 'react';
import './App.css';

function Title() {
  return (
    <span className="App-header-title">
      <h1>
        NY Silents
      </h1>
    </span>
  );
}

function SubTitle() {
  return (
    <span className="App-header-subtitle">
      <small>
	A listing of public silent film screenings and early cinema-related events happening in NYC.
      </small>
    </span>
  );
}

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

function ContactLink() {
  return (
    <span className="App-header-contact">
      <small>
        Get in touch at <a target="_blank" rel="noopener noreferrer" href="mailto:silentsny@gmail.com">silentsny@gmail.com</a>
      </small>
    </span>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<Title />
	<SubTitle />
        <br />
        <Calendar />
	<ContactLink />
      </header>
    </div>
  );
}

export default App;
