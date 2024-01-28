function yaaaaaaaaaaaa(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let number = document.getElementById('number').value;

    let usercheck = /^[A-Za-z]+$/; 
    let emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let passwordcheck =  /^[A-Za-z]\w{7,14}$/;
    let numbercheck =  /^[0-9]{11}$/;

    if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML="";
    }
    else{
        document.getElementById('usererror').innerHTML="**invalid username";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML="";
    }
    else{
        document.getElementById('emailerror').innerHTML="**invalid email";
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML="";
    }
    else{
        document.getElementById('passworderror').innerHTML="**invalid password";
        return false;
    }

    if(numbercheck.test(number)){
        document.getElementById('numbererror').innerHTML="";
    }
    else{
        document.getElementById('numbererror').innerHTML="**invalid number";
        return false;
    }

    if(usercheck.test(username) && emailcheck.test(email) && passwordcheck.test(password) && numbercheck.test(number)){
        swal("Good job!", "Your are now login", "success")
        // alert("Your are now login")
        return false;
    }
    else{
        alert("invalid")
        return false;
    }
}