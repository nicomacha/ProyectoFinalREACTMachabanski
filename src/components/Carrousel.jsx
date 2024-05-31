const Carrousel = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../public/carru4.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../public/carru5.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../public/carru6.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
