const navigationButtons = document.querySelectorAll("nav ul li");

navigationButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        const pageName = button.dataset.name;
        pageName === "home" ? location.href = "index.html" : location.href = `${pageName}.html`;
    })
})