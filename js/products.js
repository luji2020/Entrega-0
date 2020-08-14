const ORDER_ASC_BY_COST = "$->$$";
const ORDER_DESC_BY_NAME = "$$->$";
const ORDER_BY_PROD_COUNT = "RR->R";
var productsArray = [];
var minCount = undefined;
var maxCount = undefined;

function soportProduct(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_COST) {
        result = array.sort(function (a,b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });

        }else if (criteria === ORDER_BY_PROD_COUNT){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.productCount);
                let bCount = parseInt(b.productCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
        }
    
        return result;
    }

    document.getElementById(product-list-container).innerHTML = htmlContentToAppend;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_LIST).then(function (resulObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;

            //Poner nombre ascendentes
            productsArray = sortProducts(ORDER_ASC_BY_COST, productsArray);

            //Muestro productos ordenados
            ShowProductsList(productsArray);
        }
    }
});
