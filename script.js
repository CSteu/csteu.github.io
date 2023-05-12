const generateKeyBtn = document.getElementById("submit-btn");


generateKeyBtn.addEventListener("click", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    const alphanumeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let activationKey = "";
      for (let i = 0; i < 15; i++) {
        activationKey += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
      }
    // Get the data from the input fields
    const data = [
        1, activationKey, 0, 0
    ];

    // Send an AJAX request to the PHP script to insert the data into the database
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "insert.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("data=" + data);
});
