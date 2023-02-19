

let tabs = document.getElementsByClassName("tab");
function setActive(tab) {
    for (const t of tabs) {
        let header = t.getElementsByClassName("tab-header")[0];
        let content = t.getElementsByClassName("tab-content")[0];
        
        content.style.display = "none";
        header.classList.remove("highlight");
    }
    let header = tab.getElementsByClassName("tab-header")[0];
    let content = tab.getElementsByClassName("tab-content")[0];

    header.classList.add("highlight");
    content.style.display = "block";
}
for (const tab of tabs) {
    let header = tab.getElementsByClassName("tab-header")[0];
    header.addEventListener("click", () => {
        setActive(tab);
    });
}
setActive(tabs[0]);