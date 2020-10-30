import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon }from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
    <Header>
      <Icon name="user"/>
      <Header.Content>Reactivies</Header.Content>
    </Header>
    </div>
  );
}

export default App;
