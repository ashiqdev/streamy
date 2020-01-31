import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';

import StreamsCreate from "./streams/StreamCreate";
import StreamsDelete from "./streams/StreamDelete";
import StreamsEdit from "./streams/StreamEdit";
import StreamsShow from "./streams/StreamShow";
import StreamsList from "./streams/StreamList";

const App = () => {
  return (
    <div>
      <Router>
        <>
          <Header/>
          <Route path="/" exact component={StreamsList} />
          <Route path="/streams/new" component={StreamsCreate} />
          <Route path="/streams/edit" component={StreamsEdit} />
          <Route path="/streams/delete" component={StreamsDelete} />
          <Route path="/streams/show" component={StreamsShow} />
        </>
      </Router>
    </div>
  );
};

export default App;
