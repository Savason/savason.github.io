window.addEventListener('load', function () {
    //actions to form inputs which show in the browser
    //console entered value.
    var name_input = document.getElementsByClassName('name_input')[0];
    var email_input = document.getElementsByClassName('email_input')[0];
    var message_input = document.getElementsByClassName('message_input')[0];
    name_input.addEventListener('blur', function () {
        console.log("Value of name's input = " + name_input.value);
    });
    email_input.addEventListener('blur', function () {
        console.log("Value of email's input = " + email_input.value);
    });
    message_input.addEventListener('blur', function () {
        console.log("Value of message's input = " + message_input.value);
    });
});