import img1 from "../../../assets/banner.jpg";
import img2 from "../../../assets/Avatar-Profile-Vector.png";
import img3 from "../../../assets/banner.jpg";
import "./hero.css";

const Heroes = () => {
  return (
    <div className="w-[40%]">
      <div
        className="slider"
        style={
          {
            "--width": "100%",
            "--height": "200px",
            "--quantity": 10,
          } as React.CSSProperties
        }
      >
        <div className="list">
          <div className="item">
            <img src={img1} alt="" />
            <div className="title">Hello</div>
          </div>
          <div className="item">
            <img src={img2} className="h-[200px]" alt="" />
            <div className="title">A</div>
          </div>
          <div className="item">
            <img src={img3} alt="" />
            <div className="title">Banner</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title">Avatar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
