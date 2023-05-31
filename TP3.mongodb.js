
//use('livre');

//db.livre.find({type : "Book"});

//db.livre.find({type : "Article",$and:[{year : {$gt:2011}}]});

//db.livre.find({type : "Book",$and:[{year : {$gt:2014}}]});

//db.livre.find({type : "Article",$and:[{authors : "Toru Ishida"}]});

//db.livre.distinct("authors")


use('info');

// db.info.insertMany([
//     { nom: 'Macbook Pro', 
//     fabriquant: 'Apple', 
//     prix: 11435.99, 
//     options: ["Intel Core i5", "Retina Display" , "Long life battery"]},

//     { nom: 'Macbook Air', 
//     fabriquant: 'Apple', 
//     prix: 125794.73,"ultrabook" : true, 
//     options:["Intel Core i7", "SSD" , "Long life battery"]},

//     { nom: 'Thinkpad X230', 
//     fabriquant: 'Lenovo', 
//     prix: 114358.74,"ultrabook" : true, 
//     options: ["Intel Core i5", "SSD" , "Long life battery"]},
// ]);

//db.info.find();

//db.info.findOne();

//db.info.findOne({nom : "Thinkpad X230"},{_id:1,nom:0,fabriquant:0,prix:0,ultrabook:0,options:0});

//db.info.findOne({_id : ObjectId("6476f82cd4c4e54209e47e2a")});

//db.info.find({prix : {$gt:13723}})

//db.info.findOne({ultrabook : true})

//db.info.findOne({nom : {$regex : "Macbook"}})

//db.info.find({nom : {$regex : "^Macbook"}})

//db.info.deleteMany({fabriquant : "Apple"})

//db.info.deleteOne({_id : ObjectId("6476f82cd4c4e54209e47e2a")});