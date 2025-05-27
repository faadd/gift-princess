const click = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const btn = document.querySelector(".btn");

// Saat diklik
click.addEventListener("click", () => {
  const isClickActive = click.classList.contains("active");

  if (!isClickActive) {
    click.classList.add("active");
    giftBox.classList.add("active");
    shadow.classList.add("active");
    giftContainer.classList.add("active");
  } else {
    click.classList.remove("active");
    giftBox.classList.remove("active");
    shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    btn.classList.remove("active");
    btn.classList.add("active2");
  }
});

// Munculkan tombol saat animasi `click` selesai
click.addEventListener("transitionend", (e) => {
  if (click.classList.contains("active")) {
    btn.classList.add("active");
    btn.classList.remove("active2");
  }
});
