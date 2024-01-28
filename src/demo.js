const mongoose = require("mongoose");
const { findById } = require("../../Students-Model-Implementation---Backend-Module-Contest-Jan-14-slot--1---dsbcqvqi39pq/models/Course");

mongoose.connect("mongodb://localhost:27017/student")
.then( () => console.log("connection is successfully...") ) 
.catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require : true,
    },
    age: Number,
    city: String,
    mo_No: Number,
    email: String,
});

const User = new mongoose.model("User",userSchema);

const createDocument = async () => {
    try{
        const userData1 = new User({
            name: "amit",
            age: 37,
            city: "Ambedkar Nagar",
            mo_No: 6478646742323,
            email: "amit123@gmail.com",
        });

        const userData2 = new User({
            name: "sumit",
            age: 26,
            city: "Ambedkar Nagar",
            mo_No: 647864622338,
            email: "ksumit123@gmail.com",
        });

        const userData3 = new User({
            name: "harsh",
            age: 37,
            city: "Ambedkar Nagar",
            mo_No: 6478646734,
            email: "harsh123@gmail.com",
        });

        const userData4 = new User({
            name: "Akhil",
            age: 32,
            city: "Ambedkar Nagar",
            mo_No: 647864684746,
            email: "Akhil123@gmail.com",
        });

        const userData5 = new User({
            name: "aalu",
            age: 37,
            city: "Ambedkar Nagar",
            mo_No: 6478646798,
            email: "aalu123@gmail.com",
        });
        
        const result = await User.insertMany([userData1, userData2, userData3, userData4, userData5]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// createDocument();

const getData1 = async () => {
    try{
        const result = await User

        //  Comparison Query Operators =>

        // .find({ age: {$eq : 26} })  ==
        // .find({ age: {$ne : 26} })  !=
        // .find({ age: {$lt : 26} })  >
        // .find({ age: {$lte : 26} })  >=
        // .find({ age: {$gt : 26} })   <
        // .find({ age: {$gte : 26} })   <=
        // .find({ name: {$in : ["Anil","Suraj","Kapil","Aryan","Sunil","Adarsh","Atul"]} })   any value where campirsion multi value in arrayit is find
        // .find({ age: {$nin : 26} })  the specified field value is not in the specified array or the specified field does not exist.
        .select({name: 1});
        //.limit(1);
        console.log(result);
    }catch(err){
        console.log(err);
    }
} 
//getData1();

const getData2 = async () => {
    try{
       const result2 = await User

        //  Logical Query Operators

        // .find({$or : [{name : "Atul"},{city: "Ambedkar Nagar"}]})   ||
        // .find({$and : [{name : "Aryan"},{city: "Ambedkar Nagar"}]})  &&
        // .find({age: {$not : {$eq : 65 }}}) !   selects the documents that do not match the <operator-expression>. This includes documents that do not contain the field.
        // .find( {$nor :[ {age: {$eq : 26 }}, {name : "Sural"}]})  $nor performs a logical NOR operation on an array of one or more query expression and selects the documents that fail all the query expressions in the array.
        .select({name: 1});
        console.log(result2);
    }catch(err) {
        console.log(err);
    }
}
 getData2();

const getData3 = async () => {
    try{
        const result3 = await User
        .find({ city: "Ambedkar Nagar"})
        // .countDocuments(); // it is a count your document that how many document in your collection
        .select({name: 1})
        .sort({ name: -1});
        console.log(result3);
    }catch(err){
        console.log(err);
   
    }
}
// getData3();

// update the documnet

const updateDocument = async (_id) => {
    try{
        const result = await User.findByIdAndUpdate({_id}, {
           $set: {
            name:"Suraj"
           }
        },{
            new : true,
            useFindAndModify : false,
          } );
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}
// updateDocument("65abe7e5c3d3d30a52f56b71");

// Delete  the documnet

const deleteDocument = async (_id) => {
     try{
        const result4 = await User.findByIdAndDelete({ _id });
        console.log(result4);
     }catch(err){
        console.log(err);
     }
}

//deleteDocument('65abe7e5c3d3d30a52f56b71');


