module.exports = function (event, world) {
  console.log(`VR Template: ${event.name}`);
  console.log(event);
  console.log(world);

  if (
    event.name === "playerDidInteract" &&
    event.target.key === "blocker_rock"
  ) {
    world.hideEntities("blocker_rock");
  }
};
