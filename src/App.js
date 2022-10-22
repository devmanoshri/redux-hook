import React from "react";
import "./App.css";

//import UseStateHook from "./components/UseStateHook";
//import UseEffectHook from "./components/UseEffectHook";
//import MouseContainer from "./components/MouseContainer";
//import IntervalHookCounter from "./components/IntervalHookCounter";
//import UseEffectDataFetching from "./components/UseEffectDataFetching";
//import UseEffectDataFetching2 from "./components/UseEffectDataFetching2";
//import UseEffectDataFetching3 from "./components/UseEffectDataFetching3";
import UserContextHookLevel1 from "./components/UserContextHookLevel1";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <UseEffectDataFetching3 /> */}
      <UserContext.Provider value={"Manoshri"}>
        <ChannelContext.Provider value={"abcd"}>
          <UserContextHookLevel1 />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
