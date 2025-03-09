window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        let content = document.getElementById("content");
        content.style.display = "block";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 2000); // Changed from 3000 to 2000 (2 seconds delay)
    window.scrollTo({ top: 0, behavior: "smooth" });
};