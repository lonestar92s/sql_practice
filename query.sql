//1. 

SELECT * FROM Users


//2. 
SELECT * FROM Songs

//3.
SELECT first_name, last_name, artist_name, song_name FROM Users, Favorite_songs, Artists, Songs WHERE Favorite_songs.song_key = Songs.song_id AND Favorite_songs.user_key = Users.user_id AND Songs.song_artist = Artists.artist_id