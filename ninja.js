class Ninja {
    constructor(name){
        this.name = name;
        this.health = 3;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(Ninja.name);
    }
    showStats(){
        console.log(Ninja.name, health, speed, strength);
    }
    drinkSake(){
        this.health += 10;
    }
}
console.log(Ninja.name)