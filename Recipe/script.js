function badgeShow(obj){
    var element = obj.querySelector('.badge');
    element.style.opacity = "1";
}

function badgeHide(obj){
    var element = obj.querySelector('.badge');
    element.style.opacity = "0";
}

const dropdown 	= document.querySelector("#burger");
const menu 	= document.querySelector("#menu");

dropdown.addEventListener('click',() => {
	menu.classList.toggle("hidden");
});
