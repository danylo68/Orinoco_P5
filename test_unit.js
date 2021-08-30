// function1 2 à 3 // product_app.js   /////////////////////////////
// La fonction retourne l'adresse l'Url du document  ///////////// 
const QueryProduct = window.location.search;
console.log(QueryProduct);


// function2 6 à 7 // product_app.js  //////////////////
// la fonction retourne un morceau d'objet ou une longueur 
// d'adresse en fonction de l'indice fournit////////////
const id = QueryProduct.slice(4);
console.log(id);



// function3   82 à 86 // product_app.js //////////////////////////////////////////////////////////////////////
// ========================selection des caméras et des ID============================================ 

let filterCArt = parseCard.filter(function(cam) {

    return (cam._id !== data._id && cam.lenses !== lenses) || (cam._id === data._id && cam.lenses !== lenses);

});


// function4  3 à 14 // cart.js/////////////////////////////////////////////////////////////////////
//=======================Cumul de produiy par colonne=================================
// 
function removeDublon(products) {
    let cleanProducts = []
    console.log(products);
    for (const product of products) {
        if (!cleanProducts.some(p => p._id === product._id && p.lenses === product.lenses)) {

            cleanProducts.push(product)
            console.log(cleanProducts);
        }

    }
    return cleanProducts
};






// function5 17 à 36// cart.js ///////////////////////////////////////////////////////////
// =====================function compteur produit quantités===============================
// s
function countProduct(products, cleanProducts) {
    let cleanProductsWithCounter = []

    for (const cleanProduct of cleanProducts) {
        let counter = 0
        for (const product of products) {
            if (cleanProduct._id === product._id && cleanProduct.lenses === product.lenses) {
                counter++;
            }
            cleanProduct.counterPrice = product.price * counter
            cleanProduct.counter = counter

        }
        cleanProductsWithCounter.push(cleanProduct)
    }

    return cleanProductsWithCounter
};



// function6   45 à 48 // cart.js //////////////////////////////////////////////////////////////
//====supprime les produits selectionnés ========  fonction poubelle produit===============
for (let t = 0; t <= newCartProduct.length; t++) {

    if (newCartProduct[t]._id === _id && newCartProduct[t].lenses === lenses) {

        newCartProduct.splice(t, 1)

        break;
    }
}
alert("suprimé du panier");



// function7   88 à 91 // cart.js////////////////////////////////////////////////////////
// === retourne  les valeurs additionné avec accumulator et la valeur courante =========
let accumulatorProduct = cartProduct.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue.price
}, 0);
console.log(accumulatorProduct);




// function8   138 à 131 // cart.js//////////////////////
// ========== retourne un objet avec les ID's ===========
const products = idProduct.map(obj => {
    return obj._id
})
console.log(products);


// function9 149 à 150 // cart.js////////////////////////////////
// ============== Récupère les informations contenus dans les inputs de formulaire =====
const formData = new FormData(formElemt);
const formContact = Object.fromEntries(formData);