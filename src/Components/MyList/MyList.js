import SavedItems from "../SavedItems";
import "./MyList.scss";

import React from "react";

const MyList = () => {
  return (
    <div className="container">
      <div className="my-list">
        <div className="my-list__items">
          <h1>Watch List</h1>
        </div>
        <SavedItems />
      </div>
    </div>
  );
};

export default MyList;
