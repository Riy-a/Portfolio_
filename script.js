function darkmode() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    var theme;
    if (SetTheme.classList.contains("dark-mode")) {
        console.log("Dark mode");
        theme = "DARK";
    } else {
        console.log("Light mode");
        theme = "LIGHT";
    }
    
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    
    if (GetTheme === "DARK") {
        document.body.classList = "dark-mode";


    } else {
        document.body.classList = "";
    }
}, 5);


const btn = document.getElementById('mybtn');


btn.addEventListener('click', function handleClick() {
    const initialText = '';

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = '';
    } else {
        btn.textContent = initialText;
    }
});