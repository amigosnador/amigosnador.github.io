const posts = [
    {
    "titulo": "ONDE BUSCAR SOCORRO QUANDO ESTOU SOFRENDO?",
    "autor": "Julie Ganschow",
    "data": "00-00-0000",
    "url": "blog/sofrimento/onde_buscar_socorro_quando_estou_sofrendo.html",
    "conteudo": `Frequentemente, no sofrimento, buscamos amigos e familiares para compartilhar nossa dor. Contamos com aqueles que amamos e em quem confiamos para nos ajudar durante o período de sofrimento. Podem ser os pais ou um amigo próximo, um pequeno grupo de estudo; queremos contar nossa história`
    },
    {
    "titulo": "CONFIANDO EM DEUS NAS TEMPESTADES DA VIDA",
    "autor": "Shannon Kay McCoy",
    "data": "00-00-0000",
    "url": "blog/confianca/confiando_em_deus_nas_tempestades_da_vida.html",
    "conteudo": "Quando eu era criança crescendo na Carolina do Sul, eu adorava tempestades. Eu observava o vento uivante soprar as folhas dos galhos das árvores e as gotas de chuva baterem na grama sob o céu escuro e cinzento. Se estivéssemos na casa da minha avó, ela nos fazia desligar tudo elétrico."
    },
    {
    "titulo": "CONFIANDO NO TEMPO E NA PROVISÃO DE DEUS",
    "autor": "Andrew Dealy",
    "data": "00-00-0000",
    "url": "blog/confianca/confiando_no_tempo_e_na_provisao_de_deus.html",
    "conteudo": "E quando o pegou, ele o colocou na prisão, entregando-o a quatro esquadrões de soldados para guardá-lo, com a intenção de trazê-lo diante do povo depois da Páscoa. Assim, Pedro estava mantido na prisão, mas a igreja orava fervorosamente por ele a Deus. E quando Herodes estava prestes a trazê-lo para"
    },
    {
    "titulo": "DEUS CONHECE AS NOSSAS DÚVIDAS",
    "autor": "Dave Dunham",
    "data": "00-00-0000",
    "url": "blog/confianca/deus_conhece_nossas_duvidas.html",
    "conteudo": "A insegurança em nossa relação com Deus é uma experiência bastante comum. Enquanto muitos de nós podem ser tranquilizados pelo amor de Deus com facilidade, para algumas pessoas, a ansiedade sobre sua salvação pode ser tão intensa que nenhum nível de tranquilização pode proporcionar conforto. Em tais"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById('posts-container');
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <h3><a href="${post.url}">${post.titulo}</a></h3>
            <p>${post.data}</p>
            <p>${post.autor}</p>
        `;
        postsContainer.appendChild(postElement);
    });
});