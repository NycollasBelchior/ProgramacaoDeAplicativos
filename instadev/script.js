//Banco de dados

var posts = [
    {
        id: 1,

        user: {
            nickname: 'nyck_belchior',
            local: 'Tijucas - SC',
            profileImg: 'https://github.com/NycollasBelchior.png'
        },

        img: 'https://images.pexels.com/photos/38103518/pexels-photo-38103518.jpeg',
        legend: 'Pra minha Namorada Querida!!',
        likes: 49,
        isLike: false,
        data: '2026-09-28T20:42:00',
        comment: [
            {
                id: 1,
                username: 'Oliveira_gb',
                text: "fei pa carai",
                data: '2026-09-28T20:45:00',
            },

            {
                id: 2,
                username: 'Guustaavo',
                text: "Aura Demais!!🔥🔥",
                data: '2026-09-28T20:45:00',
            }
        ]

    },

    {
        id: 1,

        user: {
            nickname: 'senai-tj',
            local: 'Tijucas - SC',
            profileImg: 'imgs/image.png'
        },

        img: 'imgs/senai.png',
        legend: 'Pra minha Namorada Querida!!',
        likes: 49,
        isLike: false,
        data: '2026-09-28T20:42:00',
        comment: [
            {
                id: 1,
                username: 'Oliveira_gb',
                text: "hahaha",
                data: '2026-09-28T20:45:00',
            },

            {
                id: 2,
                username: 'Guustaavo',
                text: "Aura Demais!!🔥🔥",
                data: '2026-09-28T20:45:00',
            }
        ]

    },

]

// FUNÇÕES JS

const feed = document.getElementById('feed');
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal")
const modal = document.getElementById("modalPost")

const botaoPublicar = document.getElementById("botaoPublicar")
let botoesLike = document.querySelectorAll(".likes");


function renderizarPosts() {


    feed.innerHTML = "";

    for (let post of posts) {
        let article = document.createElement("article");

        let commentsHTML = "";
        for (let comments of post.comment) {
            commentsHTML +=
                `
            <p class="comment">
                        <strong>${comments.username}</strong>
                        ${comments.text}
                    </p>
            `;
        }



        article.innerHTML = `
        <header class="post-header">
                    <div class="post-user">
                        <img src="${post.user.profileImg}" alt="">

                        <div>
                            <strong>${post.user.nickname}</strong>
                            <span>${post.user.local}</span>
                        </div>
                    </div>
                    <button class="more">•••</button>
                </header>
                <img src="${post.img}" class="post-img">
                <div class="post-actions">
                    <div>
                            <button class="likes" data-id="${post.id}">
                            ${post.isLike ? "♥" : "♡"}
                            </button>
                        <button>○</button>
                        <button>➤</button>
                    </div>
                    <button>▱</button>
                </div>
                <div class="post-info">
                    <strong>${post.likes} likes</strong>
                    <p>
                        <strong>${post.user.nickname}r</strong>
                        ${post.legend}
                    </p>

                    <a href="">Ver todos os 7 comentarios</a>

                    ${commentsHTML}

                    <span class="post-date">
                        ${post.data}
                    </span>
                </div>
                <br>
                <hr>
        `;

        feed.appendChild(article)
    }

}

openModal.addEventListener("click", () => {
    modal.classList.remove("hidden")
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
})

document.addEventListener("click", (event) => {

    if (event.target.classList.contains("likes")) {

        let postId = event.target.dataset.id;

        let post = posts.find(post => post.id == postId);

        if (post.isLike == false) {

            post.likes++;
            post.isLike = true;

        } else {

            post.likes--;
            post.isLike = false;

        }

        renderizarPosts();
            
    }

});



renderizarPosts();

botaoPublicar.addEventListener("click", () => {

    const imgPost = document.getElementById("imgPost").value;
    const legendPost = document.getElementById("legendPost").value;

    const novoPost = {
        id: posts.length + 1,

        user: {
            nickname: "nyck_belchior",
            local: "Tijucas - SC",
            profileImg: "https://github.com/NycollasBelchior.png"
        },

        img: imgPost,
        legend: legendPost,
        likes: 0,
        isLike: false,
        data: new Date().toISOString(),

        comment: []
    };

    posts.push(novoPost);

    renderizarPosts();

    modal.classList.add("hidden");
});

