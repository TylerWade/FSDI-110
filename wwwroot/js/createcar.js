function saveCar() {
  console.log("Creating new car");

  var make = $("#txtMake").val();
  var model = $("#txtModel").val();
  var year = $("#txtYear").val();
  var description = $("#txtDescription").val();
  var color = $("#txtColor").val();
  var hp = $("#txtHP").val();
  var rentPrice = $("#txtRentPrice").val();
  var picture = $("#txtPicture").val();
  var gasMilage = $("#txtGasMilage").val();
  var passengers = $("#txtPassengers").val();

  //validation here

  var newCar = {
    make: make,
    model: model,
    year: year,
    description: description,
    color: color,
    hp: hp,
    rentPrice: rentPrice,
    picture: picture,
    gasMilage: gasMilage,
    passengers: passengers
  };

  $.ajax({
    url: "/catalog/CreateCar",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(newCar),
    success: function(data) {
      console.log("Response from server", data);
    },
    error: function(error) {
      console.log("Error on com", error);
    }
  });
}

function init() {
  console.log("Init create car page");

  //hook the events
  //$("#btnSave").click(saveCar());
}

window.onload = init;

/// c# microsoft
/// Windows
/// MS Sql server
///Sql Lite
