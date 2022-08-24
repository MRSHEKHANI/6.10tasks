// Fix a function that loses "this"

function askPassword(ok, fail){
    let password = prompt("Password?", );
    if(password == "shekhani")ok();
    else fail();
}

let user = {
    name:"Mustafa",

    loginOK(){
        console.log(`${this.name} logged in success`);
    },

    loginFail(){
        console.log(`${this.name} login failed`);
    },
}

askPassword(user.loginOK.bind(user), user.loginFail.bind(user));

// using arrow function

function askPassword(ok, fail){
    let password = prompt("Password?", );
    if(password == "shekhani")ok();
    else fail();
}

let user2 = {
    name:"Mustafa",

    loginOK(){
        console.log(`${this.name} logged in success`);
    },

    loginFail(){
        console.log(`${this.name} login failed`);
    },
}

askPassword(()=> user2.loginOK , ()=> user2.loginFail);