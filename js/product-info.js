var categoriesArray = [];
var comments = [];

// Imágenes ilustrativas 
function showImagesGallery(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-2 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;

            let costHTML = document.getElementById("cost");
            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let soldCountHTML = document.getElementById("soldCount");
            let categoryHTML = document.getElementById("category");

            costHTML.innerHTML = category.currency + " " + category.cost;
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            soldCountHTML.innerHTML = category.soldCount;
            categoryHTML.innerHTML = '<a href="category-info.html">' + category.category + '</a>';

            // Muestro las imágenes en forma de galería
            showImagesGallery(category.images);
        }
    });
});


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comments = resultObj.data;
            var comentarios = "";
            for (i = 0; i < comments.length; i++) {
                comentarios += "<br><i class='fas fa-star checked'></i>" + comments[i].score;
                comentarios += "<br>" + comments[i].user;
                comentarios += "<br>" + comments[i].description;
                comentarios += "<br>" + comments[i].dateTime + "<br>";

            }
            document.getElementById("listcomments").innerHTML = comentarios;

        }
    });
});

