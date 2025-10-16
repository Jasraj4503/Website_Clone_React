import banner from "../assets/images/banner-img.jpg";

function Banner() {
  return (
    <div className="position-relative text-center">
      {/* Banner Image */}
      <img src={banner} alt="E-Learning Banner" className="img-fluid w-100" style={{height: "100vh", objectFit: "cover", filter: "brightness(50%)",}}/>
      {/* Overlay Text */}
      <div className="position-absolute top-50 start-50 translate-middle text-white fw-bold" style={{width: "90%", maxWidth: "800px", padding: "10px",}}>
        <h1 className="fs-1">One Place For E-Learning</h1>
        <p className="fs-2">Ever Grow Is The Best Platform To Learn Online.</p>
        <button className="btn btn-warning rounded-0 text-white px-3 py-2 fs-5">Get Register Now</button>
      </div>
    </div>
  );
}

export default Banner;
