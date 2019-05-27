# liri-node-app

1. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

2. LIRI can search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

3. LIRI can accept one of the following commands:
    a.**`concert-this`**
    - example: `node liri.js concert-this <artist/band name here>`
        
        * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
        
        * Name of the venue
        
        * Venue location
        
        * Date of the Event (use moment to format this as "MM/DD/YYYY")

    b. **`spotify-this-song`**
    - example: `node liri.js spotify-this-song '<song name here>'`
    
        * This will show the following information about the song in your terminal/bash window
        
        * Artist(s)
        
        * The song's name
        
        * A preview link of the song from Spotify
        
        * The album that the song is from
        
        * If no song is provided then your program will default to "The Sign" by Ace of Base.

    c.  **`movie-this`**
    - example: `node liri.js movie-this '<movie name here>'`
    
        * This will output the following information to your terminal/bash window:
        
        ```
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
        ```
        * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    d.  **`do-what-it-says`**
    - example: `node liri.js do-what-it-says`
        * This will run whatever command is in the random.txt file

4. APIs used: 
        *[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
        *[OMDB API](http://www.omdbapi.com) 
        *[Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
        
5. NPM packages used: 
        * [Axios](https://www.npmjs.com/package/axios)
        *[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
        * [Moment](https://www.npmjs.com/package/moment)
        * [DotEnv](https://www.npmjs.com/package/dotenv)

