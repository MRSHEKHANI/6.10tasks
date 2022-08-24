// Second bind

function f(){
    console.log(this.name);
}

f = f.bind({name:"Mustafa"}).bind({name: "shekhani"});

f();