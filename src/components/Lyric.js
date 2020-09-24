import React, { Fragment } from "react";

const Lyric = ({ lyric }) => {
  if (lyric.length === 0) return null;
  return (
    <Fragment>
      <h2>Songs Lyric</h2>
      <p className="lyric">{lyric}</p>
    </Fragment>
  );
};

export default Lyric;
