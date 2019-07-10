/*
index page:
- get the data using AJAX from /representative/getlist
- display a table with the list reps.


-THE COMPETENCY REPORT FOR 110 IS UP TO THIS ^  POINT

- CATALOG PAGE
    - SEE THE LIST OF CARS
- CREATE CAR PAGE
    - REGISTER NEW CARS


- REPRESENTATIVES PAGE
    - SEE THE LIST
- CREATE REP PAGE
    - REGISTER NEW REP ON THE SYSTEM


- USE SQLITE OR SQLSERVER
- USE ENTITY FRAMEWORK TO MANAGE DB ACCESS


*/

function getListFromServer() {
  $.ajax({
    url: "/Representatives/GetList",
    type: "GET",
    success: function(data) {
      console.log("Response from server", data);
      displayCatalog(data);
    },
    error: function(error) {
      console.log("Error on com", error);
    }
  });
}

function displayCatalog(list) {
  // implement the logic to show all the cars on the list
  console.log("HELP", list);

  for (var i = 0; i < list.length; i++) {
    var rep = list[i];

    var carContainer = $("#repList");
    var carTemplate = `
            <tr>
                <td>${rep.id}</td>
                <td>${rep.name}</td>
                <td>${rep.lastName}</td>
                <td>${rep.phoneNumber}</td>
            </tr>            
    `;
    carContainer.append(carTemplate);
  }
}

function init() {
  console.log("Initialize Catalog");

  getListFromServer();
}

window.onload = init;
