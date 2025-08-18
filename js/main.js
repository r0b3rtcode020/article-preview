const $interactionShare = document.querySelector(".interaction--share");

document.addEventListener("click", event => {
  const isShareButton = event.target.closest(".share__button");
  const isInsideMenu = $interactionShare.contains(event.target);

  if (isShareButton) {
    // Prevents the immediate closing
    event.stopPropagation();
    $interactionShare.classList.toggle("show--share");
    return;
  }

  // If the menu is open and the click is outside → it closes
  if (!isInsideMenu && $interactionShare.classList.contains("show--share")) {
    $interactionShare.classList.remove("show--share");
  }
});
