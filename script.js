function randonNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let target = randonNum(35, 75);
let score = 0;

let red = randonNum(3, 10);
let blue = randonNum(3, 10);
let green = randonNum(3, 10);

function restart() {
  target = randonNum(35, 75);
  score = 0;

  red = randonNum(3, 10);
  blue = randonNum(3, 10);
  green = randonNum(3, 10);
}

function updateTarget() {
  $("#target").text(target);
}

function updateScore() {
  if (score === target) {
    alert("You won!");
    restart();
    updateTarget();
    updateScore();
  } else if (score < target) {
    $("#score").text(score);
  } else {
    alert("You lost!");
    restart();
    updateTarget();
    updateScore();
  }
}

$(document).on("click", ".btn", function() {
  const val = $(this).val();
  switch (val) {
    case "blue":
      score += blue;
      break;
    case "green":
      score += green;
      break;
    case "red":
      score += red;
      break;
  }
  updateScore();
  updateTarget();
});

updateTarget();
updateScore();
