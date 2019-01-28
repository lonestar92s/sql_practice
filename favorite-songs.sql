CREATE TABLE Favorite_songs(
user_key INT REFERENCES Users(user_ID) NOT NULL,
song_key INT REFERENCES Songs(song_ID) NOT NULL
)