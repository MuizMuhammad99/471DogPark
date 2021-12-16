DROP DATABASE IF EXISTS DogParkDB;

CREATE DATABASE DogParkDB;
USE DogParkDB;

CREATE TABLE NEIGHBOURHOOD (
  Name varchar(255) PRIMARY KEY,
  Quadrant TEXT
);

CREATE TABLE PARK_OWNER (
  ID_no INTEGER PRIMARY KEY,
  Name varchar(255),
  Contact_info varchar(255)
);

CREATE TABLE USER (
  Email varchar(255) PRIMARY KEY,
  Username varchar(255),
  Password varchar(255),
  Fname varchar(255),
  Lname varchar(255),
  Street_number varchar(255),
  Street varchar(255),
  Quadrant varchar(255)
);

CREATE TABLE ADMINISTRATOR (
  Email varchar(255) PRIMARY KEY,
  FOREIGN KEY (Email) REFERENCES USER(Email)
);

CREATE TABLE REVIEWER (
  Email varchar(255) PRIMARY KEY,
  FOREIGN KEY (Email) REFERENCES USER(Email)
);

CREATE TABLE VIEWER (
  Email varchar(255) PRIMARY KEY,
  FOREIGN KEY (Email) REFERENCES USER(Email)
);

CREATE TABLE DOG_PARK (
  Park_ID_no INTEGER PRIMARY KEY,
  Park_name varchar(255),
  SIZE INTEGER,
  Street_number varchar(255),
  Street varchar(255),
  Quadrant varchar(255),
  Neighbourhood_name varchar(255),
  Owner_ID INTEGER,
  FOREIGN KEY(Neighbourhood_name) REFERENCES NEIGHBOURHOOD(Name),
  FOREIGN KEY(Owner_ID) REFERENCES PARK_OWNER(ID_no)
);

CREATE TABLE REVIEW (
  Review_ID_no INTEGER PRIMARY KEY,
  Date DATE,
  Writing varchar(255),
  Scenery INTEGER,
  Parking INTEGER,
  Amenities INTEGER,
  Reviewer_email varchar(255),
  Park_ID INTEGER,
  FOREIGN KEY(Reviewer_email) REFERENCES REVIEWER(Email),
  FOREIGN KEY(Park_ID) REFERENCES DOG_PARK(Park_ID_no)
);

CREATE TABLE EVENT (
  Name varchar(255) PRIMARY KEY,
  Date DATE,
  Description varchar(255)
);

CREATE TABLE PARKING_LOT (
  Lot_number INTEGER PRIMARY KEY,
  Number_of_spots INTEGER,
  Park_ID INTEGER,
  FOREIGN KEY(Park_ID) REFERENCES DOG_PARK(Park_ID_no)
);

CREATE TABLE TRAFFIC_RATING (
  Review_ID_no INTEGER PRIMARY KEY,
  FOREIGN KEY (Review_ID_no) REFERENCES REVIEW(Review_ID_no),
  Start_time TIME,
  End_time TIME,
  Traffic_level INTEGER
);

CREATE TABLE PARKING_SPACE (
  Lot_number INTEGER,
  Spot_number INTEGER,
  Type varchar(255),
  Size INTEGER,
  Price INTEGER,
  PRIMARY KEY (Lot_number, Spot_number),
  FOREIGN KEY (Lot_number) REFERENCES PARKING_LOT(Lot_number)
);

CREATE TABLE AMENITIES (
  Neighbourhood_name varchar(255),
  Amenity_name varchar(255),
  Description varchar(255),
  PRIMARY KEY (Neighbourhood_name, Amenity_name),
  FOREIGN KEY(Neighbourhood_name) REFERENCES NEIGHBOURHOOD(Name)
);

CREATE TABLE MODERATES (
  Review_ID INTEGER,
  Admin_email varchar(255),
  PRIMARY KEY (Review_ID, Admin_email),
  FOREIGN KEY (Review_ID) REFERENCES REVIEW(Review_ID_no),
  FOREIGN KEY (Admin_email) REFERENCES ADMINISTRATOR(Email)
);

CREATE TABLE HOLDS (
  Park_ID INTEGER,
  Event_name varchar(255),
  PRIMARY KEY (Park_ID, Event_name),
  FOREIGN KEY (Park_ID) REFERENCES DOG_PARK(Park_ID_no),
  FOREIGN KEY (Event_name) REFERENCES EVENT(Name)
);

CREATE TABLE CLOSEST_TO (
  Park_ID INTEGER,
  Viewer_email varchar(255),
  PRIMARY KEY (Park_ID, Viewer_email),
  FOREIGN KEY (Park_ID) REFERENCES DOG_PARK(Park_ID_no),
  FOREIGN KEY (Viewer_email) REFERENCES VIEWER(Email)
);
