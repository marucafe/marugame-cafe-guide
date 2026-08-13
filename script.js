const cafes = [
  {
    id: 1,
    name: "Cafe&Bar TRINITY",
    image: "trinity(1).jpg",
    walk: "丸亀駅から徒歩2分",
    tags: ["PayPay", "Wi-Fi"]
  }
];

const cafeList = document.getElementById("cafeList");
const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag");


// カフェ一覧を表示
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

            <img src="${cafe.image}" alt="${cafe.name}">

            <div class="card-body">

                <h3>${cafe.name}</h3>

                <p class="walk">
                    🚶 ${cafe.walk}
                </p>

                <div class="card-tags">

                    ${cafe.tags.map(tag =>
                    `<span class="small-tag">${tag}</span>`
                    ).join("")}

                </div>

            </div>

        </a>
        `;

    });
}


// 店名検索
searchInput.addEventListener("input", function() {

    const keyword = searchInput.value.toLowerCase();

    const filteredCafes = cafes.filter(cafe =>
        cafe.name.toLowerCase().includes(keyword)
    );

    displayCafes(filteredCafes);

});


// タグ検索
tagButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTag = this.textContent;

        const filteredCafes = cafes.filter(cafe =>
            cafe.tags.includes(selectedTag)
        );

        displayCafes(filteredCafes);

    });

});


// 最初に店舗を表示
displayCafes(cafes);
