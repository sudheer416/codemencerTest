import Header from "./Component/Header";
import RenderPostList from "./Component/RenderPostList/index.js";
import "./App.css";
import { useState, useEffect } from "react";
import PostEditSection from "./Component/PostEditSection";
import GifState from "./Context/GifState";
import Getgifs from "./Component/Getgifs";
import Footer from "./Component/Footer/index";

function App() {
  const [gifState, changeGifState] = useState(false);
  const [userinput, changeInput] = useState("");
  const [gifImg, changeGifImg] = useState("");
  const [imgState, imgchangeState] = useState(false);
  const [postedItem, changePostedItem] = useState([]);

  useEffect(() => {}, [gifState, imgState, userinput]);
  console.log(postedItem);
  return (
    <GifState.Provider
      value={{
        gifState,
        changeGifState: changeGifState,
        gifImg,
        changeGifImg: changeGifImg,
        imgState,
        imgchangeState: imgchangeState,
        userinput,
        changeInput: changeInput,
        postedItem,
        changePostedItem: changePostedItem
      }}
    >
      <Header />

      <PostEditSection />
      <Footer />
      {gifState ? (
        <div className="get-gifs">
          <Getgifs />
        </div>
      ) : (
        <RenderPostList />
      )}
    </GifState.Provider>
  );
}

export default App;
