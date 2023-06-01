use('restaurants');
//db.createCollection("restaurants");

//db.restaurants.aggregate({$limit : 10 });

//db.restaurants.aggregate({$limit : 10 },{$sort : {name :1}});

//db.restaurants.aggregate({$match : {borough : "Brooklyn"}},{$limit : 10 },{$sort : {name :1}});

//db.restaurants.aggregate({$limit : 10 },{$sort : {name :1}},{$project : {_id:0,name:1,borough:1}});

//db.restaurants.aggregate({$limit : 10 },{$sort : {name :1}},{$project : {grades:0,address:0}});

//db.restaurants.aggregate({$limit : 10 },{$project: {name:1,borough:1,address:1,cuisine:1,size_of_grade: {$size: "$grades"}}});

//db.restaurants.aggregate({$limit : 10 },{$project: {name:1,borough:1,cuisine:1,size_of_grade: {$size: "$grades"}}},{$sort : {size_of_grade :1}});

//db.restaurants.aggregate({$limit : 10 },{$project:{_id:0,borough:1,name :{$toUpper : "$name"}}})

//db.restaurants.aggregate({$limit : 10 },{$project:{_id:0,name :{$toUpper : "$name"},borough :{"$substr":["$borough", 0, 3]}}});

//db.restaurants.aggregate({$count : "number"});

//db.restaurants.aggregate({$group: {_id : "$borough" , count : {$sum:1} }});


