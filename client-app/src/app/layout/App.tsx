import React, { useState, useEffect, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import { NavBar } from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {

  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0])
  }

  useEffect(() => {
    axios.get<IActivity[]>("http://localhost:5000/api/activities").then(response => {
         setActivities(response.data);
    });
  }, []);

  // const handleSetActivity = () => {
  //   axios.get<IActivity[]>("http://localhost:5000/api/activities").then(response => {
  //        setActivities(response.data);
  //   });
  // }


  return (
    <Fragment>
     
      <NavBar />
     
      <Container style={{marginTop: '7em'}}>
         {/* <Button onClick={handleSetActivity}>TEst buton</Button> */}
        <ActivityDashboard 
        activities = { activities } 
        selectActivity = { handleSelectActivity }
        selectedActivity = { selectedActivity }
        editMode = { editMode }
        setEditMode = { setEditMode }
        />
      </Container>
    </Fragment>
  );
};

export default App;
