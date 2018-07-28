export const logger = store => next => action => {
    console.log("Middleware triggered:", action);
    console.log("Current state:", store.getState())
    next(action);
}