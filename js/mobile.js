window.onload = init;
var facebook, instagram, youtube, spotify, whatsapp;
let IMAGENES,TIEMPO_INTERVALO_MILESIMAS_SEG,botonRetroceder,botonAvanzar,imagen,intervalo;
let posicionActual = 0;


function init(){
	//footer iconos
	facebook = document.querySelector(".iconfb");
	instagram = document.querySelector(".iconinst");
	youtube = document.querySelector(".iconyou");
	spotify = document.querySelector(".iconspo");
	whatsapp = document.querySelector(".iconwha");
	facebook.addEventListener("mouseover",cambiarImagenfb);
	instagram.addEventListener("mouseover",cambiarImageninst);
	youtube.addEventListener("mouseover",cambiarImagenyou);
	spotify.addEventListener("mouseover",cambiarImagenspo);
	whatsapp.addEventListener("mouseover",cambiarImagenwha);
	facebook.addEventListener("mouseleave",cambiarImagenfb2);
	instagram.addEventListener("mouseleave",cambiarImageninst2);
	youtube.addEventListener("mouseleave",cambiarImagenyou2);
	spotify.addEventListener("mouseleave",cambiarImagenspo2);
	whatsapp.addEventListener("mouseleave",cambiarImagenwha2);

 	//slider
	IMAGENES = ['images/portada1.jpeg','images/portada2.jpeg','images/portada3.jpeg','images/portada4.jpeg'];
	TIEMPO_INTERVALO_MILESIMAS_SEG = 4000;
	botonRetroceder = document.querySelector('#retroceder');
	botonAvanzar = document.querySelector('#avanzar');
	imagen = document.querySelector('#imagencar');
	botonAvanzar.addEventListener('click', pasarFoto);
	botonRetroceder.addEventListener('click', retrocederFoto);
	renderizarImagen();
	playIntervalo();

	

	var getNavi = document.getElementById('navigation');


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

//funciones footer iconos
//--------------------------------------------------
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
function cambiarImagenwha(){
	this.src = "images/icons/whatsapp-hover.png";
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
function cambiarImagenwha2(){
	this.src = "images/icons/whatsapp.png";
}
//-----------------------------------------------


//funciones slider
//-------------------------------------------------
function pasarFoto() {
	if (posicionActual >= IMAGENES.length - 1) {
		posicionActual = 0;
	} else {
		posicionActual++;
	}
	renderizarImagen();
}
function retrocederFoto() {
	if (posicionActual <= 0) {
		posicionActual = IMAGENES.length - 1;
	} else {
		posicionActual--;
	}
	renderizarImagen();
}
function renderizarImagen() {
	imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}
function playIntervalo() {
	intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
}
function stopIntervalo() {
    clearInterval(intervalo);
}
//-----------------------------------------------------------------------------



const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.

}

const campos = {
	nombre: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

