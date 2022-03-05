function returnUsersName() {
    let firstName = document.getElementById("firstName").value;
    let secondName = document.getElementById("secondName").value;

    if (document.getElementById("gender").checked) {
        var gender = "female";
    } else {
        var gender = "male";
    }

    if (gender === "female") {
        alert("Your name is " + firstName + " " + secondName + "uuuray you are female");
    } else if (gender === "male") {
        alert("Your name is " + firstName + " " + secondName + "uuuray you are male");
    }
}