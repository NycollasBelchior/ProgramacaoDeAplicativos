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

    }
]

// FUNÇÕES JS

const feed = document.getElementById('feed');

function renderizarPosts() {
    feed.innerHTML = "";

    for (let post of posts) {
        let article = document.createElement("article");

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
                        <button>♡</button>
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

                    <p class="comment">
                        <strong></strong>
                        blalbalbalblalb BLALBALALBLALB blalbalblabla cu
                    </p>

                    <span class="post-date">
                        ${post.data}
                    </span>
                </div>
        `;

        feed.appendChild(article)
    }

}

renderizarPosts();