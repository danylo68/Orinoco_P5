
let objetLenses = document.getElementById("lenses");

let getLenses = document.getElementById("getLenses");


async function fetchLenses() {
   fetch("http://localhost:3000/api/cameras")
   .then(function(res) {
    if (res.ok) {
       return JSON();
        
    }  
   })
   .then(function (value) {
    console.log(value) 
    .getElementById("lenses")
    
   })
   .catch(function (err) {
       // Une erreur est survenue
   });
   
   const showLenses = async() => { await fetchLenses();
   
   results.innerHtml
   
   }
   
}


  