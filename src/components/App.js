import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './Join/Join';
import { Chat, LINK } from './Chat/Chat';

const App = () => {
  const url = `/chatroom/${LINK}`;
  return (
    <Router>
      <Route path='/' exact component={Join} />
      <Route path={url} component={Chat} />
    </Router>
  );
};

export default App;
