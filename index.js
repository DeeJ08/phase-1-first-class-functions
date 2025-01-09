function receivesAFunction(Spy) {
    Spy();
}

function returnsANamedFunction() {
    return nameFunction;
   function nameFunction() {
   }
} 

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}

