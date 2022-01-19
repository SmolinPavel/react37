const trackAction = type => {
  console.log('track action type', type);
};

export const tracker = store => next => action => {
  trackAction(action.type);

  return next(action);
};
