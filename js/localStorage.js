let pst, frm;
window.onload=function(){
    frm= document.getElementById("form-demo");
    pst = new Pristine(frm);

    frm.addEventListener('submit',function (e){
        e.preventDefault();
        if (pst.validate())
        {
            ProcesarDatos()
        }
        else{
            fmr.classList.add("was-validated");
        }
        
    });
    frm.addEventListener('reset',function(e){
        frm.classList.remove("was validated");
    });
    function ProcesarDatos(){
        let usuario =localStorage.getItem("usuario");
        if(usuario){
            fetch('scripts/script.php',{
        method: 'post',
        body:new FormData(frm)
    })
    .then(function(response) {
         return response.json();
    })
    .then(function(json) {
         console.log(json);
    })
    .catch(function(err) {
    });
}
function guardarLocal(json){
    localStorage.setItem("usuario",JSON,stringify(json));
    location.href="login.html";
}
        }
    }

function ProcesarDatos(){
    fetch('scripts/script.php',{
        method: 'post',
        body:new FormData(frm)
    })
    .then(function(response) {
         return response.json();
    })
    .then(function(json) {
         console.log(json);
    })
    .catch(function(err) {
    });
}
function guardarLocal(json){
    localStorage.setItem("usuario",JSON,stringify(json));
    location.href="login.html";
}