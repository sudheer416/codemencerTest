import { useState, useEffect, useContext } from "react";
import GifState from "../../Context/GifState";

import "./index.css";
const Getgifs = () => {
  const {
    gifImg,
    changeGifImg,
    gifState,
    changeGifState,
    imgState,
    imgchangeState,
  } = useContext(GifState);

  const [inputValue, changeInput] = useState("");
  const [gifList, ChangeList] = useState([]);
  console.log(inputValue);
  const handleChange = (e) => {
    changeInput(e.target.value);
  };
  useEffect(() => {
    if (inputValue === "") {
      getGifs();
      console.log("null");
    } else {
      changeGifList(inputValue);
    }
    console.log("rendering gifs");
  }, [inputValue]);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/trending?api_key=8hDWDM9OJJbuSR9UCNjz6fVyGRcAv4HM&limit=20&offset=10";

    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      const setlist = data.data.map((gif) => {
        return gif.images.fixed_height;
      });
      console.log(setlist);
      ChangeList(setlist);
    }
  };
  const changeGifList = async (inputValue) => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=8hDWDM9OJJbuSR9UCNjz6fVyGRcAv4HM&limit=20&offset=10&q=";
    const updatedUrl = url + inputValue;

    const response = await fetch(updatedUrl);
    const data = await response.json();
    if (response.ok) {
      const setlist = data.data.map((gif) => {
        return gif.images.fixed_height;
      });
      console.log(setlist);
      ChangeList(setlist);
    }
  };

  const renderGifs = (setgilist) => {
    const changedState = (url) => {
      if (gifState === true) {
        changeGifState(false);

        console.log(url);
      }
      changeGifImg(url);
      imgchangeState(!imgState);
    };
    return (
      <div className="gif-list">
        {setgilist.map((gif) => {
          return (
            <img
              className="img"
              src={gif.url}
              onClick={() => changedState(gif.url)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="gif_div">
        <input type="search" value={inputValue} onChange={handleChange} />
        {renderGifs(gifList)}
      </div>
    </div>
  );
};
export default Getgifs;
