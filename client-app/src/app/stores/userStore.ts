import { observable, computed, action, configure, runInAction} from "mobx";
import { IUser, IUserFormValues } from "../models/user";
import agent from '../api/agent';
import { RootStore } from "./rootStore";

configure({ enforceActions: "always" })

export default class UserStore {

    rootStore: RootStore;
    constructor(rootStore: RootStore) {
      this.rootStore = rootStore;
    }

    @observable user: IUser | null = null;
    @computed get isLoggedIn() { return !!this.user }
    @action login = async (values: IUserFormValues) => {
        try {
            const user = await agent.User.login(values);

            runInAction(() => {
                this.user = user;
            });
            
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }
}