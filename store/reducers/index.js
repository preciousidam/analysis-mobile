import { combineReducers } from 'redux';
import authReducer from './auth';
import appReducer from './app';
import notificationReducer from './notification';
import propertyReducer from './property';

export default combineReducers({
    app: appReducer,
    auth: authReducer,
    notifications: notificationReducer,
    properties: propertyReducer,
});