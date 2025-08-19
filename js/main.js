// DOM Elements
const $interactionShare = document.querySelector(".interaction--share");
const $tooltip = document.querySelector(".interaction--tooltip");

// Media Queries
const mediaMobile = window.matchMedia("(max-width: 767px)");
const mediaDesktop = window.matchMedia("(min-width: 768px)");

// Click Handler Factory
const createClickHandler = target => event => {
  const isShareButton = event.target.closest(".share__button");
  const isInsideTarget = target.contains(event.target);

  if (isShareButton) {
    event.stopPropagation();
    target.classList.toggle("show--share");
    return;
  }

  if (!isInsideTarget && target.classList.contains("show--share")) {
    target.classList.remove("show--share");
  }
};

// Specific Handlers
const mobileHandler = createClickHandler($interactionShare);
const desktopHandler = createClickHandler($tooltip);

// Toggle Event Listeners
const updateClickHandler = (mediaQuery, handler) => {
  if (mediaQuery.matches) {
    document.addEventListener("click", handler);
  } else {
    document.removeEventListener("click", handler);
  }
};

// Reset UI State
const clearShareState = () => {
  [$interactionShare, $tooltip].forEach(el => el.classList.remove("show--share"));
};

// Initialization
const initShareComponent = () => {
  updateClickHandler(mediaMobile, mobileHandler);
  updateClickHandler(mediaDesktop, desktopHandler);

  const handleMediaChange = e => {
    const handler = e.media.includes("max-width") ? mobileHandler : desktopHandler;
    updateClickHandler(e, handler);
    clearShareState();
  };

  mediaMobile.addEventListener("change", handleMediaChange);
  mediaDesktop.addEventListener("change", handleMediaChange);
};

initShareComponent();
