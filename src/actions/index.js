import { ADD_MESSAGE, SET_CURRENT_USERID } from '../constants';

export const setCurrentUserID = userID => {
  return {
    type: SET_CURRENT_USERID,
    payload: userID
  };
};
export const addMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: message
  };
};
