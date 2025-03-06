setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    let content = document.getElementById("content");
    content.style.display = "block";
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
}, 1500);
window.onload = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};            