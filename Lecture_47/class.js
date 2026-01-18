class Human{
    age=13;
    #wt=76;
    ht=180;

    constructor(newAge,newHeight){
        this.age=newAge;
        this.ht=newHeight;
    }

    get fetchHeight(){
        return this.ht;
    }
    set modifyAge(val){
        this.age=val;
    }

    walking(){
        console.log("I'm Walking & my weight is ",this.#wt);
    }
    running(){
        console.log("I'm Running");
    }

}

let obj = new Human(50,130);
console.log(obj.age);

obj.walking();