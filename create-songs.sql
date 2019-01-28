CREATE TABLE Songs(
song_id INT primary key not null,
song_artist INT REFERENCES Artists(artist_ID) not null,
song_name VARCHAR(255) not null

)