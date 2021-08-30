//RECUPERATION INFORMATION DU LOCALE STORAGE POUR AFFICHER LE NOM,ORDERID ET PRIX TOTAL A PAYER

function orderIdQuery() {

    localStorage.removeItem("contact");
    localStorage.removeItem("myCard");


    const getOrder = localStorage.getItem("lastOrder");
    let newCartOrder = JSON.parse(getOrder);

    document.getElementById("container").innerHTML = ("");

    const storageOrder = `<div class="row">
    <div class="col-8 col-lg-8 pt-4 pb-3">
      <div class="shadow p-2 mb-2 media border rounded bg-light text-dark">
      <h4>${newCartOrder.contact.firstName} , nous vous remercions pour vos achats !</<h4>
              </div>
            </div>
            </div>
            <div class="row">
    <div class="col-8 col-lg-8 pt-3 pb-3">
      <div class="shadow p-2 mb-2 media border rounded bg-light text-dark">
             <h4>Nous vous confirmons votre commande N° : ${newCartOrder.orderId}</h4>
              </div>
            </div>
            </div>  
            `
    document.getElementById("container").innerHTML += (storageOrder);


    // fonction reduce récuperer prix total à payer
    let htmlPrice = newCartOrder.products.reduce((accumulator, currentValue, index, array) => {
        return accumulator + currentValue.price
    }, 0);
    console.log(htmlPrice);

    const totalPriceOrder = `
        <div class="row">
    <div class="col-8 col-lg-8 pt-3 pb-4">
      <div class="shadow p-2 mb-2 media border rounded bg-light text-dark">
      <h4>Le prix total à payer est de : ${htmlPrice/100},00 €</h4>
              </div>
            </div>
            </div>`

    document.getElementById("container").innerHTML += (totalPriceOrder);

};

orderIdQuery()