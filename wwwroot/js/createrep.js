function save() {
  console.log("Creating New Rep");
  // get data
  var id = results[i].id;
  var name = $("#txtFirstName").val();
  var lastName = $("#txtLastName").val();
  var phoneNumber = $("#txtNumber").val();
  // create object
  var newRep = {
    id: id,
    name: name,
    lastName: lastName,
    phoneNumber: phoneNumber
  };
  // send ajax request
  $.ajax({
    url: "/representatives/save",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(newRep),
    success: function(data) {
      console.log("Response from server", data);
    },
    error: function(error) {
      console.log("Error on com", error);
    }
  });
  // url: /representatives/save
}

function init() {
  console.log("init create rep");

  // hook click event to save btn
  //$("#btnSave").click(save());
  // call save function
}

window.onload = init;
