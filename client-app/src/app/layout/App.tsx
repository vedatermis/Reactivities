import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, List }from 'semantic-ui-react';
import axios from "axios";
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    activities: []
  };

  componentDidMount() {
    axios.get<IActivity[]>("http://localhost:5000/api/activities").then(response => {
      this.setState({
        activities: response.data
      });
    });
  }
  

render() {
  return (
    <div className="App">
    <Header>
      <Icon name="user"/>
      <Header.Content>Reactivies</Header.Content>
    </Header>
    <List>
      {
        this.state.activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))
      }
    </List>
    </div>
  );
}
}
export default App;
