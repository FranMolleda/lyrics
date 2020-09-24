import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ setResultSearch }) => {
  const [search, setSearch] = useState({
    //importante que las keys se llamen igual que los "name" de cada input
    artist: "",
    song: "",
  });

  const [error, setError] = useState(false);

  const { artist, song } = search;

  const handleInput = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    setResultSearch(search);
  };

  return (
    <div className="bg-info">
      <div className="container">
        {error ? (
          <Error message="All fields must to be complete"></Error>
        ) : null}
        <form
          onSubmit={handleForm}
          className="col card text-white bg-transparent mb-5 pt-5 pb-2"
        >
          <fieldset>
            <legend className="text-center">Lyrics Songs Search</legend>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Artist</label>
                  <input
                    name="artist"
                    type="text"
                    placeholder="Artist Name"
                    className="form-control"
                    onChange={handleInput}
                    value={artist}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Song</label>
                  <input
                    name="song"
                    type="text"
                    placeholder="Song Name"
                    className="form-control"
                    onChange={handleInput}
                    value={song}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary float-right">
              Search
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setResults: PropTypes.func,
};
export default Form;
