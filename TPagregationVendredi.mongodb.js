use('sport');
// db.createCollection("sportifs");
// db.createCollection("gymnases");

//db.sportifs.aggregate({$match : {$and :[{ Age : {$gte: 20}} , {Age : {$lte:30}} ]}},{$project : {_id:0,IdSportif:1,Nom:1,Prenom:1}});

//db.gymnases.aggregate({$match : {$and:[{$or : [{Ville : "SARCELLES"},{Ville : "VILLETANEUSE"}],Surface : {$gte : 400}}]}});

db.sportifs.aggregate({ $match:{ "Sports.Jouer" : "Handball" }})