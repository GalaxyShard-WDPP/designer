

let tabs = document.getElementsByClassName("tab");

for (const tab of tabs) {
    let header = tab.getElementsByClassName("tab-header")[0];
    let content = tab.getElementsByClassName("tab-content")[0];

    content.style.display = "none";
    header.addEventListener("click", () => {
        content.style.display = (content.style.display==="none") ? "block" : "none";
    });
}