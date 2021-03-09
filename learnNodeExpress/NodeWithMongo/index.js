var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


//Create DataBase
MongoClient.connect(url, {useUnifiedTopology: true} , function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

//Create Collection
MongoClient.connect(url,{useUnifiedTopology: true},function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

//Insert one Document
MongoClient.connect(url , {useUnifiedTopology: true}, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

// Insert Multiple Documents
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { name: 'John', address: 'Highway 71' },
        { name: 'Peter', address: 'Lowstreet 4' },
        { name: 'Amy', address: 'Apple st 652' },
        { name: 'Hannah', address: 'Mountain 21' },
        { name: 'Michael', address: 'Valley 345' },
        { name: 'Sandy', address: 'Ocean blvd 2' },
        { name: 'Betty', address: 'Green Grass 1' },
        { name: 'Richard', address: 'Sky st 331' },
        { name: 'Susan', address: 'One way 98' },
        { name: 'Vicky', address: 'Yellow Garden 2' },
        { name: 'Ben', address: 'Park Lane 38' },
        { name: 'William', address: 'Central st 954' },
        { name: 'Chuck', address: 'Main Road 989' },
        { name: 'Viola', address: 'Sideway 1633' }
    ];
    dbo.collection("customers").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log(res.ops);
        db.close();
    });
});

// Insert Documents with defined id's
MongoClient.connect(url, { useUnifiedTopology: true},function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemon' },
        { _id: 156, name: 'Vanilla Dream' }
    ];
    dbo.collection("products").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

//Find One
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

// Find All
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log(result.length);
        db.close();
    });
});


//Update Document
MongoClient.connect(url, {useUnifiedTopology: true},function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: { name: "Sickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});

//Update Specific Document
MongoClient.connect(url, {useUnifiedTopology: true},function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: { address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("Address of specific document updated");
        db.close();
    });
});

//Update Many Document
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^S/ };
    var newvalues = { $set: { name: "Minnie" } };
    dbo.collection("customers").updateMany(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
    });
});


// Find Some
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0, name: 1,  } }).toArray(function (err, result) {
        if (err) throw err; //if you need id put 1 in id field and put 0 in rest if them
        console.log(result);
        db.close();
    });
});

//Query
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { address: "Park Lane 38" };
    dbo.collection("customers").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

// Filter With Regular Expressions
MongoClient.connect(url, {useUnifiedTopology: true},function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { address: /^S/ }; //it means find address which starts from S letter
    dbo.collection("customers").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});


//Sorting in Ascending Order
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: 1 };
    dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//Sorting for Descending Order
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: -1 };
    dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

// Delete Document
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { name: 'William' };
    dbo.collection("customers").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        // console.log(obj)
        db.close();
    });
});

//Delete Many
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^M/ };
    dbo.collection("customers").deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        console.log(obj.result);
        db.close();
    });
});

// The Result Object:

// The deleteMany() method returns an object which contains information 
// about how the execution affected the database.Most of the information 
// is not important to understand, but one object inside the object is 
// called "result" which tells us if the execution went OK, and how 
// many documents were affected.The result object looks like this

//Drop Collection Method 1
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});

//Drop Collection Method 2
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.dropCollection("products", function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  });

//Limit the Documents
MongoClient.connect(url, {useUnifiedTopology: true},function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find().limit(5).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
