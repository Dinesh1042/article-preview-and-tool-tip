const shareEl = document.getElementById("share");
const toolTipContEl = document.getElementById("toolTipCont");
const toolTip = document.getElementById("toolTip");
const shareIconEL = document.getElementById("shareIcon");
const bottomRightEl = document.getElementById("bottomRight");

function tooTipPosition() {
  toolTipContEl.style.left =
    shareEl.offsetLeft - toolTip.offsetWidth / 2 + 11 + "px";
  toolTipContEl.style.top = shareEl.offsetTop - 60 + "px";
}

tooTipPosition();

window.addEventListener("resize", tooTipPosition);

shareEl.addEventListener("mouseenter", (e) => {
  bottomRightEl.classList.toggle("active");
  tooTipPosition();
});

shareIconEL.addEventListener("click", (e) => {
  bottomRightEl.classList.toggle("active");
  tooTipPosition();
});

// Outside click tool tip display none

window.addEventListener("click", (e) => {
  if (
    !e.target.parentElement.closest("#toolTipCont") &&
    !e.target.parentElement.closest(".share")
  ) {
    bottomRightEl.classList.remove("active");
  }
});
