const cafes = [
  {
    id: 1,
    name: "Cafe Sample",
    image: "https://placehold.co/600x400?text=Cafe+Photo",
    tags: ["Wi-Fi", "PayPay", "コーヒー"]
  }
];

const cafeList = document.getElementById("cafeList");

function displayCafes(list) {

    cafeList.innerHTML = "";

    list.forEach(cafe => {

        cafeList.innerHTML += `
        <a href="cafe.html?id=${cafe.id}" class="card">

            <img src="${cafe.image}" alt="${cafe.name}">

            <div class="card-body">

                <h3>${cafe.name}</h3>

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

displayCafes(cafes);
