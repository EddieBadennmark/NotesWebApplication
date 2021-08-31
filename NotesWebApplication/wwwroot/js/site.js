// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*$('.switch').click(() => {
    $([".light [class*='-light']", ".dark [class*='-dark']"]).each((i, ele) => {
        $(ele).toggleClass('bg-light bg-dark')
        $(ele).toggleClass('text-light text-dark')
        $(ele).toggleClass('navbar-light navbar-dark')
    })
    // toggle body class selector
    $('body').toggleClass('light dark')
})*/


/*let link = document.getElementById("lnk");
let toggleBtn = document.getElementById("toggleBtn");
let showTheme = false;

toggleBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
    if (!showTheme) {
        link.setAttribute("href", "site.css");

        // Set Menu State
        showTheme = true;
    } else {
        link.setAttribute("href", "siteEdit.css");

        // Set Menu State
        showTheme = false;
    }
}*/

// id
const LOCAL_STORAGE_KEY = "NotesWebbApplication";

const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

// url to text css / men funkar inte som jag vill 
const DARK_THEME_PATH = "https://bootswatch.com/5/slate/bootstrap.min.css";

/* https://bootswatch.com/4/cyborg/bootstrap.min.css */


const DARK_STYLE_LINK = document.getElementById("theme-switcher");
const THEME_TOGGLER = document.getElementById("theme-toggler");

let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;

// check if user has already selected dark theme earlier
if (isDark) {
    enableDarkTheme();
} else {
    disableDarkTheme();
}


/**
 * sparar theme så den vet mannen
 */
function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
        enableDarkTheme();
    } else {
        disableDarkTheme();
    }
    const META = { isDark };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META));
}

function enableDarkTheme() {
    DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
    THEME_TOGGLER.innerHTML = "Dark";
}

function disableDarkTheme() {
    DARK_STYLE_LINK.setAttribute("href", "");
    THEME_TOGGLER.innerHTML = "Light";
}