
window.addEventListener("load", () => {
    // document.querySelector(".loader_page").style.display = "none";
    const headerContent = document.querySelector(".header_content");
    const mainBody = document.querySelector("main");
    const footer = document.querySelector("footer");
    const videoPage = document.querySelector(".video_page");
    const notifyPage = document.querySelector(".notification_menu");
    const blogPage = document.querySelector(".blog_page");
    const homeBtn = document.getElementById("homeBtn");
    const blogsBtn = document.getElementById("blogsBtn");
    const videoBtn = document.getElementById("videoBtn");
    const bellIcon = document.getElementById("bellIcon");
    var loadSite = document.querySelector(".load_site");
    AOS.init();
    var isNotification = false;

    homeBtn.addEventListener('click', () => {
        loadSite.classList.remove("item_hidden");
        videoPage.style.display = "none";
        mainBody.style.display = "block";
        headerContent.style.display = "flex";
        blogPage.style.display = "none";
        notifyPage.style.display = "none";
        footer.style.display = "flex";
        bellIcon.style.fill = "#fff";
        loadSite.classList.add("item_hidden");
    })

    blogsBtn.addEventListener('click', () => {
        loadSite.classList.remove("item_hidden");
        setTimeout(() => {
            videoPage.style.display = "none";
            mainBody.style.display = "none";
            headerContent.style.display = "none";
            notifyPage.style.display = "none";
            bellIcon.style.fill = "#fff";
            footer.style.display = "none";
            blogPage.style.display = "flex";
            loadSite.classList.add("item_hidden");
        }, 1000);

    })

    videoBtn.addEventListener('click', () => {
        loadSite.classList.remove("item_hidden");
        setTimeout(() => {
            videoPage.style.display = "flex";
            mainBody.style.display = "none";
            headerContent.style.display = "none";
            blogPage.style.display = "none";
            footer.style.display = "none";
            notifyPage.style.display = "none";
            bellIcon.style.fill = "#fff";
            loadSite.classList.add("item_hidden");
        }, 1000);
    })

    bellIcon.addEventListener('click', () => {
        if (isNotification == false) {
            videoPage.style.display = "none";
            mainBody.style.display = "none";
            headerContent.style.display = "none";
            blogPage.style.display = "none";
            notifyPage.style.display = "flex";
            bellIcon.style.fill = "#f2ff00";
            isNotification = true
            footer.style.display = "none";
        } else {
            videoPage.style.display = "none";
            mainBody.style.display = "block";
            headerContent.style.display = "flex";
            blogPage.style.display = "none";
            notifyPage.style.display = "none";
            bellIcon.style.fill = "#fff";
            isNotification = false
        }
    })
})







