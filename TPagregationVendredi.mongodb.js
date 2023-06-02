use('sport');
// db.createCollection("sportifs");
// db.createCollection("gymnases");

//db.sportifs.aggregate({$match : {$and :[{ Age : {$gte: 20}} , {Age : {$lte:30}} ]}},{$project : {_id:0,IdSportif:1,Nom:1,Prenom:1}});

//db.gymnases.aggregate({$match : {$and:[{$or : [{Ville : "SARCELLES"},{Ville : "VILLETANEUSE"}],Surface : {$gte : 400}}]}});

//db.sportifs.aggregate({ $match:{ "Sports.Jouer" : "Hand ball" }},{$project : {_id:0,IdSportif:1,Nom:1,Prenom:1}});

//db.sportifs.aggregate({$match : {"Sports.Jouer" : {$exists : false}}},{$project : {_id:0,IdSportif:1,Nom:1,Prenom:1}});

//db.gymnases.aggregate({$match : {"Seances.Jour" : {$ne : "Dimanche"}}});

//db.gymnases.aggregate({$match : {$or : [{"Seances.Libelle" : {$eq :"Basket ball"}},{"Seances.Libelle" : {$eq :"Voley ball"}}]}});



