import img1 from "../../../assets/p1.avif";
import img2 from "../../../assets/p2.jpg";
import img3 from "../../../assets/p3.jpg";
import img4 from "../../../assets/p5.avif";
import img5 from "../../../assets/p6.jpeg";
import "./hero.css";

const Heroes = () => {
  return (
    <div className="w-full lg:pt-20 bg-[#000316] p-3">
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
            <div className="title">Full Stack developer at Google</div>
          </div>
          <div className="item">
            <img src={img2} className="h-[200px]" alt="" />
            <div className="title">Game developer at Unity</div>
          </div>
          <div className="item">
            <img src={img3} alt="" />
            <div className="title">Ai Developer at Open Ai</div>
          </div>
          <div className="item">
            <img src={img4} alt="" />
            <div className="title">Backend developer at Microsoft</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title">App developer at Facebook</div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="title">Software developer at Amazon</div>
          </div>
          <div className="item">
            <img src={img5} alt="" />
            <div className="title">Software developer at Amazon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
