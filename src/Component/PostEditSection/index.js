import { useContext } from "react";
import "./index.css";
import GifState from "../../Context/GifState";

const PostEditSection = () => {
  const {
    gifState,
    changeGifState,
    gifImg,
    imgState,
    userinput,
    changeInput
  } = useContext(GifState);

  const renderColorBoxes = () => {
    return (
      <div className="colorbox-section">
        <img
          className="box-img"
          src="https://www.linkpicture.com/q/box2.jpeg"
          alt="boxes"
        />
        <img
          className="box-img"
          src="https://www.linkpicture.com/q/box2.jpeg"
          alt="boxes"
        />
      </div>
    );
  };

  const ComposePost = () => {
    const changingInput = (e) => {
      changeInput(e.target.value);
    };

    return (
      <div className="input-section">
        <img
          className="profile-img"
          src="https://alchinlong.com/wp-content/uploads/2015/09/sample-profile.png"
          alt="profile"
        />

        <input
          className="input-box"
          type="input"
          value={userinput}
          placeholder="Enter Something....."
          onChange={changingInput}
        />
      </div>
    );
  };

  const renderOptionButton = () => {
    return (
      <div>
        <div className="container">
          <div className="button-up">
            <button className="btn-option">
              <i className="user plus icon"></i>Tag friends
            </button>
            <button className="btn-option">
              <i className="map marker alternate icon"></i>Check In
            </button>
          </div>
          <div className="button-up">
            <button
              className="btn-option"
              onClick={() => changeGifState(!gifState)}
            >
              <img
                className="gif-img"
                src="https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_gif-512.png"
                alt="gifs"
              />
              GIFS
            </button>

            <button className="btn-option">
              <i className="calendar alternate icon "></i>Tag Event
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderGifImg = () => {
    return (
      <div className="result">
        <img src={gifImg} className="result-gif-img" />
      </div>
    );
  };

  return (
    <div className="composition-section">
      {ComposePost()}
      {imgState ? renderGifImg() : renderColorBoxes()}
      {renderOptionButton()}
    </div>
  );
};
export default PostEditSection;
