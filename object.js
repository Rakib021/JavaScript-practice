let car = {
    name : "bmw",
    model : "500",
    weight : "850kg",
    color: "white", 
    start : function (){
        this.drive();
        console.log("Car has started");
    },
    drive : function (){
        console.log("Car is driving");
    }
};
console.log(car.weight);
console.log(car.name);
console.log(car['model']);
car.start();