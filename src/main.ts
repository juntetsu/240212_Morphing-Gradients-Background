import "./style.scss";

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
    requestAnimationFrame(move);
  }

  window.addEventListener("mousemove", (e) => {
    tgX = e.clientX;
    tgY = e.clientY;
  });

  move();
});
