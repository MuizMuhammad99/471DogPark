const express = require("express");
const PORT = 3001;
const app = express();
const mysql = require("mysql2");
const bodyparser = require("body-parser");
const cors = require("cors");


app.use(bodyparser.json());
app.use(express.json());
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "cpsc471",
  password: "123456",
  database: "DogParkDB",
});

con.connect(function (err) {
  if (err) console.log(err);
  console.log("Successfully connected to database");
});

//API endpoints:

//Endpoint 1: Register new user
app.post("/api/user/new", (req, res) => {
  let user = req.body;
  var sql =
    "INSERT INTO USER (Email,Username,Password,Fname,Lname,Street_number,Street,Quadrant) VALUES (?,?,?,?,?,?,?,?)";
  con.query(
    sql,
    [
      user.email,
      user.username,
      user.password,
      user.fname,
      user.lname,
      user.streetNumber,
      user.street,
      user.quadrant,
    ],
    (err, rows, fields) => {
      if (err) console.log(err);
      else res.json({ email: user.email });
    }
  );
});

//Endpoint 2: Get username of a user
app.get("/api/user/:email/username", (req, res) => {
  con.query(
    "SELECT Username FROM USER WHERE Email = '" + [req.params.email] + "'",
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows[0]);
      }
    }
  );
});

//Endpoint 3: Get password of a user
app.get("/api/user/:email/password", (req, res) => {
  con.query(
    "SELECT Password FROM USER WHERE Email = '" + [req.params.email] + "'",
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows[0]);
      }
    }
  );
});

//Endpoint 4: Get reviews that have been reported
app.get("/api/review/reported", (req, res) => {
  con.query(
    "SELECT R.* FROM (Review as R) JOIN Moderates ON R.Review_ID_no = Review_ID",
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows);
      }
    }
  );
});

//Endpoint 5: Get all reviews
app.get("/api/reviews", (req, res) => {
  con.query("SELECT * FROM Review", (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.send(rows);
    }
  });
});

//Endpoint 6: Delete a review
app.delete("/api/review/id/:id", (req, res) => {
  con.query(
    "DELETE FROM Moderates WHERE Review_ID = " + [req.params.id],
    (err, rows, fields) => {
      if (err) console.log(err);
    }
  );
  con.query(
    "DELETE FROM Review WHERE Review_ID_no = " + [req.params.id],
    (err, rows, fields) => {
      if (err) console.log(err);
      else res.send("Review deletion successful");
    }
  );
});

//Endpoint 7: Get all reviews written by a user
app.get("/api/reviews/email/:email", (req, res) => {
  con.query(
    "SELECT * FROM Review WHERE Reviewer_email = '" + [req.params.email] + "'",
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows);
      }
    }
  );
});

//Endpoint 8: Add a new review to the database
app.post("/api/review/new", (req, res) => {
  console.log("endpoint 8 called");
  let review = req.body;
  console.log(review.parkID);
  var sql =
    "INSERT INTO Review (Date,Writing,Scenery,Parking,Amenities,Reviewer_Email,Park_ID) VALUES (?,?,?,?,?,?,?)";
  con.query(
    sql,
    [
      review.date,
      review.writing,
      review.scenery,
      review.parking,
      review.amenities,
      review.reviewerEmail,
      review.parkID
    ],
    (err, rows, fields) => {
      if (err) console.log(err);
      else res.send("Review added successfully");
    }
  );
});

//Endpoint 9: Get all neighbourhoods
app.get("/api/neighbourhoods", (req, res) => {
  con.query("SELECT * FROM Neighbourhood", (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.send(rows);
    }
  });
});

//(skipping 10 and 11)

//Endpoint 12: Get all dog park IDs with a certain name
app.get("/api/dogparks/name", (req, res) => {
  let name = req.body;
  con.query(
    "SELECT Park_ID_no FROM DOG_PARK WHERE Park_name = ?",
    [name.parkName],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows);
      }
    }
  );
});

//Endpoint 13: Get all dog park IDs with a certain address
app.get("/api/dogparks/at_address", (req, res) => {
  let addr = req.body;
  var sql =
    "SELECT Park_ID_no FROM DOG_PARK WHERE Street_number = ? AND Street = ? AND Quadrant = ?";
  con.query(
    sql,
    [addr.streetNumber, addr.street, addr.quadrant],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows);
      }
    }
  );
});

//(skipping 14 and 15)

//Endpoint 16: Get average rating of a dog park
app.get("/api/dogpark/:id/avg_rating", (req, res) => {
  var sql =
    "SELECT AVG(Scenery) as avgScenery, AVG(Parking) as avgParking, AVG(Amenities) as avgAmenities" +
    " FROM dog_park JOIN review ON Park_ID_no = Park_ID" +
    " WHERE Park_ID_no = " +
    [req.params.id];
  con.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.send(rows[0]);
    }
  });
});

//Endpoint 17: Get information about a certain dog park
app.get("/api/dogpark/id/:id", (req, res) => {
  con.query(
    "SELECT * FROM DOG_PARK WHERE Park_ID_no = " + [req.params.id],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows[0]);
      }
    }
  );
});

