document.addEventListener("mousemove", function (e) {
    const card1 = document.querySelector(".left-sidebar");
    const cardRect1 = card1.getBoundingClientRect();
    const mouseX1 = e.clientX - cardRect1.left;
    const mouseY1 = e.clientY - cardRect1.top;
    const rotateX1 = (mouseY1 / cardRect1.height - 0.5) * 5;
    const rotateY1 = -(mouseX1 / cardRect1.width - 0.5) * 5;
    card1.style.transform = `rotateX(${rotateX1}deg) rotateY(${rotateY1}deg)`;

    const card2 = document.querySelector(".main-content");
    const cardRect2 = card2.getBoundingClientRect();
    const mouseX2 = e.clientX - cardRect2.left;
    const mouseY2 = e.clientY - cardRect2.top;
    const rotateX2 = (mouseY2 / cardRect2.height - 0.5) * 10;
    const rotateY2 = -(mouseX2 / cardRect2.width - 0.5) * 10;
    card2.style.transform = `rotateX(${rotateX2}deg) rotateY(${rotateY2}deg)`;
});
