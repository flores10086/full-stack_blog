// 获取 container 和 content 元素
const container = document.getElementById('container');
const content = document.getElementById('content');

// 鼠标移动监听事件
container.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = event.clientY / window.innerHeight;
    container.style.background = `linear-gradient(45deg, rgba(78, 121, 255, ${mouseX}), rgba(255, 122, 233, ${mouseY}))`;
    content.style.transform = `translate(-${mouseX * 50}px, -${mouseY * 50}px)`;
});

// // 点击链接时的事件处理
// document.getElementById('Welcome').addEventListener('click', function (event) {
//     // 阻止默认的页面跳转行为
//     event.preventDefault();

//     // 目标文件路径
//     const targetFilePath = 'dss.html'; // 此处填写目标文件的路径

//     // 在当前页面直接跳转到目标页面
//     window.location.href = targetFilePath;
// });
