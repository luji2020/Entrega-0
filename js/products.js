const ORDER_ASC_BY_COST = "A"; // Ascendente
const ORDER_DESC_BY_COST = "D"; // Descendente
const ORDER_BY_PROD_COUNT = "Rel."; // Relevancia
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

// Ordenar products
function sortProduct(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_COST) {
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_COST) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PROD_COUNT) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.SoldCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}

// Función muestra products
function showProductsList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductsArray.length; i++) {
        let products = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(prodcut.soldCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.soldCount) <= maxCount))) {

            htmlContentToAppend += `
                <div class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-3">
                            <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ category.name + `</h4>
                                <small class="text-muted"><b>` + category.soldCount + ` Vendidos</b></small>
                            </div>
                            <div>
                                <p>`+ category.description + `</p>
                                <strong>
                                <p><b>Precio:</b> US$ ` + category.cost + `</p>
                                </strong>
                            </div>     
                        </div>
                    </div>
                </div>
                `
            document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
        }
    }
}

function sortAndShowCategories(sortCriteria, productsArray) {
    currentSortCriteria = sortCriteria;

    if (categoriesArray != undefined) {
        currentProductsArray = ProductsArray;
    }

    currentProductsArray = sortCategories(currentSortCriteria, currentProductsArray);

    //Muestro products ordenados
    showProdcutsList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CATEGORIES_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            sortAndShowCategories(ORDER_ASC_BY_COST, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function () {
        sortAndShowCategories(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function () {
        sortAndShowCategories(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function () {
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function () {
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    // Filtra la cantidad de products 
    document.getElementById("rangeFilterCount").addEventListener("click", function () {

        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
            minCount = parseInt(minCount);
        }
        else {
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
            maxCount = parseInt(maxCount);
        }
        else {
            maxCount = undefined;
        }

        showCategoriesList();
    });
});
