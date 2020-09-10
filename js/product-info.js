var categoriesArray = [];
function showImagesGallery(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
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

            costHTML.innerHTML = category.cost;
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            soldCountHTML.innerHTML = category.soldCount;
            categoryHTML.innerHTML = category.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
});


