import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Lyric from "./components/Lyric";
import Artist from "./components/Artist";
function App() {
  const [lyricsearch, setResultSearch] = useState({});
  const [lyric, setLyric] = useState("");
  const [artistsearch, setArtistSearch] = useState({});

  const { song, artist } = lyricsearch;

  useEffect(() => {
    if (Object.keys(lyricsearch).length === 0) return;

    const Api = async () => {
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const [apiSong, apiArtist] = await Promise.all([fetch(url), fetch(url2)]);

      const responseSong = await apiSong.json();
      const responseArtist = await apiArtist.json();

      setLyric(responseSong.lyrics);
      setArtistSearch(responseArtist.artists[0]);
    };

    Api();
  }, [lyricsearch, artist, song]);
  return (
    <Fragment>
      <Form setResultSearch={setResultSearch} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artist artistsearch={artistsearch} />
          </div>
          <div className="col-md-6">
            <Lyric lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
