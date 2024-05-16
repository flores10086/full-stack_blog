document.addEventListener("mousemove", function (e) {
    const card = document.querySelector(".container");
    const cardRect = card.getBoundingClientRect();
    const mouseX = e.clientX - cardRect.left;
    const mouseY = e.clientY - cardRect.top;
    const rotateX = (mouseY / cardRect.height - 0.5) * 10;
    const rotateY = -(mouseX / cardRect.width - 0.5) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
