function outerFunction(){
    let name="Mozilla";

    function innerFunction(){
        console.log(name);
    }

    return innerFunction;
}

let inner = outerFunction();


inner();