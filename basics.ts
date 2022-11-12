// const data:number[]=[1 ,2,2,"f"];
// const data2:string[] = ["", "" , 2];
// const mix : (number| string)[]=["" , 1];
// console.log(mix)


// type User={
//     name:string
//     _id:number
// }

// type cust ={
//     username:string 
//     _id:string
// }

// const myAdmine :User | cust = {username:"vivek" , _id:"333"};
// console.log(myAdmine);

 



// let oddNos: 3 | 5 | 7 | 9 ;
// oddNos=3;
//oddNos=2;//(not alloewd to do so , because 2 is not defined in advance)



// function getId(id:number | string){
//     if(typeof id === "string"){
//         id.toLowerCase()
//     }

//     if(id === "number"){
//          id+2;
//     }
// }




// tuples
// let tUser:[string , number , boolean]
// tUser = ["vivek" , 121 , true];

// another way of writing this code
// let tUser1:[string , number,boolean]=["vivek",212, true]

// NOTE:-- we are not alloewd to push any new data type in tuple .for example
// type User = [number , string];
// const newUser:User=[112 , "example@gmail.com"];
// newUser[1]="vk.com";
// newUser.push(true);





// Enums
// const enum SeatChoice {
//     Lower=10,
//     Middle,
//     Upper=44,
//     Side
// }
// const seat = SeatChoice.Middle;

// enum with string
// if we are using with string then we need to assign string value to all the property one by one , because strings can not be incremented as number.
// const enum SeatChoice {
//     Lower1="lower",
//     Middle1="middle",
//     Upper1="upper",
//     Side1="side"
// }
// const seat1 = SeatChoice.Middle1;

//but if we define a number after string then it assign incremented values to next all
// const enum SeatChoice {
//     Lower2="lower",
//     Middle2=12,
//     Upper2,
//     Side2
// }
// const seat2= SeatChoice.Middle2;





// interface
// interface User{
//     readonly dbId:number, //can't modifiable and rewriteable
//     email:string,
//     userid:number,
//     DOB?:number    //making this property optional
//     //Trail:() => string   // function
//     Trail():string     //another way of writing function 
//     getCoupon(couponname:string):number
// }
//REOPENING THE INTERFACE(means more property to interface)
//for this we have to do something like this;-
// interface User{
//     githubToken:string
// }

// //interface with inheritance
// interface Admin extends User{
//     role:"admin" | "ta" | "learner"
// }


// const admin : User={
// dbId:12,
// email:"ex@gmail.com" ,  // now these two property defination is compulsary , we can not leave them empty as we are doing in the case of type
// userid:1234,
// Trail:() => {return "trail started"},
// getCoupon:(name:"discount") => {
//     return 10
// },
// githubToken:"github"
// }
// //admin.dbId:33 //Not Allowed
// role:"admin"





// CLASSES
// class User{
//     email:string //(public by default)
//     name:string
//     private readonly city:string = "Hazaribagh" // instead of using private keyword we can also use "#" :- shortcut of private
//     constructor(email:string , name:string){
//         this.email=email;
//         this.name=name
//     }
// }
// const demo = new User("ex@gmail.com" , "rohan")
// console.log(demo);
//demo.city //now this city is not accessable out side the class as it is marked as private , which accessable only within the class




// CLASS(getters and setters)


export{}