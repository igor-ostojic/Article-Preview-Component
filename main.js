const desktopButton = document.querySelector(".share");
const desktopPopUp = document.querySelector(".share_container");
const mobilePopUp = document.querySelector(".share_container_mobile");

desktopButton.addEventListener("click", () => {
  desktopPopUp.classList.toggle("share_visible");
  mobilePopUp.classList.toggle("share_visible_mobile");
});
