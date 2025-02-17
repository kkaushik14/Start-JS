const me = {
    name: "Kauhsik",

    developer() {
        console.log(`${this.name} is planning to build KKOS.`);
    }
}

me.developer()

let withoutBind = me.developer;  //just transferring reference to another variable.
withoutBind();  // it's returned undefined because transferring from one variable to another variable, the context is missing.

let withBind = me.developer.bind({name:"KK"});  // if you really want to give the context, you have to find the previous story like this only.
withBind();
