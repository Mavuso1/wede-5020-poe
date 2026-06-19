const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue = searchInput.value.toLowerCase();

        const products = document.querySelectorAll(".product-card");

        products.forEach(function (product) {

            const productName = product.textContent.toLowerCase();

            if (productName.includes(searchValue)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

}

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightbox.style.display = "block";
        lightboxImg.src = image.src;

    });

});

if (closeBtn) {

    closeBtn.addEventListener("click", function () {

        lightbox.style.display = "none";

    });

}

const mapContainer = document.getElementById("map");

if (mapContainer) {

    const map = L.map("map").setView([-25.1146, 29.0434], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker([-25.1146, 29.0434])
        .addTo(map)
        .bindPopup("Amani Gaming Hub - Siyabuswa B")
        .openPopup();

}