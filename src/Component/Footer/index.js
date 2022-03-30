import "./index.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="submit-section">
          <button>
            <i class="lock icon"></i>
            <select>
              <option>Only me</option>
            </select>
          </button>
          <button className="btn-post">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
