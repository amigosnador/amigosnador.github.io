const headerHTML = `
<header class="header">
		<div id="side-menu-button">&#9776;</div>
		<a href="index.html">
			<img src="imgs/amigos-na-dor-logo.png" alt="Logo">
		</a>
		<h1>Amigos na Dor</h1>
    </header>
	<div id="menu-container">
    	<nav class="tabs">
    	    <a href="index.html" class="tab">Início</a>
    	    <!--<a href="#" class="tab">Quem Somos</a>
    	    <a href="#" class="tab">Como Funciona</a> -->
    	    <a href="atendimentos.html" class="tab">Atendimentos</a>
			<a href="depoimentos.html" class="tab">Depoimentos</a>
    	    <!--<a href="#" class="tab">No que cremos</a> -->
			<a href="conteudos.html" class="tab">Conteúdos</a>
    	</nav>
	</div>
`;

const headerHTMLBlog = `
<header class="header">
		<div id="side-menu-button">&#9776;</div>
		<a href="../../index.html">
			<img src="../../imgs/amigos-na-dor-logo.png" alt="Logo">
		</a>
		<h1>Amigos na Dor</h1>
    </header>
	<div id="menu-container">
    	<nav class="tabs">
    	    <a href="../../index.html" class="tab">Início</a>
    	    <!--<a href="#" class="tab">Quem Somos</a>
    	    <a href="#" class="tab">Como Funciona</a> -->
    	    <a href="../../atendimentos.html" class="tab">Atendimentos</a>
			<a href="../../depoimentos.html" class="tab">Depoimentos</a>
    	    <!--<a href="#" class="tab">No que cremos</a> -->
			<a href="../../conteudos.html" class="tab">Conteúdos</a>
    	</nav>
	</div>
`;

const footerHTML = `
<footer class="footer">
		<div class="contact">

			<a href="https://www.instagram.com/amigosnador.ipn">
				<img src="imgs/inst.png" alt="Instagram">
			</a>
			<a href="https://www.facebook.com/igreja.ipn">
				<img src="imgs/face.png" alt="Facebook">
			</a>
			<a href="https://www.twitter.com/ipnacional">
				<img src="imgs/twit.png" alt="Twitter">
			</a>
			<a href="https://www.youtube.com/user/IPNCom">
				<img src="imgs/yout.png" alt="Youtube">
			</a>
			<br>
			<br>
			<a href="mailto:amigosnador@gmail.com">amigosnador@gmail.com</a>
		</div>
		<p>Igreja Presbiteriana Nacional – 2016-2025. Todos os direitos reservados</p>
	</footer>
`;

const footerHTMLBlog = `
<footer class="footer">
		<div class="contact">

			<a href="https://www.instagram.com/amigosnador.ipn">
				<img src="../../imgs/inst.png" alt="Instagram">
			</a>
			<a href="https://www.facebook.com/igreja.ipn">
				<img src="../../imgs/face.png" alt="Facebook">
			</a>
			<a href="https://www.twitter.com/ipnacional">
				<img src="../../imgs/twit.png" alt="Twitter">
			</a>
			<a href="https://www.youtube.com/user/IPNCom">
				<img src="../../imgs/yout.png" alt="Youtube">
			</a>
			<br>
			<br>
			<a href="mailto:amigosnador@gmail.com">amigosnador@gmail.com</a>
		</div>
		<p>Igreja Presbiteriana Nacional – 2016-2025. Todos os direitos reservados</p>
	</footer>
`;

function loadComponent(elementId, htmlContent) {
  document.getElementById(elementId).innerHTML = htmlContent;
}

document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname.split("/").pop();

  if (
    currentPage === "atendimentos.html" ||
    currentPage === "conteudos.html" ||
    currentPage === "index.html" ||
    currentPage === "depoimentos.html"
  ) {
    loadComponent("header-container", headerHTML);
    loadComponent("footer-container", footerHTML);
  } else {
    loadComponent("header-container", headerHTMLBlog);
    loadComponent("footer-container", footerHTMLBlog);
  }
});
