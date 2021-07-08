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
Ninja.showStats
class Sensei extends Ninja{
    constructor(name){
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strenght = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake
        console.log("There are two types of people in this world, a smart fella and a fart smella")
    }
}