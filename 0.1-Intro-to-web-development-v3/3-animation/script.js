const ball = document.querySelector(".ball");

popmotion.animate({
  from: "0px",
  to: "250px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    console.log(update);
    ball.style.left = update;
  },
});
