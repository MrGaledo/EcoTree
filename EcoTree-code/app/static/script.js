const startBtn = document.getElementById("startBtn");
let tree = 0;
let interval;

startBtn.addEventListener("click", () => {
  if (startBtn.innerHTML === "Start Planting") {
    
    startBtn.innerHTML = "Stop";

    interval = setInterval(() => {
      tree++;
      document.getElementById("tree").innerHTML = tree;
    }, 1000);
  } else {
    
    startBtn.innerHTML = "Start Planting";
    clearInterval(interval);
  }
});
