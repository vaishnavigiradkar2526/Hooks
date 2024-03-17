import React from "react";
import Resturant from "./Components/MainMenu/Resturant";

import UseState from "./Components/Hooks/State";
import UseEffect from "./Components/Hooks/Effect";
import UseReducer from "./Components/Hooks/Reducer";

const App = () => {
  return (
    <div className="mainMenu">
      {/* <UseReducer /> */}
      <Resturant />
      {/* <UseEffect /> */}
      {/* <UseState /> */}
    </div>
  );
};

export default App;
