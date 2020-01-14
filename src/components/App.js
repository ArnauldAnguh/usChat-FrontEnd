import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './Join/Join';
import Chat from './Chat/Chat';

const App = () => {
  const url = `https://dreamy-archimedes-7da915.netlify.com/chatroom`;
  // console.log(url);
  return (
    <Router>
      <Route path='/' exact component={Join} />
      <Route path={url} component={Chat} />
    </Router>
  );
};

export default App;
