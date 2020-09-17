var categoriesArray = [];

// Imágenes ilustrativas 
function showImagesGallery(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-2 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img type="button" onclick="window.open(this.src, '_self')"  class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
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

// Comentarios

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

// Imágenes relacionadas

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            products = resultObj.data;
            var producto = "";
            for (i = 3; i < products.length; i++) {
                producto += `
                <table class="egt">
                <tr>
                    <td>
                        <div class="row">
                            <div class="col-5">
                                <img src="` + products[1].imgSrc + `" alt="` + `" class="img-thumbnail">
                    </div>
                                <div class="col">
                                    <h4 class="mb-1">`+ products[1].name + ` - ` + products[1].cost + ` ` + products[1].currency + `</h4>
                                    <p>` + products[1].description + ` </p>
                                    <a type="button" style="background-color: gray;" class="btn btn-light btn-lg btn-block" href="products.html">Ver producto</a>
                                </div>
                    </td>
                    <td>
                    <div class="row">
                        <div class="col-4">
                            <img src="` + products[2].imgSrc + `" alt="` + `" class="img-thumbnail">
                </div>
                            <div class="col">
                                <h4 class="mb-1">`+ products[3].name + ` - ` + products[3].cost + ` ` + products[3].currency + `</h4>
                                <p>` + products[3].description + ` </p>
                                <a type="button" style="background-color: gray;" class="btn btn-light btn-lg btn-block" href="products.html">Ver producto</a>
                            </div>
                </td>          
                </tr>
                </table>
                <br>
                <br>
                `
            }
            document.getElementById("relatedProducts").innerHTML = producto;

        }
    });
});

