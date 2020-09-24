import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Lyric from "./components/Lyric";
function App() {
  const [resultsearch, setResultSearch] = useState({});
  const [lyric, setLyric] = useState("");

  const { song, artist } = resultsearch;

  useEffect(() => {
    if (Object.keys(resultsearch).length === 0) return;

    const Api = async () => {
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const apiSong = await fetch(url);
      const response = await apiSong.json();
      setLyric(response.lyrics);
    };
    Api();
  }, [resultsearch, artist, song]);
  return (
    <Fragment>
      <Form setResultSearch={setResultSearch} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Artist</h2>
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
