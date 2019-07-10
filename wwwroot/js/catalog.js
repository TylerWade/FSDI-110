function getCatalogFromServer() {
  $.ajax({
    url: "/Catalog/GetCatalog",
    type: "GET",
    success: function(data) {
      console.log("Response from server", data);
      displayCatalog(data);
    },
    error: function(data) {
      console.log("Error on com", error);
    }
  });
}

function displayCatalog(list) {
  // implement the logic to show all the cars on the list
  console.log("HELP", list);

  for (var i = 0; i < list.length; i++) {
    var car = list[i];

    var carContainer = $("#carList");
    var carTemplate = `
        <div class="card" style="width: 18rem;" id="item">
            <img src="${car.picture}" class="card-img-top">
            <h5 class="card-title">${car.make} ${car.model}</h5>  
            <label class="card-text">${car.description}</label>
            <br>
            <h6 class="card-text">Cargo:${car.cargoSpace} <br> HrsPrs:${
      car.hp
    }</h6>
            <br>
            <h4 class="card-text">Price:${car.rentPrice}</h4>
            <button onclick="addToCart(${
              car.id
            })" class="btn btn-sm btn-info btn-add">Select</button>
        </div>`;
    carContainer.append(carTemplate);
  }
}

function init() {
  console.log("Initialize Catalog");

  getCatalogFromServer();
}

window.onload = init;
