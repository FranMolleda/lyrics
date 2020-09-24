import React, { Fragment, useState } from "react";
import Form from "./components/Form";

function App() {
  const [resultsearch, setResultSearch] = useState({});

  const { song, artist } = resultsearch;

  return (
    <Fragment>
      <Form setResultSearch={setResultSearch} />
    </Fragment>
  );
}

export default App;
