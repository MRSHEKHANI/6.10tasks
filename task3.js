// Function property after bind

function sayHi(){
    console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
    name:"shekhani"
})

console.log(bound.test);