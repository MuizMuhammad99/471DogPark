-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2021 at 05:20 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


DROP DATABASE IF EXISTS dogparkdb;
CREATE DATABASE dogparkdb;
USE dogparkdb;

--
-- Database: `dogparkdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrator`
--

CREATE TABLE `administrator` (
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `administrator`
--

INSERT INTO `administrator` (`Email`) VALUES
('user1@gmail.com'),
('user2@gmail.com'),
('user3@gmail.com'),
('user4@gmail.com'),
('user5@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `Neighbourhood_name` varchar(255) NOT NULL,
  `Amenity_name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`Neighbourhood_name`, `Amenity_name`, `Description`) VALUES
('NeighbourhoodFive', 'AmenityFive', 'Amenity numbered Five for NeighbourhoodFive'),
('NeighbourhoodFour', 'AmenityFour', 'Amenity numbered Four for NeighbourhoodFour'),
('NeighbourhoodOne', 'AmenityOne', 'Amenity numbered One for NeighbourhoodOne'),
('NeighbourhoodThree', 'AmenityThree', 'Amenity numbered Three for NeighbourhoodThree'),
('NeighbourhoodTwo', 'AmenityTwo', 'Amenity numbered Two for NeighbourhoodTwo');

-- --------------------------------------------------------

--
-- Table structure for table `closest_to`
--

CREATE TABLE `closest_to` (
  `Park_ID` int(11) NOT NULL,
  `Viewer_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `closest_to`
--

INSERT INTO `closest_to` (`Park_ID`, `Viewer_email`) VALUES
(3, 'user13@gmail.com'),
(3, 'user14@gmail.com'),
(4, 'user15@gmail.com'),
(4, 'user16@gmail.com'),
(4, 'user17@gmail.com'),
(4, 'user18@gmail.com'),
(4, 'user19@gmail.com'),
(5, 'user20@gmail.com'),
(5, 'user21@gmail.com'),
(5, 'user22@gmail.com'),
(5, 'user23@gmail.com'),
(5, 'user24@gmail.com'),
(5, 'user25@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `dog_park`
--

CREATE TABLE `dog_park` (
  `Park_ID_no` int(11) NOT NULL,
  `Park_name` varchar(255) DEFAULT NULL,
  `SIZE` int(11) DEFAULT NULL,
  `Street_number` varchar(255) DEFAULT NULL,
  `Street` varchar(255) DEFAULT NULL,
  `Quadrant` varchar(255) DEFAULT NULL,
  `Neighbourhood_name` varchar(255) DEFAULT NULL,
  `Owner_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dog_park`
--

INSERT INTO `dog_park` (`Park_ID_no`, `Park_name`, `SIZE`, `Street_number`, `Street`, `Quadrant`, `Neighbourhood_name`, `Owner_ID`) VALUES
(1, 'ParkOne', 100, 'StreeNumOne', 'StreetOne', 'NW', 'NeighbourhoodOne', 1),
(2, 'ParkTwo', 100, 'StreeNumTwo', 'StreetTwo', 'NW', 'NeighbourhoodTwo', 2),
(3, 'ParkThree', 342, 'StreeNumThree', 'StreetThree', 'NE', 'NeighbourhoodThree', 3),
(4, 'ParkFour', 88, 'StreeNumFour', 'StreetFour', 'SW', 'NeighbourhoodFour', 4),
(5, 'ParkFive', 15, 'StreeNumFive', 'StreetFive', 'SE', 'NeighbourhoodFive', 5);

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `Name` varchar(255) NOT NULL,
  `Date` date DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`Name`, `Date`, `Description`) VALUES
('EventFive', '0000-00-00', 'Description for EventFive'),
('EventFour', '0000-00-00', 'Description for EventFour'),
('EventOne', '0000-00-00', 'Description for EventOne'),
('EventSeven', '0000-00-00', 'Description for EventSeven'),
('EventSix', '0000-00-00', 'Description for EventSix'),
('EventThree', '0000-00-00', 'Description for EventThree'),
('EventTwo', '0000-00-00', 'Description for EventTwo');

-- --------------------------------------------------------

--
-- Table structure for table `holds`
--

CREATE TABLE `holds` (
  `Park_ID` int(11) NOT NULL,
  `Event_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `holds`
--

INSERT INTO `holds` (`Park_ID`, `Event_name`) VALUES
(1, 'EventOne'),
(1, 'EventTwo'),
(2, 'EventThree'),
(3, 'EventFive'),
(3, 'EventFour'),
(3, 'EventSix'),
(5, 'EventSeven');

-- --------------------------------------------------------

--
-- Table structure for table `moderates`
--

CREATE TABLE `moderates` (
  `Review_ID` int(11) NOT NULL,
  `Admin_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `moderates`
--

INSERT INTO `moderates` (`Review_ID`, `Admin_email`) VALUES
(1, 'user1@gmail.com'),
(2, 'user2@gmail.com'),
(3, 'user3@gmail.com'),
(4, 'user4@gmail.com'),
(5, 'user5@gmail.com'),
(6, 'user5@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `neighbourhood`
--

CREATE TABLE `neighbourhood` (
  `Name` varchar(255) NOT NULL,
  `Quadrant` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `neighbourhood`
--

INSERT INTO `neighbourhood` (`Name`, `Quadrant`) VALUES
('NeighbourhoodFive', 'SE'),
('NeighbourhoodFour', 'SW'),
('NeighbourhoodOne', 'NW'),
('NeighbourhoodThree', 'NE'),
('NeighbourhoodTwo', 'NW');

-- --------------------------------------------------------

--
-- Table structure for table `parking_lot`
--

CREATE TABLE `parking_lot` (
  `Lot_number` int(11) NOT NULL,
  `Number_of_spots` int(11) DEFAULT NULL,
  `Park_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parking_lot`
--

INSERT INTO `parking_lot` (`Lot_number`, `Number_of_spots`, `Park_ID`) VALUES
(1, 3, 1),
(2, 1, 2),
(3, 1, 3),
(4, 3, 4),
(5, 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `parking_space`
--

CREATE TABLE `parking_space` (
  `Lot_number` int(11) NOT NULL,
  `Spot_number` int(11) NOT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Size` int(11) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parking_space`
--

INSERT INTO `parking_space` (`Lot_number`, `Spot_number`, `Type`, `Size`, `Price`) VALUES
(1, 1, 'Regular', 1, 10),
(1, 2, 'Regular', 1, 10),
(1, 3, 'Handicap', 1, 15),
(2, 1, 'Regular', 1, 10),
(3, 1, 'Regular', 1, 10),
(4, 1, 'Regular', 1, 10),
(4, 2, 'Regular', 1, 10),
(4, 3, 'Handicap', 1, 15),
(5, 1, 'Regular', 1, 10),
(5, 2, 'Regular', 1, 10);

-- --------------------------------------------------------

--
-- Table structure for table `park_owner`
--

CREATE TABLE `park_owner` (
  `ID_no` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Contact_info` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `park_owner`
--

INSERT INTO `park_owner` (`ID_no`, `Name`, `Contact_info`) VALUES
(1, 'OwnerOne', '111-111-1111'),
(2, 'OwnerTwo', '222-222-2222'),
(3, 'Ownerthree', '333-333-3333'),
(4, 'OwnerFour', '444-444-4444'),
(5, 'OwnerFive', '555-555-5555');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `Review_ID_no` int(11) NOT NULL auto_increment,
  `Date` date DEFAULT NULL,
  `Writing` varchar(255) DEFAULT NULL,
  `Scenery` int(11) DEFAULT NULL,
  `Parking` int(11) DEFAULT NULL,
  `Amenities` int(11) DEFAULT NULL,
  `Reviewer_email` varchar(255) DEFAULT NULL,
  `Park_ID` int(11) DEFAULT NULL,
  
  PRIMARY KEY (Review_ID_no)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`Review_ID_no`, `Date`, `Writing`, `Scenery`, `Parking`, `Amenities`, `Reviewer_email`, `Park_ID`) VALUES
(1, '2021-12-18', 'Writing1', 1, 1, 1, 'user6@gmail.com', 1),
(2, '2021-12-18', 'Writing2', 1, 1, 1, 'user6@gmail.com', 1),
(3, '2021-12-18', 'Writing3', 1, 1, 1, 'user7@gmail.com', 1),
(4, '2021-12-18', 'Writing4', 1, 1, 1, 'user6@gmail.com', 1),
(5, '2021-12-18', 'WritingFive', 1, 1, 3, 'user8@gmail.com', 3),
(6, '2021-12-18', 'WritingSix', 1, 1, 3, 'user8@gmail.com', 3),
(7, '2021-12-18', 'WritingSeven', 1, 1, 4, 'user9@gmail.com', 3),
(8, '2021-12-18', 'WritingEight', 1, 1, 5, 'user10@gmail.com', 3);

-- --------------------------------------------------------

--
-- Table structure for table `reviewer`
--

CREATE TABLE `reviewer` (
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviewer`
--

INSERT INTO `reviewer` (`Email`) VALUES
('user10@gmail.com'),
('user11@gmail.com'),
('user12@gmail.com'),
('user6@gmail.com'),
('user7@gmail.com'),
('user8@gmail.com'),
('user9@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `traffic_rating`
--

CREATE TABLE `traffic_rating` (
  `Review_ID_no` int(11) NOT NULL,
  `Start_time` time DEFAULT NULL,
  `End_time` time DEFAULT NULL,
  `Traffic_level` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `traffic_rating`
--

INSERT INTO `traffic_rating` (`Review_ID_no`, `Start_time`, `End_time`, `Traffic_level`) VALUES
(1, '21:00:05', '22:00:05', 1),
(2, '14:00:00', '22:12:00', 1),
(3, '15:30:00', '17:16:00', 1),
(4, '12:00:00', '12:55:00', 1),
(5, '11:00:00', '15:47:00', 1),
(6, '21:30:00', '22:32:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Email` varchar(255) NOT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Fname` varchar(255) DEFAULT NULL,
  `Lname` varchar(255) DEFAULT NULL,
  `Street_number` varchar(255) DEFAULT NULL,
  `Street` varchar(255) DEFAULT NULL,
  `Quadrant` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Email`, `Username`, `Password`, `Fname`, `Lname`, `Street_number`, `Street`, `Quadrant`) VALUES
('user10@gmail.com', 'user10', 'pass10', 'User', 'Ten', 'StreetNumTen', 'StreetTen', 'NE'),
('user11@gmail.com', 'user11', 'pass11', 'User', 'Eleven', 'StreetNumEleven', 'StreetEleven', 'NE'),
('user12@gmail.com', 'user12', 'pass12', 'User', 'Twelve', 'StreetNumTwelve', 'StreetTwelve', 'NE'),
('user13@gmail.com', 'user13', 'pass13', 'User', 'Thirteen', 'StreetNumThirteen', 'StreetThirteen', 'NE'),
('user14@gmail.com', 'user14', 'pass14', 'User', 'Fourteen', 'StreetNumFourteen', 'StreetFourteen', 'NE'),
('user15@gmail.com', 'user15', 'pass15', 'User', 'Fifteen', 'StreetNumFifteen', 'StreetFifteen', 'SW'),
('user16@gmail.com', 'user16', 'pass16', 'User', 'Sixteen', 'StreetNumSixteen', 'StreetSixteen', 'SW'),
('user17@gmail.com', 'user17', 'pass17', 'User', 'Seventeen', 'StreetNumSeventeen', 'StreetSeventeen', 'SW'),
('user18@gmail.com', 'user18', 'pass18', 'User', 'Eighteen', 'StreetNumEighteen', 'StreetEighteen', 'SW'),
('user19@gmail.com', 'user19', 'pass19', 'User', 'Nineteen', 'StreetNumNineteen', 'StreetNineteen', 'SW'),
('user1@gmail.com', 'user1', 'pass1', 'User', 'One', 'StreeNumOne', 'StreetOne', 'NW'),
('user20@gmail.com', 'user20', 'pass20', 'User', 'Twenty', 'StreetNumTwenty', 'StreetTwenty', 'SW'),
('user21@gmail.com', 'user21', 'pass21', 'User', 'TwentyOne', 'StreetNumTwentyOne', 'StreetTwentyOne', 'SE'),
('user22@gmail.com', 'user22', 'pass22', 'User', 'TwentyTwo', 'StreetNumTwentyTwo', 'StreetTwentyTwo', 'SE'),
('user23@gmail.com', 'user23', 'pass23', 'User', 'TwentyThree', 'StreetNumTwentyThree', 'StreetTwentyThree', 'SE'),
('user24@gmail.com', 'user24', 'pass24', 'User', 'TwentyFour', 'StreetNumTwentyFour', 'StreetTwentyFour', 'SE'),
('user25@gmail.com', 'user25', 'pass25', 'User', 'TwentyFive', 'StreetNumTwentyFive', 'StreetTwentyFive', 'SE'),
('user2@gmail.com', 'user2', 'pass2', 'User', 'Two', 'StreetNumTwo', 'StreetTwo', 'NW'),
('user3@gmail.com', 'user3', 'pass3', 'User', 'Three', 'StreetNumThree', 'StreetThree', 'NW'),
('user4@gmail.com', 'user4', 'pass4', 'User', 'Four', 'StreetNumFour', 'StreetFour', 'NW'),
('user5@gmail.com', 'user5', 'pass5', 'User', 'Five', 'StreetNumFive', 'StreetFive', 'NW'),
('user6@gmail.com', 'user6', 'pass6', 'User', 'Six', 'StreetNumSix', 'StreetSix', 'NW'),
('user7@gmail.com', 'user7', 'pass7', 'User', 'Seven', 'StreetNumSeven', 'StreetSeven', 'NE'),
('user8@gmail.com', 'user8', 'pass8', 'User', 'Eight', 'StreetNumEight', 'StreetEight', 'NE'),
('user9@gmail.com', 'user9', 'pass9', 'User', 'Nine', 'StreetNumNine', 'StreetNine', 'NE');

-- --------------------------------------------------------

--
-- Table structure for table `viewer`
--

CREATE TABLE `viewer` (
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `viewer`
--

INSERT INTO `viewer` (`Email`) VALUES
('user13@gmail.com'),
('user14@gmail.com'),
('user15@gmail.com'),
('user16@gmail.com'),
('user17@gmail.com'),
('user18@gmail.com'),
('user19@gmail.com'),
('user20@gmail.com'),
('user21@gmail.com'),
('user22@gmail.com'),
('user23@gmail.com'),
('user24@gmail.com'),
('user25@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`Neighbourhood_name`,`Amenity_name`);

--
-- Indexes for table `closest_to`
--
ALTER TABLE `closest_to`
  ADD PRIMARY KEY (`Park_ID`,`Viewer_email`),
  ADD KEY `Viewer_email` (`Viewer_email`);

--
-- Indexes for table `dog_park`
--
ALTER TABLE `dog_park`
  ADD PRIMARY KEY (`Park_ID_no`),
  ADD KEY `Neighbourhood_name` (`Neighbourhood_name`),
  ADD KEY `Owner_ID` (`Owner_ID`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `holds`
--
ALTER TABLE `holds`
  ADD PRIMARY KEY (`Park_ID`,`Event_name`),
  ADD KEY `Event_name` (`Event_name`);

--
-- Indexes for table `moderates`
--
ALTER TABLE `moderates`
  ADD PRIMARY KEY (`Review_ID`,`Admin_email`),
  ADD KEY `Admin_email` (`Admin_email`);

--
-- Indexes for table `neighbourhood`
--
ALTER TABLE `neighbourhood`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `parking_lot`
--
ALTER TABLE `parking_lot`
  ADD PRIMARY KEY (`Lot_number`),
  ADD KEY `Park_ID` (`Park_ID`);

--
-- Indexes for table `parking_space`
--
ALTER TABLE `parking_space`
  ADD PRIMARY KEY (`Lot_number`,`Spot_number`);

--
-- Indexes for table `park_owner`
--
ALTER TABLE `park_owner`
  ADD PRIMARY KEY (`ID_no`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  #ADD PRIMARY KEY (`Review_ID_no`),
  ADD KEY `Reviewer_email` (`Reviewer_email`),
  ADD KEY `Park_ID` (`Park_ID`);

--
-- Indexes for table `reviewer`
--
ALTER TABLE `reviewer`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `traffic_rating`
--
ALTER TABLE `traffic_rating`
  ADD PRIMARY KEY (`Review_ID_no`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `viewer`
--
ALTER TABLE `viewer`
  ADD PRIMARY KEY (`Email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `administrator`
--
ALTER TABLE `administrator`
  ADD CONSTRAINT `administrator_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `user` (`Email`);

--
-- Constraints for table `amenities`
--
ALTER TABLE `amenities`
  ADD CONSTRAINT `amenities_ibfk_1` FOREIGN KEY (`Neighbourhood_name`) REFERENCES `neighbourhood` (`Name`);

--
-- Constraints for table `closest_to`
--
ALTER TABLE `closest_to`
  ADD CONSTRAINT `closest_to_ibfk_1` FOREIGN KEY (`Park_ID`) REFERENCES `dog_park` (`Park_ID_no`),
  ADD CONSTRAINT `closest_to_ibfk_2` FOREIGN KEY (`Viewer_email`) REFERENCES `viewer` (`Email`);

--
-- Constraints for table `dog_park`
--
ALTER TABLE `dog_park`
  ADD CONSTRAINT `dog_park_ibfk_1` FOREIGN KEY (`Neighbourhood_name`) REFERENCES `neighbourhood` (`Name`),
  ADD CONSTRAINT `dog_park_ibfk_2` FOREIGN KEY (`Owner_ID`) REFERENCES `park_owner` (`ID_no`);

--
-- Constraints for table `holds`
--
ALTER TABLE `holds`
  ADD CONSTRAINT `holds_ibfk_1` FOREIGN KEY (`Park_ID`) REFERENCES `dog_park` (`Park_ID_no`),
  ADD CONSTRAINT `holds_ibfk_2` FOREIGN KEY (`Event_name`) REFERENCES `event` (`Name`);

--
-- Constraints for table `moderates`
--
ALTER TABLE `moderates`
  ADD CONSTRAINT `moderates_ibfk_1` FOREIGN KEY (`Review_ID`) REFERENCES `review` (`Review_ID_no`),
  ADD CONSTRAINT `moderates_ibfk_2` FOREIGN KEY (`Admin_email`) REFERENCES `administrator` (`Email`);

--
-- Constraints for table `parking_lot`
--
ALTER TABLE `parking_lot`
  ADD CONSTRAINT `parking_lot_ibfk_1` FOREIGN KEY (`Park_ID`) REFERENCES `dog_park` (`Park_ID_no`);

--
-- Constraints for table `parking_space`
--
ALTER TABLE `parking_space`
  ADD CONSTRAINT `parking_space_ibfk_1` FOREIGN KEY (`Lot_number`) REFERENCES `parking_lot` (`Lot_number`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`Reviewer_email`) REFERENCES `reviewer` (`Email`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`Park_ID`) REFERENCES `dog_park` (`Park_ID_no`);

--
-- Constraints for table `reviewer`
--
ALTER TABLE `reviewer`
  ADD CONSTRAINT `reviewer_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `user` (`Email`);

--
-- Constraints for table `traffic_rating`
--
ALTER TABLE `traffic_rating`
  ADD CONSTRAINT `traffic_rating_ibfk_1` FOREIGN KEY (`Review_ID_no`) REFERENCES `review` (`Review_ID_no`);

--
-- Constraints for table `viewer`
--
ALTER TABLE `viewer`
  ADD CONSTRAINT `viewer_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `user` (`Email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
