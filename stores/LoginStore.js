import { observable, computed, action, runInAction } from 'mobx';

class LoginStore {
    @observable isAuthenticated = false;
    @observable isLoading = true;
    @observable isFailure = false;
    @observable currentUser = null;
    @observable profileErrors = null;

    @computed get getIsAuthenticated(){
        return this.isAuthenticated;
    }
}
export default new LoginStore();
export { LoginStore };