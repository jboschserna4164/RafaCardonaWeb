window.onload = init;
var facebook, instagram, youtube, spotify;

function init(){
	var getNavi = document.getElementById('navigation');
	facebook = document.querySelector(".iconfb");
	instagram = document.querySelector(".iconinst");
	youtube = document.querySelector(".iconyou");
	spotify = document.querySelector(".iconspo");
	facebook.addEventListener("mouseover",cambiarImagenfb);
	instagram.addEventListener("mouseover",cambiarImageninst);
	youtube.addEventListener("mouseover",cambiarImagenyou);
	spotify.addEventListener("mouseover",cambiarImagenspo);
	facebook.addEventListener("mouseleave",cambiarImagenfb2);
	instagram.addEventListener("mouseleave",cambiarImageninst2);
	youtube.addEventListener("mouseleave",cambiarImagenyou2);
	spotify.addEventListener("mouseleave",cambiarImagenspo2);


	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	document.getElementById('mobile-navigation').onclick = function(){
		var a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-menu.png)';
		} else {
			getNavi.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-close.png)';
		}
	};
	var getElm = getNavi.getElementsByTagName("LI");
	for(var i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};
	submenu = function (i){
		var sub = getElm[i].children[1];
		var b = sub.getAttribute('style');
		if(b){
			sub.removeAttribute('style');
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-expand.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(11, 163, 156, 0.7)';
		} else {
			sub.style.display='block';
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-collapse.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(0,0,0,0.8)';
		}
	};
};

//funciones para los iconos
function cambiarImagenfb(){
	this.src = "images/icons/facebook-hover.png";
}
function cambiarImageninst(){
	this.src = "images/icons/instagram-hover.png";
}
function cambiarImagenspo(){
	this.src = "images/icons/spotify-hover.png";
}
function cambiarImagenyou(){
	this.src = "images/icons/youtube-hover.png";
}
function cambiarImagenfb2(){
	this.src = "images/icons/facebook.png";
}
function cambiarImageninst2(){
	this.src = "images/icons/instagram.png";
}
function cambiarImagenspo2(){
	this.src = "images/icons/spotify.png";
}
function cambiarImagenyou2(){
	this.src = "images/icons/youtube.png";
}


