import { IAllState } from '../all-state';

export const mapStateToProps = (state: IAllState) => {
    console.log('state');
    console.log(state);
    return state.loggedUser;
};