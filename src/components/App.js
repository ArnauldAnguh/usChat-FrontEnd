import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Join, linkUrl } from './Join/Join';
import Chat from './Chat/Chat';

const App = () => {
  
  console.log(linkUrl);
  return (
    <Router>
      <Route path='/' exact component={Join} />
      <Route path={linkUrl} component={Chat} />
    </Router>
  );
};

export default App;
