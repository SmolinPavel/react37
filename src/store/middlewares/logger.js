export const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  console.info('store', store.getState());
  console.groupEnd(action.type);

  return next(action);
};
