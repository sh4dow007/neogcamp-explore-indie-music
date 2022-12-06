import React, { useState } from "react";
import "./styles.css";

const musicCatalog = {
  Sufi: [
    {
      name: "Latthay Di Chaadar",
      description: "A gem written by Farhan Saeed.",
      artist: "Coke Studio",
      rating: "4.8/5",
      link:
        "https://open.spotify.com/track/58AkcBdW5NpM2TBbkKbdK3?si=c093effd080141f4"
    },
    {
      name: "Chaap Tilak",
      description: "One of many Rahat Fateh Ali khan's gem.",
      artist: "Coke Studio",
      rating: "4.4/5",
      link:
        "https://open.spotify.com/track/2mVqfKbKGmxVXlVswhlI5T?si=4ffa9f1f7fed4a46"
    },
    {
      name: "Saiyaan",
      description: "Kailash Kher's voice and this song is too good",
      artist: "Kailasa jhoom re",
      rating: "5/5",
      link:
        "https://open.spotify.com/track/2vR23BjIzpLMtzsyKrM6Mb?si=40dfbdd3e1654245"
    }
  ],
  Pop: [
    {
      name: "Nasha (Equals Sessions)",
      description: "Fun song with a nostalgic touch.",
      artist: "Faridkot",
      rating: "4.6/5",
      link:
        "https://open.spotify.com/track/1rDjwexewf4hrdZT7SRNsH?si=8f04bb63b9f24656"
    },
    {
      name: "Tere Bina",
      description: "Send this to your love.",
      artist: "Zaeden",
      rating: "4.7/5",
      link:
        "https://open.spotify.com/track/6N5WkgPIDoTdbCXyyIIKAv?si=0a4d29bbeeed4191"
    },
    {
      name: "Rangi Saari",
      description: "Well, this would make you sing along",
      artist: "Kavita Seth",
      rating: "4.8/5",
      link:
        "https://open.spotify.com/track/3F2BSn4ayglzMwquBRHZq6?si=155fac8abf0f40e9"
    }
  ],
  Calm: [
    {
      name: "Baarishein",
      description: "Well, this would make you remember your love.",
      artist: "Anuv Jain",
      rating: "4.6/5",
      link:
        "https://open.spotify.com/track/5iCY0TXNImK4hyKfcplQsg?si=c8774008b8304bbf"
    },
    {
      name: "Pankh Tere",
      description:
        "This song would motivate you to pick yourself up if you're feeling down.",
      artist: "Deepak rathore Project",
      rating: "5/5",
      link:
        "https://open.spotify.com/track/4UfeEvDMmOr9xkejAgHc02?si=52576f906edf494e"
    },
    {
      name: "Dhaaga",
      description:
        "Remember when you first left your home to pursue career, try not to cry.",
      artist: "Nilotpal Bora",
      rating: "5/5",
      link:
        "https://open.spotify.com/track/4wUtptr1RLnHyTlkbUKutH?si=af3aa76610c84786"
    }
  ]
};

var genres = Object.keys(musicCatalog);

export default function App() {
  const [genre, setGenre] = useState("Sufi");

  function genreClickHandler(genre) {
    // processing
    setGenre(genre); // react call to show output
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="bookshelf">
          🎵
        </span>{" "}
        Explore Indie Music
      </h1>
      <p>Checkout these genre:</p>

      {genres.map((genre) => {
        return (
          <button
            onClick={() => genreClickHandler(genre)}
            key={genre}
            style={{
              cursor: "pointer",
              background: "rgb(229, 231, 235)",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            className="bigButton"
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul style={{ paddingInlineStart: "0px", textAlign: "left" }}>
        {musicCatalog[genre].map((song) => {
          return (
            <a href={song.link} style={{ textDecoration: "none" }}>
              <li
                style={{
                  listStyleType: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: "0.5rem",
                  margin: "1rem 0rem",
                  fontSize: "larger"
                }}
                key={song.name}
              >
                <div style={{ fontSize: "1.5rem", padding: "0.2rem" }}>
                  {song.name}
                </div>
                <div style={{ fontSize: "1rem", padding: "0.1rem" }}>
                  description: {song.description}
                </div>
                <div style={{ fontSize: "0.8rem", padding: "0.1rem 0.2rem" }}>
                  artist: {song.artist}
                </div>
                <div style={{ fontSize: "1rem", padding: "0 0.2rem" }}>
                  rating: {song.rating}
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
