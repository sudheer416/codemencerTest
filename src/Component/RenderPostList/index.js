import { useContext } from "react";
import "./index.css";
import GifState from "../../Context/GifState";
const RenderPostList = () => {
  const { postedItem } = useContext(GifState);
  return (
    <div className="post-listed">
      <h3>Your Stories</h3>

      <div>
        {postedItem.map((item) => {
          return (
            <div className="item-card">
              <div className="user-section">
                <i class=" user circle icon"></i>
                <p className="user-name">User</p>
              </div>

              <hr />
              <p>{item.text}</p>
              <img src={item.imgUrl} className="post-img" alt={item.text} />
              <hr className="line" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RenderPostList;
