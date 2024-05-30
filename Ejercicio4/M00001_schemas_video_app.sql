CREATE TABLE Users (
  UserID INT PRIMARY KEY,
  Username VARCHAR(50) NOT NULL,
  Email VARCHAR(50) UNIQUE NOT NULL,
  Password VARCHAR(50) NOT NULL
);

CREATE TABLE Authors (
  AuthorID INT PRIMARY KEY,
  UserID INT,
  TotalVideos INT,
  FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Videos (
  VideoID INT PRIMARY KEY,
  Title VARCHAR(255) NOT NULL,
  Description TEXT,
  TotalViews INT,
  Link VARCHAR(512),
  CreatedAt DATE,
  AuthorID INT,
  FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
);

CREATE TABLE Collaborators (
  CollaboratorID INT PRIMARY KEY,
  UserID INT,
  VideoID INT,
  FOREIGN KEY (UserID) REFERENCES Users(UserID),
  FOREIGN KEY (VideoID) REFERENCES Videos(VideoID)
);

CREATE TABLE Comments (
  CommentID INT PRIMARY KEY,
  Comment TEXT NOT NULL,
  UserID INT,
  VideoID INT,
  FOREIGN KEY (UserID) REFERENCES Users(UserID),
  FOREIGN KEY (VideoID) REFERENCES Videos(VideoID)
);

CREATE TABLE Reviews (
  ReviewID INT PRIMARY KEY,
  Rating INT CHECK (Rating >= 1 AND Rating <= 5),
  Review TEXT,
  UserID INT,
  VideoID INT,
  FOREIGN KEY (UserID) REFERENCES Users(UserID),
  FOREIGN KEY (VideoID) REFERENCES Videos(VideoID)
);