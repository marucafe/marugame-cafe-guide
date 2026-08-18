const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);const cafes = [
    {
        id: 1,
        name: "Cafe&Bar TRINITY",
        image: "trinity(1).jpg",
        walk: "丸亀駅から徒歩2分",
        tags: ["PayPay", "Wi-Fi"]
    },

    {
        id: 2,
        name: "yaso（夜想）",
        image: "yaso.jpg",
        walk: "丸亀駅から徒歩2分",
        tags: []
    },

    {
        id: 3,
        name: "みどりや喫茶店",
        image: "midoriya.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["駐車場", "モーニング", "テイクアウト"]
    },

    {
        id: 4,
        name: "TANGIERS CAFE",
        image: "tangiers.jpg",
        walk: "丸亀駅から徒歩5分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 5,
        name: "Em Coffee",
        image: "emcoffee.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 6,
        name: "遊心夢楽",
        image: "yushinmuraku.jpg",
        walk: "丸亀駅から徒歩8分",
        tags: ["ランチ", "PayPay", "Wi-Fi"]
    },

    {
        id: 7,
        name: "Food&Bar アフタヌーンブレーク307",
        image: "afternoonbreak307.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: []
    },

    {
        id: 8,
        name: "ボヌール",
        image: "bonheur.jpg",
        walk: "丸亀駅から徒歩18分",
        tags: ["モーニング", "テイクアウト", "PayPay"]
    },

    {
        id: 9,
        name: "キッチンかぷりす",
        image: "caprice.jpg",
        walk: "丸亀駅から徒歩19分",
        tags: ["モーニング", "ランチ", "駐車場"]
    },

    {
        id: 10,
        name: "ヨーロピアン珈琲 長崎屋",
        image: "nagasakiya.jpg",
        walk: "丸亀駅から徒歩27分",
        tags: ["駐車場", "PayPay", "Wi-Fi"]
    },

    {
        id: 11,
        name: "macocco's life Cafe & Space",
        image: "macoccos.jpg",
        walk: "丸亀駅から徒歩30分",
        tags: ["ランチ", "デザート", "駐車場", "テイクアウト", "PayPay"]
    },

    {
        id: 12,
        name: "喫茶ぺい",
        image: "kissa_pei.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: []
    },

    {
        id: 13,
        name: "みきcafe",
        image: "mikicafe.jpg",
        walk: "丸亀駅から徒歩4分",
        tags: ["モーニング", "駐車場", "PayPay"]
    },

    {
        id: 14,
        name: "カフェ・ラ・トープ",
        image: "cafe_la_taupe.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["テイクアウト"]
    },

    {
        id: 15,
        name: "ミチカケ製菓店",
        image: "michikake.jpg",
        walk: "丸亀駅から徒歩3分",
        tags: ["デザート"]
    },

    {
        id: 16,
        name: "富屋珈琲店",
        image: "tomiya.jpg",
        walk: "丸亀駅から徒歩6分",
        tags: ["モーニング", "夜カフェ", "駐車場", "PayPay"]
    }
];


const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// ==============================
// カフェ一覧を表示
// ==============================

function displayCafes(list) {

    cafeList.innerHTML = "";

    if (list.length === 0) {

        cafeList.innerHTML = `
            <p class="no-result">
                該当する店舗がありません。
            </p>
        `;

        return;
    }


    list.forEach(cafe => {

        cafeList.innerHTML += `

            <a href="cafe.html?id=${cafe.id}" class="card">

                <img
                    src="${cafe.image}"
                    alt="${cafe.name}"
                >

                <div class="card-body">

                    <h3>${cafe.name}</h3>

                    <p class="walk">
                        🚶 ${cafe.walk}
                    </p>

                    <div class="card-tags">

                        ${cafe.tags.map(tag => `
                            <span class="small-tag">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                </div>

            </a>

        `;

    });

}


// ==============================
// 店名検索
// ==============================

searchInput.addEventListener("input", function() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCafes = cafes.filter(cafe =>

        cafe.name
        .toLowerCase()
        .includes(keyword)

    );


    displayCafes(filteredCafes);

});


// ==============================
// タグ検索
// ==============================

tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag =
            this.textContent.trim();


        const filteredCafes = cafes.filter(cafe =>

            cafe.tags.includes(selectedTag)

        );


        displayCafes(filteredCafes);

    });

});


// ==============================
// 最初に全店舗を表示
// ==============================

displayCafes(cafes);
