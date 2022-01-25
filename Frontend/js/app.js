function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var email = document.Form.email.value;
    var firstname = document.Form.firstname.value;
    var lastname = document.Form.lastname.value;
    var subject = document.Form.subject.value;
    var registered = document.Form.registered.value;
    var description = document.Form.description.value;
    var phone = document.Form.phone.value;
    var address = document.Form.address.value;


    var emailErr = firstnameErr = lastnameErr = subjectErr  =  phoneErr =  registeredErr = addressErr = true;

    if(email == "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {

        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }

// Name
    if(firstname == "") {
        printError("firstnameErr", "Please enter your firstname");
        var elem = document.getElementById("firstname");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(firstname) === false) {
            printError("firstnameErr", "Please enter a valid firstname");
            var elem = document.getElementById("firstname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("firstnameErr", "");
            firstnameErr = false;
            var elem = document.getElementById("firstname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }
    // Name
    if(lastname == "") {
        printError("lastnameErr", "Please enter your lastname");
        var elem = document.getElementById("lastname");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(lastname) === false) {
            printError("lastnameErr", "Please enter a valid lastname");
            var elem = document.getElementById("lastname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("lastnameErr", "");
            lastnameErr = false;
            var elem = document.getElementById("lastname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }
    // Name
    if(subject == "") {
        printError("subjectErr", "Please enter your subject");
        var elem = document.getElementById("subject");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(subject) === false) {
            printError("subjectErr", "Please enter a valid subject");
            var elem = document.getElementById("subject");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("subjectErr", "");
            subjectErr = false;
            var elem = document.getElementById("subject");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }
    // Name
    if(registered == "") {
        printError("registeredErr", "Please enter your registered");
        var elem = document.getElementById("registered");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(registered) === false) {
            printError("registeredErr", "Please enter a valid registered");
            var elem = document.getElementById("registered");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("registeredErr", "");
            registeredErr = false;
            var elem = document.getElementById("registered");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }

    // Name
    if(description == "") {
        printError("descriptionErr", "Please enter your description");
        var elem = document.getElementById("description");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(description) === false) {
            printError("descriptionErr", "Please enter a valid description");
            var elem = document.getElementById("description");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("descriptionErr", "");
            descriptionErr = false;
            var elem = document.getElementById("description");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }


    if(phone == "") {
        printError("phoneErr", "Please enter your phone number");
        var elem = document.getElementById("phone");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[1-10]\d{9}$/;
        if(regex.test(phone) === false) {
            printError("phoneErr", "Please enter a valid 10 digit phone number");
            var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("phoneErr", "");
            phoneErr = false;
            var elem = document.getElementById("phone");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
// Name
    if(address == "") {
        printError("addressErr", "Please enter your address");
        var elem = document.getElementById("address");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /[,#-\/\s\!\@\$.....]/gi;
        if(regex.test(address) === false) {
            printError("addressErr", "Please enter a valid address");
            var elem = document.getElementById("address");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("addressErr", "");
            addressErr = false;
            var elem = document.getElementById("address");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }


    if((emailErr || firstnameErr || subjectErr ||phoneErr || registeredErr || descriptionErr || addressErr) == true) {
        return false;
    }
};