//Endpoint 18: Get parking info about a dog park
app.get("/api/dogpark/:id/parking", (req, res) => {
  var sql =
    "SELECT Lot_number, Number_of_spots, Park_id, AVG(price) AS Avg_price" +
    " FROM PARKING_LOT NATURAL JOIN PARKING_SPACE" +
    " WHERE Park_id = " +
    [req.params.id] +
    " GROUP BY Lot_number";
  con.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.send(rows);
    }
  });
});

//Endpoint 19: Get neighbourhood info with amenities
app.get("/api/neighbourhood/amenities", (req, res) => {
  let inp = req.body;
  var amenities;
  con.query(
    "SELECT Amenity_name, Description FROM AMENITIES WHERE Neighbourhood_name = ?",
    [inp.neighbourhoodName],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      }
      amenities = rows;
    }
  );
  con.query(
    "SELECT * FROM NEIGHBOURHOOD WHERE Name = ?",
    [inp.neighbourhoodName],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.json({
          Neighbourhood_name: rows[0].Name,
          Quadrant: rows[0].Quadrant,
          Amenities: amenities,
        });
      }
    }
  );
});

//Endpoint 20: Get events happening at a dog park
app.get("/api/dogpark/:id/events", (req, res) => {
  con.query(
    "SELECT Name, Date, Description FROM EVENT JOIN HOLDS ON Event_name = Name WHERE PARK_ID = " +
      [req.params.id],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows);
      }
    }
  );
});

//Endpoint 21: Get info about a dog park owner
app.get("/api/dogpark/owner/:id", (req, res) => {
  con.query(
    "SELECT * FROM PARK_OWNER WHERE ID_no = " + [req.params.id],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows[0]);
      }
    }
  );
});

//Endpoint 22: Add an instance of moderates to the database
app.post("/api/review/report", (req, res) => {
  let inst = req.body;
  con.query(
    "INSERT INTO moderates (Review_ID, Admin_email) VALUES (?,?)",
    [inst.reviewID, inst.adminEmail],
    (err, rows, fields) => {
      if (err) console.log(err);
      else res.send("Moderates instance successfully added");
    }
  );
});

//Endpoint 23: Edit a review in the database
app.put("/api/review/edit", (req, res) => {
  let newReview = req.body;
  var sql =
    "UPDATE REVIEW SET Writing = ?, Scenery = ?, Parking = ?, Amenities = ? WHERE Review_ID_no = ?";
  con.query(
    sql,
    [
      newReview.writing,
      newReview.scenery,
      newReview.parking,
      newReview.amenities,
      newReview.reviewID,
    ],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send("Review successfully updated");
      }
    }
  );
});

//Endpoint 24: Get a traffic review
app.get("/api/review/:id/traffic", (req, res) => {
  con.query(
    "SELECT * FROM TRAFFIC_RATING WHERE Review_ID_no = " + [req.params.id],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows[0]);
      }
    }
  );
});

//Endpoint 25: Get all dog park IDs
app.get("/api/dogparks/ids", (req, res) => {
  con.query("SELECT Park_ID_no FROM DOG_PARK", (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.send(rows);
    }
  });
});

//Endpoint 26: Get username and password of a user
app.get("/api/user/:email/credentials", (req, res) => {
  con.query(
    "SELECT Username, Password FROM USER WHERE Email = '" +
      [req.params.email] +
      "'",
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows[0]);
      }
    }
  );
});

//Endpoint 27: Get all reviews on a dog park
app.get("/api/reviews/park/:id", (req, res) => {
  con.query(
    "SELECT * FROM Review WHERE Park_ID = '" + [req.params.id] + "'",
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows);
      }
    }
  );
});

//Endpoint 28: Get username of reviewer who wrote a review
app.get("/api/reviews/:id/username", (req, res) => {
  con.query(
    "SELECT Username FROM review JOIN user ON reviewer_email = email WHERE review_id_no = " +
      [req.params.id],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows[0]);
      }
    }
  );
});

//Endpoint 29: Get email of a user from username and password
app.get("/api/user/credentials/email", (req, res) => {
  let inp = req.body;
  con.query(
    "SELECT Email FROM user WHERE username = ? AND password = ?",
    [
      inp.username,
      inp.password
    ],
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows[0]);
      }
    }
  );
});

app.get("/api/event/all", (req, res) => {
  con.query(
    "SELECT * FROM event",
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows);
      }
    }
  );
});

//Endpoint 30: Get info about all users
app.get("/api/dogpark/user/all", (req, res) => {
  con.query(
    "SELECT * FROM USER",
    (err, rows, fields) => {
      if (err) console.log(err);
      else {
        res.send(rows);
      }
    }
  );
});

//Endpoint  31: Post login credentials
app.post('/login', (req, res) =>{
  const username = req.body.username;
  const password = req.body.password;

  con.query(
      "SELECT * FROM users WHERE username = ? AND password = ?", 
      [username, password], 
      (err, result) => {
          if(err){
              res.send({err:  err});
          }

          if (result.length > 0) {
              res.send(result);
          } else {
                  res.send({message: "The username and password is incorrect. Please try again."});
              }
      }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});