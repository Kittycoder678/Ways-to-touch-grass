
function openMenu() {
    menuTest.style.display = 'initial';
    menuTitle.style.display = 'initial';
    menuBox.style.display = 'none';
    menuTitles.style.display = 'none';    
    menuBarss.style.display = 'initial';    
    
}

function reset() {
    menuBox.style.display = 'initial';
    menuTitles.style.display = 'initial';
    menuTest.style.display = 'none';
    menuTitle.style.display = 'none';
    menuBarss.style.display = 'none';    
}

menuBox.onmouseover = openMenu;
menuBarss.onmouseleave = reset;


if (document.getElementById('frontPage')) {

cookingBtn.onclick = function(){
    document.location='cooking.html'
}

musicBtn.onclick = function(){
    document.location='music.html'
}

readingBtn.onclick = function(){
    document.location='reading.html'
}

artsBtn.onclick = function(){
    document.location='arts.html'
}
}
