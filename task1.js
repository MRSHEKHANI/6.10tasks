// Bound function as a method

function f(){
    console.log(this);
}

let user = {
    g: f.bind(null)
}

user.g();