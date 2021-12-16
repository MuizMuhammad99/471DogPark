const express = require("express");
const PORT = 3001;
const app = express();
const mysql = require("mysql2");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "cpsc471",
    password: "123456",
    database: "DogParkDB"
});

con.connect(function(err) {
    if(err) console.log(err);
    console.log("Successfully connected to database");
});

//API endpoints:

//Endpoint 1: Register new user
app.post('/api/user/new', (req, res) => {
    let user = req.body;
    var sql = "INSERT INTO USER (Email, Username, Password, Fname, Lname, Street_number, Street, Quadrant) VALUES ('"
    + user.email + "','" + user.username + "','" + user.password + "','" + user.fname + "','" + user.lname + "','" +
    user.streetNumber + "','" + user.street + "','" + user.quadrant + "')";
    con.query(sql, (err, rows, fields) => {
        if(err) console.log(err);
        else res.json({"email": user.email});
    });
});

//Endpoint 2: Get username of a user
app.get('/api/user/:email/username', (req, res) => {
    con.query("SELECT Username FROM USER WHERE Email = '" + [req.params.email] + "'", (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows[0]);
        }
    });
});

//Endpoint 3: Get password of a user
app.get('/api/user/:email/password', (req, res) => {
    con.query("SELECT Password FROM USER WHERE Email = '" + [req.params.email] + "'", (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows[0]);
        }
    });
});

//Endpoint 4: Get reviews that have been reported
app.get('/api/review/reported', (req, res) => {
    con.query("SELECT Review_ID_no FROM MODERATES", (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

//Endpoint 5: Get all reviews
app.get('/api/reviews', (req, res) => {
    con.query("SELECT * FROM Review", (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

//Endpoint 6: Delete a review
app.delete('/api/review/:id', (req, res) => {
    con.query("DELETE FROM Review WHERE Review_ID_no = '" + [req.params.id] + "'", (err, rows, fields) => {
        if(err) console.log(err);
        else res.send("Review deletion successful");
    })
})

//Endpoint 7: Get all reviews written by a user
app.get('/api/reviews/:email', (req, res) => {
    con.query("SELECT * FROM Review WHERE Reviewer_email = '" + [req.params.email] + "'", (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

//Endpoint 8: Add a new review to the database
app.post('/api/review/new', (req, res) => {
    let review = req.body;
    var sql = "INSERT INTO Review (Review_ID_no,Date,Writing,Scenery,Parking,Amenities,Reviewer_Email,Park_ID) VALUES ('"
    + review.id + "," + review.date + "," + review.writing + "," + review.scenery + "," + review.parking + "," + review.amenities
    + "," + review.reviewerEmail + "," + review.parkID + "')"
    con.query(sql, (err, rows, fields) => {
        if(err) console.log(err);
        else res.send("Review added successfully");
    });
});

//Endpoint 9: Get all neighbourhoods
app.get('/api/neighbourhoods', (req, res) => {
    con.query("SELECT * FROM Neighbourhood", (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

//(skipping 10 and 11)

//Endpoint 12: Get all dog parks with a certain name
app.get('/api/dogparks/:name', (req, res) => {
    con.query("SELECT * FROM DOG_PARK WHERE Park_name = " + [req.params.name], (err, row, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

//Endpoint 13: Get all dog park IDs with a certain address
app.get('/api/dogpark/at_address', (req, res) => {
    let park = req.body;
    var sql = "SELECT Park_ID_no FROM DOG_PARK WHERE Street_number = " + park.streetNo + " AND Street = '" + park.street
    + "' AND Quadrant = '" + res.quadrant + "'";
    con.query(sql, (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    })
})

//(skipping 14 and 15)

//Endpoint 16: Get average rating of a dog park
app.get('/api/dogpark/:id/avg_rating', (req, res) => {
    var sql = "SELECT AVG(Scenery) as avgScenery, AVG(Parking) as avgParking, AVG(Amenities) as avgAmenities"
    + " FROM dog_park JOIN review ON Park_ID_no = Park_ID"
    + " WHERE Park_ID_no = " + [req.params.id];
    con.query(sql, (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    })
});

//Endpoint 17: Get information about a certain dog park
app.get('/api/dogpark/:id', (req, res) => {
    con.query("SELECT * FROM DOG_PARK WHERE Park_ID_no = " + [req.params.id], (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows[0]);
        }
    });
});

//Endpoint 25: Get all dog park IDs
app.get('/api/dogpark/ids', (req, res) => {
    con.query("SELECT Park_ID_no FROM DOG_PARK", (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

/*
Generic single get request:
app.get('', (req, res) => {
    con.query("SELECT FROM WHERE = '" + [] + "', (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows[0]);
        }
    });
});
Generic multiple get request:
app.get('', (req, res) => {
    con.query("SELECT FROM WHERE" (err, rows, fields) => {
        if(err) console.log(err);
        else {
            res.send(rows);
        }
    });
});

Generic post request:
app.post('', (req, res) => {
    let  = req.body;
    var sql = "INSERT INTO () VALUES ('" + "')"
    con.query(sql, (err, rows, fields) => {
        if(err) console.log(err);
        else res.json({"email": user.email});
    });
});
*/