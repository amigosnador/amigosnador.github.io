const posts = [
    {
    "titulo": "JESUS CRISTO É A NOSSA ESPERANÇA",
    "autor": "Jeff Christianson",
    "data": "00-00-0000",
    "url": "blog/depressao/jesus_cristo_e_a_nossa_esperanca.html",
    "imagem": "imgs/blog/cristo.jpeg",
    "conteudo": "Todos nós lutamos às vezes com desânimo, com preocupações que podem se transformar em ansiedade ou inquietação. Adicione à mistura a crise mundial, desafios com saúde, dinheiro, política, estresse emocional e relacional, e não é surpreendente que dúvidas e conflitos abundem entre as pessoas hoje."
    },
    {
    "titulo": "ONDE BUSCAR SOCORRO QUANDO ESTOU SOFRENDO?",
    "autor": "Julie Ganschow",
    "data": "00-00-0000",
    "url": "blog/sofrimento/onde_buscar_socorro_quando_estou_sofrendo.html",
    "imagem": "imgs/blog/sofrendo.jpeg",
    "conteudo": `Frequentemente, no sofrimento, buscamos amigos e familiares para compartilhar nossa dor. Contamos com aqueles que amamos e em quem confiamos para nos ajudar durante o período de sofrimento. Podem ser os pais ou um amigo próximo, um pequeno grupo de estudo; queremos contar nossa história`
    },
    {
    "titulo": "CONFIANDO EM DEUS NAS TEMPESTADES DA VIDA",
    "autor": "Shannon Kay McCoy",
    "data": "00-00-0000",
    "url": "blog/confianca/confiando_em_deus_nas_tempestades_da_vida.html",
    "imagem": "imgs/blog/tempestades-da-vida.jpeg",
    "conteudo": "Quando eu era criança crescendo na Carolina do Sul, eu adorava tempestades. Eu observava o vento uivante soprar as folhas dos galhos das árvores e as gotas de chuva baterem na grama sob o céu escuro e cinzento. Se estivéssemos na casa da minha avó, ela nos fazia desligar tudo elétrico."
    },
    {
    "titulo": "CONFIANDO NO TEMPO E NA PROVISÃO DE DEUS",
    "autor": "Andrew Dealy",
    "data": "00-00-0000",
    "url": "blog/confianca/confiando_no_tempo_e_na_provisao_de_deus.html",
    "imagem": "imgs/blog/prisao.jpeg",
    "conteudo": "E quando o pegou, ele o colocou na prisão, entregando-o a quatro esquadrões de soldados para guardá-lo, com a intenção de trazê-lo diante do povo depois da Páscoa. Assim, Pedro estava mantido na prisão, mas a igreja orava fervorosamente por ele a Deus. E quando Herodes estava prestes a trazê-lo para"
    },
    {
    "titulo": "DEUS CONHECE AS NOSSAS DÚVIDAS",
    "autor": "Dave Dunham",
    "data": "00-00-0000",
    "url": "blog/confianca/deus_conhece_nossas_duvidas.html",
    "imagem": "imgs/blog/duvidas.jpeg",
    "conteudo": "A insegurança em nossa relação com Deus é uma experiência bastante comum. Enquanto muitos de nós podem ser tranquilizados pelo amor de Deus com facilidade, para algumas pessoas, a ansiedade sobre sua salvação pode ser tão intensa que nenhum nível de tranquilização pode proporcionar conforto. Em tais"
    },
    {
    "titulo": "BUSQUE O SENHOR NOS TEMPOS DE ANGÚSTIA",
    "autor": "Paul Tautges",
    "data": "00-00-0000",
    "url": "blog/depressao/busque_o_senhor_nos_tempos_de_angustia.html",
    "imagem": "imgs/blog/tempo-de-Deus.jpeg",
    "conteudo": ""
    },
    {
    "titulo": "PERSEVERANDO ATRAVÉS DA TRISTEZA EM ORAÇÃO",
    "autor": "Kyle Johnston",
    "data": "00-00-0000",
    "url": "blog/depressao/perseverando_atraves_da_tristeza_em_oracao.html",
    "imagem": "imgs/blog/oracao.jpeg",
    "conteudo": ""
    },
    {
    "titulo": "SOLIDÃO",
    "autor": "Anne Dryburgh",
    "data": "00-00-0000",
    "url": "blog/depressao/solidao.html",
    "imagem": "imgs/blog/solidao.jpeg",
    "conteudo": ""
    }
];

// TODO: na versão para celular centralizar a imagem do texto principal
document.addEventListener("DOMContentLoaded", function() {
    const mainTextContainer = document.getElementById('main-text-container');
    const postsContainer = document.getElementById('posts-container');
    
    //const textElement = document.createElement('div');
    mainTextContainer.innerHTML = `
    <a href="${posts[0].url}"> <img class="ilustracao-maintext" src="${posts[0].imagem}" alt="postagem"> </a>
    <div class="content">
	    <h2>${posts[0].titulo}</h2>
	    <p>${posts[0].conteudo}<b><a href="${posts[0].url}"> Ler mais...</a></b></p>
    </div>
    `;
    

    posts.slice(1).forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <a href="${post.url}"> <img class="ilustracao-post" src="${post.imagem}" alt="postagem"> </a>
        <h4><a href="${post.url}">${post.titulo}</a></h4>
            <p>${post.data} <i>${post.autor}</i></p>
        `;
        postsContainer.appendChild(postElement);
    });
});

//<img class="ilustracao-post" src="" alt="postagem"></img>
