//recupération chaine requète url
const QueryProduct = window.location.search;
console.log(QueryProduct);

//recup l'ID
const id = QueryProduct.slice(4);
console.log(id);
//=========================================
//fonction fetch avec récupération de l'id 

async function myCam() {
    await fetch("http://localhost:3000/api/cameras/" + id)
        .then((response) => {

            return response.json()
        })
        .then((data) => {

            //injection ID et api dans HTML                         
            console.log(data);
            // boucle et injection de la variable  pour "lenses options", O pour options
            let l = `<form>
            <label for="option_produit">Lentilles</label>
            <select name="opt_product" id="opt_product">`

            for (let O = 0; O < data.lenses.length; O++) {
                l += `                 
            <option value="${data.lenses[O]}">${data.lenses[O]}</option>   
            `
            }
            l += `</select>
            </form>`
                //injection de la variable html produit vers l'HTML 
            let html = `<div class="row">
                  <div class="col-12 col-lg-12 pt-5 pb-5">
                    <div class="media border rounded bg-light text-dark">
                    <div id="camLenses" class="media-body text-center pt-3 p-3">                   
                      <img id="imageUrl"  class="img-fluid" src=${data.imageUrl} width="500" height="350" alt="camera" />              
                           <h4 id="name">${data.name}</h4>
                           <h5>Prix : <span id="price">${data.price /100},00 € </span></h5>                               
                           <p id="description">${data.description}</p>
                          
                          ${l}
                           
                          <span><label for="quantitées_produits">quantitée</label><input id="input_quantity" type="number" class="input" value"1" min="0" max="10"  pt-3 ></span>
                         <p><input  onclick="addItem()"  class="btn btn-success rounded-borders" type="submit" name="buttonGet"></p>
                         
                              </div>
                            </div>
                          </div>
                          </div>`

            document.getElementById("container").innerHTML = html
            return data
        });
};
myCam();


//config et recuperation de la valeur du btn submit
let qtyProduct = '';
let btnProduct = '';

function addItem() {
    fetch("http://localhost:3000/api/cameras/" + id)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log("toto");
            qtyProduct = parseInt(document.getElementById("input_quantity").value);

            let myCard = localStorage.getItem("myCard");

            let parseCard = [];
            if (myCard !== null) {
                parseCard = JSON.parse(myCard);
            };

            let lenses = document.getElementById("opt_product").value;

            let filterCArt = parseCard.filter(function(cam) {

                return (cam._id !== data._id && cam.lenses !== lenses) || (cam._id === data._id && cam.lenses !== lenses);

            });
            console.log(lenses);

            console.log(parseCard);
            let jsonParseCard = JSON.stringify(filterCArt);
            localStorage.setItem("myCard", jsonParseCard)

            let n = 0;
            while (n < qtyProduct) {
                addCard();
                n++;
            };

            alert("Ajout Produit");
            console.log(n);
        })
};
//================================================== 
// Ajouter la selection avec l'option lenses
//id du produit 
function addCard() {
    fetch("http://localhost:3000/api/cameras/" + id)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.lenses = document.getElementById("opt_product").value;

            let myCard = localStorage.getItem("myCard");
            //**********************************************/

            //condition pour le local storage================================
            //si le localstorage est vide alors je crée un variable carstorage qui contient un objet = la valeur 'data'
            if (myCard === null) {
                let cartStorage = [data];
                //================================================               
                //création variable pour conversion en string
                let jsonCard = JSON.stringify(cartStorage);
                //envois de la clé et de la valeur 
                localStorage.setItem("myCard", jsonCard);
                //sinon 
            } else {
                let parseCard = JSON.parse(myCard);

                parseCard.push(data);

                let jsonParseCard = JSON.stringify(parseCard);
                localStorage.setItem("myCard", jsonParseCard);
            }

        });
};


















































// //localStorage.setItem(key,valeur);

// console.log(myJsonData);
// //==0-verifier si la valeur existe(condition)==== 
// //if (typeof("myJsonData") !== "undefined") {
// // Code for localStorage/sessionStorage.//
// //} else {
// //   Sorry!No Web Storage support..
// //}
// if (myJsonData("localStorage")) {
// Yippee! We can use localStorage awesomeness
// } else {
//     // Too bad, no localStorage for us
//     myJsonData = [];
//     console.log(myJsonData);
//     myJsonData.push(dataObj)
// }

// alert(localStorage.getItem("myJsonData")); // affiche "valeur"
// //localStorage.setItem("myJsonData", json.stringify(dataObj));
// //document.getElementById("demo").innerHTML = localStorage.getItem("name");
// localStorage.getItem(myJsonData); //
// //======================================================================

// let arrayProduct = [
//     { imageUrl: data.imageUrl },
//     { name: data.name },
//     { lenses: data.lenses },
//     { price: data.price / 100 }
// ];

//let userFullnames = users.map(function(element){
//   return `${element.firstName} ${element.lastName}`;
//})