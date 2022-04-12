import "./index.css";

const Header = () => (
  <>
    <div className="add-post-header">
      <div>
        <button className="btn">
          <i className="pencil alternate icon"></i>
          Compose Post
        </button>
        <button>
          <i className="images icon"></i>
          Photo/Video Album
        </button>
        <button>
          <i className="video icon"></i>Live Video
        </button>
      </div>
      <button className="">
        <i className=" close icon"></i>
      </button>
    </div>
  </>
);

export default Header;
