const firebaseConfig = {
  apiKey: "AIzaSyARHYky_cakOuuEjtCAbGoUKHWCG0fqWM4",
  authDomain: "ways-to-touch-grass.firebaseapp.com",
  projectId: "ways-to-touch-grass",
  storageBucket: "ways-to-touch-grass.firebasestorage.app",
  messagingSenderId: "511870144078",
  appId: "1:511870144078:web:520377d66af9f650a13d1f",
  measurementId: "G-SG11X8K06T"
};

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

if (document.getElementById('signIn')) {

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
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable")
    signinBtn.classList.remove("disable")
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable")
    signinBtn.classList.add("disable")
}


}

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
