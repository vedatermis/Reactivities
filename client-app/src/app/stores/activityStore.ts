import { observable, action } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { IActivity } from "../models/activity";

class ActivityStore {
  @observable activities: IActivity[] = [];
  @observable selectedActivity: IActivity | undefined;
  @observable editMode = false;
  @observable loadingInitial = false;
  @observable submitting = false;

  @action loadActivities = async () => {
    this.loadingInitial = true;

    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        activity.date = activity.date.split('.')[0];
        this.activities.push(activity);
      });
      this.loadingInitial = false;
    }
    catch (error) {
      console.log(error);
      this.loadingInitial = false;
    }
  };

  @action selectActivity = (id: string) => {
    this.selectedActivity = this.activities.find(x => x.id === id);
    this.editMode = false;
  }

  @action createActivity = async (activity: IActivity) => {
    this.submitting = true;
    try {
      await agent.Activities.create(activity);
      this.activities.push(activity);
      this.editMode = false;
      this.submitting = false;
    } catch (error) {
      this.submitting = false;
      console.log(error);
    }
  }

  @action openCreateForm = () => {
    this.editMode = true;
    this.selectedActivity = undefined;
  }
}

export default createContext(new ActivityStore());