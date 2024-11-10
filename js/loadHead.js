const headHTML = `
	<title>Amigos na Dor - Alguém pra conversar, na hora que você mais precisa</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:image" content="imgs/amigos-na-dor.png">
	<link rel="stylesheet" type="text/css" href="styles.css">
	<link rel="icon" href="imgs/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="imgs/favicon.ico" type="image/x-icon">
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=AW-870658922"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'AW-870658922');
	</script>
`;

const headHTMLBlog = `
	<title>Amigos na Dor - Alguém pra conversar, na hora que você mais precisa</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:image" content="../../imgs/amigos-na-dor.png">
	<link rel="stylesheet" type="text/css" href="../../styles.css">
	<link rel="icon" href="../../imgs/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="../../imgs/favicon.ico" type="image/x-icon">
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=AW-870658922"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'AW-870658922');
	</script>
`;

/*
function loadHeadContent() {
    document.head.innerHTML = headHTML;
}

function loadHeadContentBlog() {
    document.head.innerHTML = headHTMLBlog;
}
*/

document.addEventListener("DOMContentLoaded", function() {

	var currentPage = window.location.pathname.split("/").pop();
	
    if (currentPage === "atendimentos.html" || currentPage === "conteudos.html" || currentPage === "index.html" || currentPage === "depoimentos.html") {
        loadHeadContent();
    } else {
        loadHeadContentBlog();
    }
});