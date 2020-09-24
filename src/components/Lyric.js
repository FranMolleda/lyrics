import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Lyric = ({ lyric }) => {
  if (lyric.length === 0) return null;
  return (
    <Fragment>
      <h2>Songs Lyric</h2>
      <p className="lyric">{lyric}</p>
    </Fragment>
  );
};

Lyric.propTypes = {
  lyric: PropTypes.string.isRequired,
};
export default Lyric;
