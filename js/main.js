const $interactionShare = document.querySelector(".interaction--share");
const $shareButton = document.querySelector(".share__button");

const createClickHandler = e => {
  const isShareButton = e.target.closest(".share__button");
  const isInsideTarget = $interactionShare.contains(e.target);

  if (isShareButton) {
    e.stopPropagation();
    $shareButton.classList.toggle("share__button--active");
    $interactionShare.classList.toggle("show--share");
    return;
  }

  if (!isInsideTarget && $interactionShare.classList.contains("show--share")) {
    $shareButton.classList.remove("share__button--active");
    $interactionShare.classList.remove("show--share");
  }
};

$shareButton.addEventListener("click", createClickHandler);
document.addEventListener("click", createClickHandler);
