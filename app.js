// Select DOM elements
const shareIconBtn = document.querySelector(".share-icon-btn");
const author = document.querySelector(".author");
const shareActive = document.querySelector(".share-active");

shareIconBtn.addEventListener("click", function () {
	author.classList.add("hide-author");
	shareActive.classList.toggle("display-share");
});

const shareIconBtnActive = document.querySelector(".share-icon-btn.active");

shareIconBtnActive.addEventListener("click", function () {
	author.classList.remove("hide-author");
	shareActive.classList.toggle("display-share");
});
