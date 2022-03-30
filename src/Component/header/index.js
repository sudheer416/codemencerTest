import "./index.css";

const Header = () => (
  <>
    <div className="add-post-header">
      <div>
        <button className="btn">
          <i class="pencil alternate icon"></i>
          Compose Post
        </button>
        <button>
          <i class="images icon"></i>
          Photo/Video Album
        </button>
        <button>
          <i class="video icon"></i>Live Video
        </button>
      </div>
      <button className="">
        <i class=" close icon"></i>
      </button>
    </div>
  </>
);

export default Header;
