document.addEventListener("DOMContentLoaded", () => {

  const door = document.getElementById("door");
  const doorScene = document.getElementById("doorScene");
  const room = document.getElementById("room");

  const chain = document.getElementById("chain");
  const lamp = document.getElementById("lamp");
  const ghost = document.getElementById("ghost");
  

  /* DOOR */
  door.addEventListener("click", () => {
    door.classList.add("open");

    setTimeout(() => {
      doorScene.classList.add("zoom-in");
    }, 600);

    setTimeout(() => {
      doorScene.classList.add("hidden");
      room.classList.remove("hidden");
    }, 2000);
  });

  /* CHAIN */
  chain.addEventListener("click", () => {
    lamp.classList.add("on");

    setTimeout(() => {
      lamp.classList.add("fade-out");
    }, 600);

    setTimeout(() => {
      ghost.classList.remove("hidden");
      ghost.classList.add("appear");
      room.classList.add("dark");
    }, 1400);
  });

  /* YES BUTTON */
  

});
