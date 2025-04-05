var dark = document.getElementById("dark");

dark.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        dark.src = "img/sun.png";
    }
    else{
        dark.src = "img/moon.png"; 
    }
}