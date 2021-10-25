let student = {
    firstName : "Rakibul",
    lastName : "Islam",
    age : 21,
    id : 2107089,

    name : function (){
        // return this.firstName + " " + this.lastName;
        console.log(this.firstName + " " + this.lastName);
        // console.log("hi my name is");
    }
};
console.log(student.age);
student.name();