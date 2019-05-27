# liri-node-app

1. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

2. LIRI can search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

3. To-Do before running the App:
    - Clone repo to your local computer
    - cd into the repo
    - npm install to install all of the dependencies from package.json
    -  Next, create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:
    
    ```js
    # Spotify API keys
    
    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:
    
    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
    
    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
    
    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
    
    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

4. LIRI can accept one of the following commands:
    - **`concert-this`**
     example: `node liri.js concert-this <artist/band name here>`
        
        * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
        
        * Name of the venue
        
        * Venue location
        
        * Date of the Event (use moment to format this as "MM/DD/YYYY")
        ![image](https://user-images.githubusercontent.com/47204339/58392586-89f5a800-7fef-11e9-92ff-e8face302cda.png)

    - **`spotify-this-song`**
     example: `node liri.js spotify-this-song '<song name here>'`
    
        * This will show the following information about the song in your terminal/bash window
        
        * Artist(s)
        
        * The song's name
        
        * A preview link of the song from Spotify
        
        * The album that the song is from
        ![image](https://user-images.githubusercontent.com/47204339/58392721-36378e80-7ff0-11e9-9d3a-a0f277ff8cce.png)
        
        * If no song is provided then your program will default to "The Sign" by Ace of Base.
        ![image](https://user-images.githubusercontent.com/47204339/58392751-59fad480-7ff0-11e9-92ff-b87e265ec74a.png)

    -  **`movie-this`**
     example: `node liri.js movie-this '<movie name here>'`
    
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
        ![image](https://user-images.githubusercontent.com/47204339/58392798-93334480-7ff0-11e9-8734-46bbcae83f89.png)
        
        * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        ![image](https://user-images.githubusercontent.com/47204339/58392828-b2ca6d00-7ff0-11e9-9211-8fd9097fa4d7.png)

    - **`do-what-it-says`**
     example: `node liri.js do-what-it-says`
        * This will run whatever command is in the random.txt file
        ![image](https://user-images.githubusercontent.com/47204339/58392902-03da6100-7ff1-11e9-81eb-5a40ad8b37c3.png)
        ![image](https://user-images.githubusercontent.com/47204339/58392923-1d7ba880-7ff1-11e9-8677-981d90a165e6.png)

5. All commands will be logged in the log.txt file
        ![image](https://user-images.githubusercontent.com/47204339/58393011-7c412200-7ff1-11e9-914d-9187908d17a6.png)

6. APIs used: 
        *[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
        *[OMDB API](http://www.omdbapi.com) 
        *[Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
        
7. NPM packages used: 
        * [Axios](https://www.npmjs.com/package/axios)
        *[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
        * [Moment](https://www.npmjs.com/package/moment)
        * [DotEnv](https://www.npmjs.com/package/dotenv)

