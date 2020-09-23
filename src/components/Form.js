import React from "react";

const Form = () => {
  return (
    <div className="bg-info">
      <div className="container">
        <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
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

export default Form;
