window.addEventListener('load', () => {
    const headerContent = document.querySelector(".header_content");
    const mainBody = document.querySelector("main");
    const videoPage = document.querySelector(".video_page");
    const blogPage = document.querySelector(".blog_page");
    const homeBtn = document.getElementById("homeBtn");
    const blogsBtn = document.getElementById("blogsBtn");
    const videoBtn = document.getElementById("videoBtn");
    AOS.init();

    homeBtn.addEventListener('click', () => {
        videoPage.style.display = "none";
        mainBody.style.display = "block";
        headerContent.style.display = "flex";
        blogPage.style.display = "none";

    })

    blogsBtn.addEventListener('click', () => {
        videoPage.style.display = "none";
        mainBody.style.display = "none";
        headerContent.style.display = "none";
        blogPage.style.display = "flex";

    })

    videoBtn.addEventListener('click', () => {
        videoPage.style.display = "flex";
        mainBody.style.display = "none";
        headerContent.style.display = "none";
        blogPage.style.display = "none";

    })
})

