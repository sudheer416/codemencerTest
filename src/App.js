import Header from "./Component/header";
import "./App.css";
import { useState, useEffect } from "react";
import PostEditSection from "./Component/PostEditSection";
import GifState from "./Context/GifState";
import Getgifs from "./Component/Getgifs";

function App() {
  const [gifState, changeGifState] = useState(false);
  const [gifImg, changeGifImg] = useState("");
  const [imgState, imgchangeState] = useState(false);
  console.log(gifState);
  console.log(gifImg);
  useEffect(() => {
    console.log(gifImg);
  }, [gifState, imgState]);
  return (
    <GifState.Provider
      value={{
        gifState,
        changeGifState: changeGifState,
        gifImg,
        changeGifImg: changeGifImg,
        imgState,
        imgchangeState: imgchangeState,
      }}
    >
      <Header />

      <PostEditSection />

      {gifState ? (
        <div className="get-gifs">
          <Getgifs />
        </div>
      ) : null}
    </GifState.Provider>
  );
}

export default App;
