document.addEventListener("keypress", (e) => {
  // const key = e.keyCode - 32;
  playAudio(e.keyCode);
});

document.addEventListener("click", (e) => {
  // const key = e.keyCode - 32;
  // playAudio(e.data);
  playAudio(parseInt(e.target.parentElement.dataset.key) + 32);
});

const playAudio = (e) => {
  const child = document.querySelectorAll(`[data-key="${e - 32}"]`);
  child[0].classList.add("playing");
  child[1].currentTime = 0;
  child[1].play();
  setTimeout(() => {
    child[0].classList.remove("playing");
  }, 100);
};

// const playAudio = (key) => {
//   switch (key) {
//     case 65: {
//       const child = document.querySelectorAll("[data-key='65']");

//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }
//     case 83: {
//       const child = document.querySelectorAll("[data-key='83']");
//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }
//     case 68: {
//       const child = document.querySelectorAll("[data-key='68']");
//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }
//     case 70: {
//       const child = document.querySelectorAll("[data-key='70']");
//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }
//     case 71: {
//       const child = document.querySelectorAll("[data-key='71']");
//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }
//     case 72: {
//       const child = document.querySelectorAll("[data-key='72']");
//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }
//     case 74: {
//       const child = document.querySelectorAll("[data-key='74']");
//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }
//     case 75: {
//       const child = document.querySelectorAll("[data-key='75']");
//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }
//     case 76: {
//       const child = document.querySelectorAll("[data-key='76']");
//       child[1].currentTime = 0;
//       child[1].play();
//       break;
//     }

//     default:
//       break;
//   }
// };
