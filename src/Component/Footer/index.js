import { useContext } from "react";
import GifState from "../../Context/GifState";
import "./index.css";
const Footer = () => {
  const {
    gifImg,
    changeGifImg,
    imgState,
    imgchangeState,
    userinput,
    changeInput,
    postedItem,
    changePostedItem
  } = useContext(GifState);

  const renderChanege = () => {
    if (userinput !== "" && gifImg) {
      console.log(userinput === "");
      console.log("changing");
      imgchangeState(!imgState);
      changeGifImg("");

      console.log(userinput);

      const item = { text: userinput, imgUrl: gifImg };
      changePostedItem([...postedItem, item]);
    } else {
      alert(" Please Enter Text Something");
    }
    changeInput("");
    console.log(userinput);
  };

  return (
    <div>
      <div className="footer">
        <div className="submit-section">
          <button className=" btn-onlyme">
            <i className="lock icon"></i>
            <select>
              <option>Only me</option>
            </select>
          </button>
          <button className="btn-post" onClick={() => renderChanege()}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
