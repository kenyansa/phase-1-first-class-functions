function receivesAFunction(sky) {
    sky();
}

function returnsANamedFunction(){
    return function fn() {
        console.log("This is a named function");
    };
} 

function returnsAnAnonymousFunction(){
    return () => console.log("Hello world");
}