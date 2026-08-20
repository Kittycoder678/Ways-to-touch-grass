// Get elements safely
const menuBox = document.getElementById('menuBox');
const menuTitles = document.getElementById('menuTitles');
const menuTest = document.getElementById('menuTest');
const menuTitle = document.getElementById('menuTitle');
const menuBarss = document.getElementById('menuBarss');

// Open menu
function openMenu() {
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';
    menuBarss.style.display = 'initial';
}

// Close menu
function reset() {
    menuBox.style.display = 'initial';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
    menuBarss.style.display = 'none';
}

// Hover open / leave close
menuBox.onmouseover = openMenu;
menuBarss.onmouseleave = reset;

// Front page button navigation
if (document.getElementById('frontPage')) {

    const cookingBtn = document.getElementById('cookingBtn');
    const readingBtn = document.getElementById('readingBtn');
    const artsBtn = document.getElementById('artsBtn');

    cookingBtn.onclick = () => document.location = 'cooking.html';
    readingBtn.onclick = () => document.location = 'reading.html';
    artsBtn.onclick = () => document.location = 'arts.html';
}
