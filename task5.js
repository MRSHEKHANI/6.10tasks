// Partial application for login

function askPassword(ok , fail){
    let password = prompt("password?",);
    if(password == "shekhani") ok();
    else fail();
}

let user = {
    name: "mustafa",
    
    login(result){
        console.log(this.name + (result ? "loggedin":"loginfail"));
    }
}

askPassword(()=> user.login(true), ()=> user.login(fail));