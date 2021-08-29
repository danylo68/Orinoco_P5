//requet get fetch

fetch("http://localhost:3000/api/cameras/")
    .then((response) => {
        return response.json()

    })

.then((data) => {

        for (let i = 0; i < data.length; i++)

        {
            let html = `<div class="row">
                  <div class="col-sm-12 col-lg-sm-8 pt-5 pb-5">
                    <div class="media border rounded bg-light text-dark">
                    <div id="camLenses" col-sm-10 class="media-body text-center pt-3 p-3">
                      <img id="imageUrl" class="img-fluid" src=${data[i].imageUrl} width="450" height="350" alt="camera" />
                       <h2 id="name">${data[i].name}</h2>
                       <h5 id="lenses">${data[i].lenses}</h5>
                         <p id="price">${data[i].price/100}, 00€</p>                       
                         <h5 id="description">${data[i].description}</h5>
                        <a href="./produit.html?id=${data[i]._id}" class="btn-lg btn-dark pt-2 p-2 rounded-borders">Selection</a>
                       </div>
                     <div>
                      </div>
                          </div>`
            document.getElementById("container").innerHTML += html;
        }

    })
    .catch(function(err) {
        // Une erreur est survenue

    })