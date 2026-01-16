document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesJourney");
  const noBtn = document.getElementById("noJourney");

  const questionBox = document.getElementById("questionBox");
  const journeyContent = document.getElementById("journeyContent");

  const popup = document.getElementById("noPopup");
  const closePopup = document.getElementById("closePopup");

  // YES → hide question + image, show story
  

  // NO → show popup
  noBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // CLOSE popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

});
