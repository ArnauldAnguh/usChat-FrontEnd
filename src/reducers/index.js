import appReducer from './app';
const rootReducer = combineReducers({
  routing: routerReducer,
  app: appReducer
});

export default rootReducer