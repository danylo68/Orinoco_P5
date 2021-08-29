
//requet get fetch pour appel des produits de l'API   ////////////
function callProduct() {

fetch("http://localhost:3000/api/cameras/")
.then((response) => {
return response.json() 

})

.then((data) => {
  
 for(let i= 0; i < data.length; i++)
     
{
   
    let html = `<div class="row">
                  <div class="col-12 col-lg-8 pt-5 pb-5">
                    <div class="media border rounded bg-light text-dark">
                    <div id="camLenses" class="media-body text-center pt-3 p-3">
                      <img id="imageUrl" src=${data[i].imageUrl} width="400" height="350" alt="camera" />
                       <h5 id="name">${data[i].name}</h5>
                         <p id="price">${data[i].price /100} € </p>
                         <p id="lenses">${data[i].lenses}</p>
                         <p id="description">${data[i].description}</p>
                        <a href="./produit.html?id=${data[i]._id}" class="btn btn-block btn-outline-dark">Selection</a>
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
 
 };
 
 callProduct()

 
 
 
 
 





    
      



