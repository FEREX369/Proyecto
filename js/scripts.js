const toogleTheme = document.getElementById("toggle-theme");
const toogleIcon = document.getElementById("toggle-icon");
const toogleText = document.getElementById("toggle-text");


const tooggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

const ChangeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const text = await requestJson.json();

    console.log(text);
};


flagsElement.addEventListener("click", (e) => {
    ChangeLanguage(e.target.parentElement.dataset.language);
});


//Este toogle es como un interuptor que verifica la clase//
toogleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if(toogleIcon.src.includes("moon.svg")) {
            toogleIcon.src ="assets/icons/sun.svg";
            toogleText.textContent ="Ligh Mode";
        }else{
            toogleIcon.src= "assets/icons/moon.svg";
            toogleText.textContent = "Dark Mode"; 
        }
});

tooggleColors.addEventListener("click", (e) => {
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
});
