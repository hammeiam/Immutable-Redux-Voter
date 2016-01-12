export default socket => store => next => action => {
  // this is just some fancy currying to make future calls easier
  socket.emit('action', action);
  return next(action);
}
