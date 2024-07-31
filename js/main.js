//tawkto script
var Tawk_API = Tawk_API || {}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/64ff76910f2b18434fd7f1e7/1ha2ueaka';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);

    //tawk to google ADS, conversão ao preencher o formulário pré-chat
    Tawk_API.onPrechatSubmit = function(data){
        gtag('event', 'conversion', {'send_to': 'AW-870658922/5kBECLDb6t8DEOrmlJ8D'});
    };

})();


//sidebar das paginas
document.addEventListener("DOMContentLoaded", function () {
const menuButton = document.getElementById("side-menu-button");
const menuContainer = document.getElementById("menu-container");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

    menuButton.addEventListener("click", function () {
        // Alternar a classe 'active' no menu-container para mostrar/ocultar o menu lateral
        menuContainer.classList.toggle("active");
        // Alternar a visibilidade dos ícones de menu e fechar
        closeIcon.classList.toggle("visible");
        menuIcon.classList.toggle("visible");
    });
});
