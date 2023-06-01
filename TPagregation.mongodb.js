use('livre');
//db.createCollection("livre");

//db.livre.aggregate({$match: {authors : "Toru Ishida"}}).sort({title :1,"pages.start":1});

//db.livre.aggregate({$match: {authors : "Toru Ishida"}},{$project : {title:1,"pages.start":1}}).sort({title :1,"pages.start":1});

//db.livre.aggregate({$match: {authors : "Toru Ishida"}},{$count :"Nombre d'ouvrages" });

//db.livre.aggregate({$match: {year : {$gt :2011}}},{$group: {_id : "$type" , count : {$sum:1} }});


//db.livre.aggregate({$unwind: "$authors"},{$group: {_id: "$authors", count : {$sum:1}}},{$sort : {count :-1}});
