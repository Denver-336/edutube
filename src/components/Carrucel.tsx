import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "../interfaces/interfaces";
import { getData } from "../utils/fechData";

export const Carrucel = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState();

  useEffect(() => {
    const fech = getData();
    fech.then((value: any) => {
      setData(value);
      setImg(value[0].thumbnail.path);
      console.log(value);
    });
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center w-100">
        <div id="carouselExample" className="carousel slide w-100">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.pinimg.com/originals/59/f0/5b/59f05b3f19ec3f46531d1addd8b7b85e.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>El Capitán América</h5>
                <p>El primer vengador.</p>
              </div>
            </div>
            {data.length > 0 &&
              data?.map((value: Item) => (
                <div key={value.id} className="carousel-item">
                  <img
                    src={`${value.thumbnail.path}.${value.thumbnail.extension}`}
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block text-info">
                    <h5>{value.name}</h5>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Link type="button" to="/informacion" className="btn btn-danger">
          Ver detalles
        </Link>
      </div>
    </>
  );
};
