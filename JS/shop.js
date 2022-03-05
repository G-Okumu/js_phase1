function guideUser() {
    let yearOfBirth = parseInt(document.getElementById("yearOfBirth").value);
    let monthOfBirth = parseInt(document.getElementById("monthOfBirth").value);
    let dayOfBirth = parseInt(document.getElementById("dayOfBirth").value);

    // day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    //formular for calculating the century = (yy-1)/100+1
    let centuryBorn = (yearOfBirth - 1) / 100 + 1;
    let dayOfTheWeekBorn = (((centuryBorn / 4) - 2 * centuryBorn - 1) + ((5 * yearOfBirth / 4)) + ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7;

    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"];
    let akanMale = ["George", "Mohammud", "Joshua", "Muraya", "Moses", "Jacob", "Tom"];
    let akanFemale = [];
    if (document.getElementById("gender").checked) {
        var gender = "female";
    } else {
        var gender = "male";
    }

    if (Math.floor(dayOfTheWeekBorn) == 0 && gender === "male") {
        alert("alert your were born on " + dayOfWeek[0] + "your akan name is " + akanMale[0]);
    } else if (Math.floor(dayOfTheWeekBorn) == 1 && gender === "male") {
        alert("alert your were born on " + dayOfWeek[1] + "your akan name is " + akanMale[1]);
    } else if (Math.floor(dayOfTheWeekBorn) == 2 && gender === "male") {
        alert("alert your were born on " + dayOfWeek[2] + " your akan name is" + akanMale[2]);
    } else if (Math.floor(dayOfTheWeekBorn) == 3 && gender === "male") {
        alert("alert your were born on " + dayOfWeek[3] + "your akan name is " + akanMale[3]);
    } else if (Math.floor(dayOfTheWeekBorn) == 4 && gender === "male") {
        alert("alert your were born on " + dayOfWeek[4] + " your akan name is" + akanMale[4]);
    } else if (Math.floor(dayOfTheWeekBorn) == 5 && gender === "male") {
        alert("alert your were born on " + dayOfWeek[5] + "your akan name is " + akanMale[5]);
    } else if (Math.floor(dayOfTheWeekBorn) == 6 && gender === "male") {
        alert("alert your were born on " + dayOfWeek[6] + "your akan name is " + akanMale[6]);
    } else if (Math.floor(dayOfTheWeekBorn) == 0 && gender === "female") {
        alert("alert your were born on " + dayOfWeek[0] + "your akan name is " + akanFemale[0]);
    } else if (Math.floor(dayOfTheWeekBorn) == 1 && gender === "female") {
        alert("alert your were born on " + dayOfWeek[1] + "your akan name is " + akanFemale[1]);
    } else {
        alert("You werent born");
    }

}