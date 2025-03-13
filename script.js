function toggleList() {
    let list = document.getElementById("infoList");
    let button = document.getElementById("toggleButton");

    if (list.style.display === "none") {
        list.style.display = "block"; 
        button.textContent = "Скрыть список"; 
    } else {
        list.style.display = "none"; 
        button.textContent = "Развернуть список"; 
    }
}
