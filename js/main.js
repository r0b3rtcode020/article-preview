const $interactionShare = document.querySelector(".interaction--share");
const $shareButton = document.querySelector(".share__button");

// Handler specifically for the share button click
const onShareButtonClick = e => {
  e.stopPropagation(); // Prevent event bubbling to document
  $shareButton.classList.toggle("share__button--active");
  $interactionShare.classList.toggle("show--share");
};

// Handler for clicks anywhere else on the document
const onDocumentClick = e => {
  // Close share UI only if click is outside the share container
  if (
    !$interactionShare.contains(e.target) &&
    $interactionShare.classList.contains("show--share")
  ) {
    $shareButton.classList.remove("share__button--active");
    $interactionShare.classList.remove("show--share");
  }
};

// Attach handlers separately
$shareButton.addEventListener("click", onShareButtonClick);
document.addEventListener("click", onDocumentClick);
